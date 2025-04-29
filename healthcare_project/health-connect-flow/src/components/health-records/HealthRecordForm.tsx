import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { STORAGE_KEYS, healthRecordsApi, HealthRecordData } from "@/lib/api";

// Schema for health record form validation
const healthRecordSchema = z.object({
  date: z.string().optional(),
  bloodPressure: z.string().optional().refine(value => {
    if (!value) return true;
    return /^\d{2,3}\/\d{2,3}$/.test(value);
  }, {
    message: "Blood pressure must be in the format 'systolic/diastolic' (e.g., 120/80)",
  }),
  heartRate: z.coerce.number().min(30).max(220).optional(),
  bloodGlucose: z.coerce.number().min(30).max(500).optional(),
  notes: z.string().max(500).optional(),
});

export type HealthRecordFormData = z.infer<typeof healthRecordSchema>;

interface HealthRecordFormProps {
  initialData?: HealthRecordData;
  recordId?: number;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function HealthRecordForm({
  initialData,
  recordId,
  onSuccess,
  onCancel
}: HealthRecordFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const isEditMode = !!recordId;

  // Format date for form initial values
  const getDefaultDate = () => {
    if (initialData?.date) {
      return initialData.date.substring(0, 10);
    }
    return new Date().toISOString().substring(0, 10);
  };

  // Set up form with validation
  const form = useForm<HealthRecordFormData>({
    resolver: zodResolver(healthRecordSchema),
    defaultValues: {
      date: getDefaultDate(),
      bloodPressure: initialData?.bloodPressure || "",
      heartRate: initialData?.heartRate || undefined,
      bloodGlucose: initialData?.bloodGlucose || undefined,
      notes: initialData?.notes || "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: HealthRecordFormData) => {
    try {
      setIsSubmitting(true);
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      
      if (!token) {
        toast({
          title: "Authentication Error",
          description: "You must be logged in to submit health records.",
          variant: "destructive",
        });
        return;
      }

      // Filter out undefined or empty values
      const submitData: HealthRecordData = Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== undefined && v !== "")
      );

      if (isEditMode && recordId) {
        // Update existing record
        await healthRecordsApi.updateHealthRecord(token, recordId, submitData);
        toast({
          title: "Health record updated",
          description: "Your health record has been successfully updated.",
        });
      } else {
        // Create new record
        await healthRecordsApi.createHealthRecord(token, submitData);
        toast({
          title: "Health record created",
          description: "Your health record has been successfully saved.",
        });
      }

      // Call success callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting health record:", error);
      toast({
        title: "Error",
        description: "Failed to save your health record. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>
                When were these measurements taken?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="bloodPressure"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Pressure (mmHg)</FormLabel>
                <FormControl>
                  <Input placeholder="120/80" {...field} />
                </FormControl>
                <FormDescription>
                  Format: systolic/diastolic
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="heartRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heart Rate (bpm)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="75" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bloodGlucose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Glucose (mg/dL)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="110" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add any additional notes or observations..."
                  className="min-h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          )}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-health-blue hover:bg-health-blue-dark"
          >
            {isSubmitting ? 'Saving...' : isEditMode ? 'Update Record' : 'Save Record'}
          </Button>
        </div>
      </form>
    </Form>
  );
} 