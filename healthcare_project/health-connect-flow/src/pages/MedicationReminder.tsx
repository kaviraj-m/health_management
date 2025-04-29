import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { STORAGE_KEYS, medicationRemindersApi } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import AddMedicationDialog from "@/components/medication/AddMedicationDialog";
import EditMedicationDialog from "@/components/medication/EditMedicationDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Sidebar from "@/components/dashboard/Sidebar";

interface MedicationReminder {
  id: number;
  medication: string;
  dosage: string | null;
  frequency: string;
  startDate: string;
  endDate: string | null;
  time: string[];
}

export default function MedicationReminder() {
  const [medications, setMedications] = useState<MedicationReminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMedication, setEditingMedication] = useState<MedicationReminder | null>(null);
  const [deletingMedication, setDeletingMedication] = useState<MedicationReminder | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { toast } = useToast();

  // Get user token from storage
  const getToken = () => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || '';
  };

  // Fetch medications
  const fetchMedications = async () => {
    try {
      setLoading(true);
      const token = getToken();
      const response = await medicationRemindersApi.getMyMedicationReminders(token);
      setMedications(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error("Failed to fetch medications:", error);
      toast({
        title: "Error",
        description: "Failed to fetch medication reminders",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete medication
  const handleDelete = async () => {
    if (!deletingMedication) return;

    try {
      const token = getToken();
      await medicationRemindersApi.deleteMedicationReminder(token, deletingMedication.id);
      toast({
        title: "Success",
        description: "Medication reminder deleted successfully",
      });
      fetchMedications();
    } catch (error) {
      console.error("Failed to delete medication:", error);
      toast({
        title: "Error",
        description: "Failed to delete medication reminder",
        variant: "destructive",
      });
    } finally {
      setDeletingMedication(null);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar userType="patient" />
      <div className="flex-1 container mx-auto py-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Medication Reminders</h1>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Medication
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : medications.length === 0 ? (
          <Card>
            <CardContent className="py-6">
              <p className="text-center text-muted-foreground">
                No medication reminders found. Add your first medication reminder above.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {medications.map((medication) => (
              <Card key={medication.id}>
                <CardHeader>
                  <CardTitle>{medication.medication}</CardTitle>
                  <CardDescription>
                    {medication.dosage && <div>Dosage: {medication.dosage}</div>}
                    <div>Frequency: {medication.frequency}</div>
                    <div>Start Date: {new Date(medication.startDate).toLocaleDateString()}</div>
                    {medication.endDate && (
                      <div>End Date: {new Date(medication.endDate).toLocaleDateString()}</div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-medium">Times:</div>
                    <div className="space-y-1">
                      {medication.time.map((time, index) => (
                        <div key={index} className="text-sm">
                          {new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingMedication(medication)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeletingMedication(medication)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <AddMedicationDialog
          open={showAddDialog}
          onOpenChange={setShowAddDialog}
          onSuccess={fetchMedications}
        />

        {editingMedication && (
          <EditMedicationDialog
            medication={editingMedication}
            open={!!editingMedication}
            onOpenChange={(open) => !open && setEditingMedication(null)}
            onSuccess={fetchMedications}
          />
        )}

        <AlertDialog open={!!deletingMedication} onOpenChange={(open) => !open && setDeletingMedication(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the medication reminder.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
