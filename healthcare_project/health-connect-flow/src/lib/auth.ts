import { authApi, STORAGE_KEYS, AuthResponse } from './api';

// Save auth data to localStorage
export function saveAuthData(authData: AuthResponse): void {
  localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authData.token);
  localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(authData.user));
}

// Clear auth data from localStorage
export function clearAuthData(): void {
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
}

// Get auth token from localStorage
export function getToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
}

// Get user data from localStorage
export function getUserData(): AuthResponse['user'] | null {
  const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
  return userData ? JSON.parse(userData) : null;
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return !!getToken();
}

// Get user role
export function getUserRole(): string | null {
  const userData = getUserData();
  return userData ? userData.role : null;
}

// Check if the logged in user is a patient
export function isPatient(): boolean {
  return getUserRole() === 'PATIENT';
}

// Check if the logged in user is a doctor
export function isDoctor(): boolean {
  return getUserRole() === 'DOCTOR';
}

// Check if the logged in user is an admin
export function isAdmin(): boolean {
  return getUserRole() === 'ADMIN';
}

// Get appropriate redirect path based on user role
export function getRedirectPath(): string {
  const role = getUserRole();
  
  switch (role) {
    case 'PATIENT':
      return '/dashboard';
    case 'DOCTOR':
      return '/doctor/dashboard';
    case 'ADMIN':
      return '/admin/dashboard';
    default:
      return '/login';
  }
} 