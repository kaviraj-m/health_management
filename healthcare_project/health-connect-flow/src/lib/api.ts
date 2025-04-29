// API base URL
const API_BASE_URL = 'http://localhost:3001/api';

// Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'PATIENT'; // Only PATIENT role is allowed for registration through frontend
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    role: string;
    profile: {
      firstName: string;
      lastName: string;
      phone?: string;
      avatar?: string;
    };
  };
}

export interface PatientRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  phone?: string;
  gender?: string;
}

export interface PatientResponse {
  id: number;
  userId: number;
  dateOfBirth?: string;
  gender?: string;
  emergencyContact?: string;
  user: {
    id: number;
    email: string;
    role: string;
    profile: {
      firstName: string;
      lastName: string;
      phone?: string;
      avatar?: string;
    };
  };
  medicalConditions?: Array<{
    id: number;
    name: string;
    description?: string;
    diagnosedAt?: string;
  }>;
  healthRecords?: Array<{
    id: number;
    date: string;
    bloodPressure?: string;
    heartRate?: number;
    bloodGlucose?: number;
    notes?: string;
  }>;
  appointments?: Array<{
    id: number;
    date: string;
    status: string;
    doctor: {
      id: number;
      user: {
        profile: {
          firstName: string;
          lastName: string;
        }
      };
      hospital: {
        name: string;
      };
    };
    hospital: {
      name: string;
    };
  }>;
  medicationReminders?: Array<any>;
}

export interface HealthAnalyticsQuery {
  timeRange?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  metricType?: 'all' | 'blood_pressure' | 'heart_rate' | 'blood_glucose';
  startDate?: string;
  endDate?: string;
}

export interface MetricPoint {
  date: string;
  value: any;
}

export interface HealthMetricSeries {
  metric: string;
  data: MetricPoint[];
  average?: number;
  min?: number;
  max?: number;
  trend?: 'increasing' | 'decreasing' | 'stable';
}

export interface HealthDashboardResponse {
  series: HealthMetricSeries[];
  timeRange: string;
  startDate: string;
  endDate: string;
}

export interface AppointmentAnalyticsResponse {
  total: number;
  byStatus: Array<{
    status: string;
    count: number;
  }>;
  upcoming: number;
  byMonth: Array<{
    month: string;
    count: number;
  }>;
}

export interface MedicationAdherenceResponse {
  medications: Array<{
    medication: string;
    adherenceRate: number;
    dosage: string;
    timesPerDay: number;
    startDate: string;
    endDate: string;
  }>;
  overallAdherence: number;
}

export interface HealthRecordData {
  date?: string;
  bloodPressure?: string;
  heartRate?: number;
  bloodGlucose?: number;
  notes?: string;
}

