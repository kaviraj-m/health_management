import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Loader2, X } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { STORAGE_KEYS, medicationRemindersApi, MedicationReminderData } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const medicationFormSchema = z.object({
  medication: z.string().min(2, { message: "Medication name is required" }),
  dosage: z.string().optional(),
  frequency: z.string().min(1, { message: "Frequency is required" }),
  startDate: z.string().min(1, { message: "Start date is required" }),
  endDate: z.string().optional(),
  timeArray: z.array(z.string()).min(1, { message: "At least one time is required" }),
});

type FormData = z.infer<typeof medicationFormSchema>;

// Frequency options
const frequencyOptions = [
  { value: "Once daily", label: "Once daily" },
  { value: "Twice daily", label: "Twice daily" },
  { value: "Three times daily", label: "Three times daily" },
  { value: "Every morning", label: "Every morning" },
  { value: "Every evening", label: "Every evening" },
  { value: "Before meals", label: "Before meals" },
  { value: "After meals", label: "After meals" },
  { value: "As needed", label: "As needed" },
];

interface EditMedicationDialogProps {
  medication: {
    id: number;
    medication: string;
    dosage: string | null;
    frequency: string;
    startDate: string;
    endDate: string | null;
    time: string[];
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

// Extract time from ISO string
const extractTimeFromISO = (isoString: string) => {
  const date = new Date(isoString);
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

export default function EditMedicationDialog({
  medication,
  open,
  onOpenChange,
  onSuccess,
}: EditMedicationDialogProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(medicationFormSchema),
    defaultValues: {
      medication: medication.medication,
      dosage: medication.dosage || "",
      frequency: medication.frequency,
      startDate: medication.startDate.split('T')[0],
      endDate: medication.endDate ? medication.endDate.split('T')[0] : "",
      timeArray: medication.time.map(t => extractTimeFromISO(t)),
    },
  });

  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [timeInputs, setTimeInputs] = useState<string[]>(
    medication.time.map(t => extractTimeFromISO(t))
  );

  // Get user token from storage
  const getToken = () => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || '';
  };

  // Handle adding a new time input field
  const addTimeInput = () => {
    setTimeInputs([...timeInputs, '']);
    const currentTimeArray = form.getValues('timeArray');
    form.setValue('timeArray', [...currentTimeArray, '']);
  };

  // Handle removing a time input field
  const removeTimeInput = (index: number) => {
    const newTimeInputs = [...timeInputs];
    newTimeInputs.splice(index, 1);
    setTimeInputs(newTimeInputs);

    const currentTimeArray = form.getValues('timeArray');
    const newTimeArray = [...currentTimeArray];
    newTimeArray.splice(index, 1);
    form.setValue('timeArray', newTimeArray);
  };

  // Handle time input change
  const handleTimeChange = (index: number, value: string) => {
    const currentTimeArray = form.getValues('timeArray');
    const newTimeArray = [...currentTimeArray];
    newTimeArray[index] = value;
    form.setValue('timeArray', newTimeArray);
  };

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      setSubmitting(true);
      const token = getToken();

      // Ensure all required fields are present
      const reminderData: MedicationReminderData = {
        medication: data.medication,
        frequency: data.frequency,
        startDate: data.startDate,
        timeArray: data.timeArray,
        // Optional fields
        dosage: data.dosage || undefined,
        endDate: data.endDate || undefined,
      };

      await medicationRemindersApi.updateMedicationReminder(
        token,
        medication.id,
        reminderData
      );
      toast({
        title: "Success",
        description: "Medication reminder updated successfully",
      });

      // Notify parent
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to update medication:", error);
      toast({
        title: "Error",
        description: "Failed to update medication reminder",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Medication</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="medication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medication Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter medication name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dosage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dosage (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 500mg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frequency</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {frequencyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date (Optional)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label>Times</Label>
              {timeInputs.map((_, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    type="time"
                    value={timeInputs[index]}
                    onChange={(e) => handleTimeChange(index, e.target.value)}
                  />
                  {timeInputs.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeTimeInput(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addTimeInput}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Time
              </Button>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  'Update Medication'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 