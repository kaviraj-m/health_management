import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
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

interface AddMedicationFormProps {
  onSuccess: () => void;
}

export default function AddMedicationForm({ onSuccess }: AddMedicationFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(medicationFormSchema),
    defaultValues: {
      medication: "",
      dosage: "",
      frequency: "",
      startDate: new Date().toISOString().split('T')[0],
      endDate: "",
      timeArray: [''],
    },
  });

  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [timeInputs, setTimeInputs] = useState<string[]>(['']);

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

      await medicationRemindersApi.createMedicationReminder(token, reminderData);
      toast({
        title: "Success",
        description: "Medication reminder created successfully",
      });

      // Reset form and notify parent
      form.reset();
      setTimeInputs(['']);
      onSuccess();
    } catch (error) {
      console.error("Failed to create medication:", error);
      toast({
        title: "Error",
        description: "Failed to create medication reminder",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Medication</CardTitle>
        <CardDescription>Create a new medication reminder</CardDescription>
      </CardHeader>
      <CardContent>
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

            <div className="flex justify-end">
              <Button type="submit" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  'Add Medication'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
} 