export interface HealthRecordsResponse {
  data: Array<{
    id: number;
    date: string;
    bloodPressure?: string;
    heartRate?: number;
    bloodGlucose?: number;
    notes?: string;
    createdAt: string;
    updatedAt: string;
  }>;
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface MedicationReminderData {
  medication: string;
  dosage?: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  timeArray: string[];
  instructions?: string;
  isActive?: boolean;
}

export interface MedicationRemindersResponse {
  data: Array<{
    id: number;
    medication: string;
    dosage?: string;
    frequency: string;
    startDate: string;
    endDate?: string;
    time: string[];
    instructions?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    patientId: number;
  }>;
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Message Types
export interface Message {
  id: number;
  content: string;
  senderId: number;
  receiverId: number;
  createdAt: string;
  isRead: boolean;
}

export interface Conversation {
  id: number;
  otherUser: {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
  };
  lastMessage: Message | null;
  unreadCount: number;
}

export interface CreateMessageDto {
  content: string;
  receiverId: number;
}

// Appointments API
export interface CreateAppointmentDto {
  date: string;
  preferredTime?: string;
  location?: string;
  type: 'IN_PERSON' | 'VIRTUAL';
  reason?: string;
  doctorId: number;
  hospitalId: number;
}

export interface UpdateAppointmentDto {
  date?: string;
  preferredTime?: string;
  location?: string;
  type?: 'IN_PERSON' | 'VIRTUAL';
  reason?: string;
  status?: 'PENDING' | 'CONFIRMED' | 'RESCHEDULED' | 'CANCELLED' | 'COMPLETED';
}

export interface Appointment {
  id: number;
  date: string;
  preferredTime?: string;
  location?: string;
  type: 'IN_PERSON' | 'VIRTUAL';
  reason?: string;
  status: 'PENDING' | 'CONFIRMED' | 'RESCHEDULED' | 'CANCELLED' | 'COMPLETED';
  doctor: {
    id: number;
    firstName: string;
    lastName: string;
    specialty: string;
  };
  hospital: {
    id: number;
    name: string;
  };
}

// Helper function for API calls
async function apiCall<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
  data?: any,
  token?: string
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// Auth API functions
export const authApi = {
  login: (credentials: LoginCredentials) => {
    return apiCall<AuthResponse>('/auth/login', 'POST', credentials);
  },
  
  register: (userData: RegisterCredentials) => {
    return apiCall<AuthResponse>('/auth/register', 'POST', userData);
  },
  
  getCurrentUser: (token: string) => {
    return apiCall<AuthResponse>('/auth/me', 'GET', undefined, token);
  }
};

// Patients API
export const patientsApi = {
  register: (patientData: PatientRegistrationData) => {
    return apiCall<PatientResponse>('/patients', 'POST', patientData);
  },
  
  getProfile: (token: string) => {
    return apiCall<PatientResponse>('/patients/profile', 'GET', undefined, token);
  },
  
  updateProfile: (token: string, profileData: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    dateOfBirth?: string;
    gender?: string;
    emergencyContact?: string;
    avatar?: string;
  }) => {
    return apiCall<PatientResponse>('/patients/profile', 'PATCH', profileData, token);
  }
};

// Dashboard API
export const dashboardApi = {
  // Health analytics endpoints
  getMyHealthAnalytics: (token: string, query?: HealthAnalyticsQuery) => {
    let queryString = '';
    if (query) {
      const params = new URLSearchParams();
      if (query.timeRange) params.append('timeRange', query.timeRange);
      if (query.metricType) params.append('metricType', query.metricType);
      if (query.startDate) params.append('startDate', query.startDate);
      if (query.endDate) params.append('endDate', query.endDate);
      queryString = `?${params.toString()}`;
    }
    return apiCall<HealthDashboardResponse>(`/dashboard/my/health-analytics${queryString}`, 'GET', undefined, token);
  },
  
  // Appointment analytics endpoints
  getMyAppointmentAnalytics: (token: string) => {
    return apiCall<AppointmentAnalyticsResponse>('/dashboard/my/appointment-analytics', 'GET', undefined, token);
  },
  
  // Medication adherence endpoints
  getMyMedicationAdherence: (token: string) => {
    return apiCall<MedicationAdherenceResponse>('/dashboard/my/medication-adherence', 'GET', undefined, token);
  }
};

// Health Records API
export const healthRecordsApi = {
  // Get current patient's health records
  getMyHealthRecords: (token: string, query?: {
    from?: string;
    to?: string;
    page?: number;
    limit?: number;
  }) => {
    let queryString = '';
    if (query) {
      const params = new URLSearchParams();
      if (query.from) params.append('from', query.from);
      if (query.to) params.append('to', query.to);
      if (query.page) params.append('page', query.page.toString());
      if (query.limit) params.append('limit', query.limit.toString());
      queryString = `?${params.toString()}`;
    }
    return apiCall<HealthRecordsResponse>(`/health-records/my${queryString}`, 'GET', undefined, token);
  },
  
  // Create a new health record for the current patient
  createHealthRecord: (token: string, data: HealthRecordData) => {
    return apiCall<any>('/health-records/my', 'POST', data, token);
  },
  
  // Get a specific health record by ID
  getHealthRecord: (token: string, recordId: number) => {
    return apiCall<any>(`/health-records/${recordId}`, 'GET', undefined, token);
  },
  
  // Update a health record
  updateHealthRecord: (token: string, recordId: number, data: HealthRecordData) => {
    return apiCall<any>(`/health-records/${recordId}`, 'PATCH', data, token);
  },
  
  // Get health records for a specific patient (for doctors/admins)
  getPatientHealthRecords: (token: string, patientId: number, query?: {
    from?: string;
    to?: string;
    page?: number;
    limit?: number;
  }) => {
    let queryString = '';
    if (query) {
      const params = new URLSearchParams();
      if (query.from) params.append('from', query.from);
      if (query.to) params.append('to', query.to);
      if (query.page) params.append('page', query.page.toString());
      if (query.limit) params.append('limit', query.limit.toString());
      queryString = `?${params.toString()}`;
    }
    return apiCall<HealthRecordsResponse>(`/health-records/patient/${patientId}${queryString}`, 'GET', undefined, token);
  },
};

// Medication Reminders API
export const medicationRemindersApi = {
  // Get current patient's medication reminders
  getMyMedicationReminders: (token: string, query?: {
    active?: boolean;
    page?: number;
    limit?: number;
  }) => {
    let queryString = '';
    if (query) {
      const params = new URLSearchParams();
      if (query.active !== undefined) params.append('active', query.active.toString());
      if (query.page) params.append('page', query.page.toString());
      if (query.limit) params.append('limit', query.limit.toString());
      queryString = `?${params.toString()}`;
    }
    return apiCall<MedicationRemindersResponse>(`/medication-reminders/my${queryString}`, 'GET', undefined, token);
  },
  
  // Create a new medication reminder for the current patient
  createMedicationReminder: (token: string, data: MedicationReminderData) => {
    return apiCall<any>('/medication-reminders/my', 'POST', data, token);
  },
  
  // Get a specific medication reminder by ID
  getMedicationReminder: (token: string, reminderId: number) => {
    return apiCall<any>(`/medication-reminders/${reminderId}`, 'GET', undefined, token);
  },
  
  // Update a medication reminder
  updateMedicationReminder: (token: string, reminderId: number, data: Partial<MedicationReminderData>) => {
    return apiCall<any>(`/medication-reminders/${reminderId}`, 'PATCH', data, token);
  },
  
  // Delete a medication reminder
  deleteMedicationReminder: (token: string, reminderId: number) => {
    return apiCall<any>(`/medication-reminders/${reminderId}`, 'DELETE', undefined, token);
  },
  
  // Get medication reminders for a specific patient (for doctors/admins)
  getPatientMedicationReminders: (token: string, patientId: number, query?: {
    active?: boolean;
    page?: number;
    limit?: number;
  }) => {
    let queryString = '';
    if (query) {
      const params = new URLSearchParams();
      if (query.active !== undefined) params.append('active', query.active.toString());
      if (query.page) params.append('page', query.page.toString());
      if (query.limit) params.append('limit', query.limit.toString());
      queryString = `?${params.toString()}`;
    }
    return apiCall<MedicationRemindersResponse>(`/medication-reminders/patient/${patientId}${queryString}`, 'GET', undefined, token);
  },
};

// Messages API
export const messagesApi = {
  getConversations: async (token: string): Promise<Conversation[]> => {
    return apiCall<Conversation[]>('/messages/conversations', 'GET', undefined, token);
  },

  getConversation: async (token: string, userId: number): Promise<Message[]> => {
    return apiCall<Message[]>(`/messages/conversation/${userId}`, 'GET', undefined, token);
  },

  sendMessage: async (token: string, data: CreateMessageDto): Promise<Message> => {
    return apiCall<Message>('/messages', 'POST', data, token);
  },

  markAsRead: async (token: string, messageId: number, isRead: boolean): Promise<void> => {
    return apiCall<void>(`/messages/${messageId}/read`, 'PATCH', { isRead }, token);
  },

  markAllAsRead: async (token: string, senderId: number): Promise<void> => {
    return apiCall<void>(`/messages/read-all/${senderId}`, 'PATCH', undefined, token);
  }
};

// Appointments API
export const appointmentsApi = {
  // Get all appointments for the authenticated user
  getMyAppointments: async (token: string): Promise<Appointment[]> => {
    return apiCall<Appointment[]>(`/appointments/me`, 'GET', undefined, token);
  },

  // Create a new appointment for the authenticated user
  createMyAppointment: async (token: string, data: CreateAppointmentDto): Promise<Appointment> => {
    return apiCall<Appointment>(`/appointments/me`, 'POST', data, token);
  },

  // Get a specific appointment by ID for the authenticated user
  getMyAppointment: async (token: string, id: number): Promise<Appointment> => {
    return apiCall<Appointment>(`/appointments/me/${id}`, 'GET', undefined, token);
  },

  // Update an appointment for the authenticated user
  updateMyAppointment: async (token: string, id: number, data: UpdateAppointmentDto): Promise<Appointment> => {
    return apiCall<Appointment>(`/appointments/me/${id}`, 'PATCH', data, token);
  },

  // Delete an appointment for the authenticated user
  deleteMyAppointment: async (token: string, id: number): Promise<void> => {
    return apiCall<void>(`/appointments/me/${id}`, 'DELETE', undefined, token);
  }
};

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'health_connect_token',
  USER_DATA: 'health_connect_user',
  USER_ID: 'health_connect_user_id'
}; 