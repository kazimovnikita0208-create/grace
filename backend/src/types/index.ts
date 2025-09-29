// Основные типы для приложения салона красоты

export interface User {
  id: number;
  telegramId: number;
  firstName: string;
  lastName?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Master {
  id: number;
  name: string;
  specialization: string;
  description?: string;
  photoUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: number;
  name: string;
  description?: string;
  price: number;
  duration: number; // в минутах
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Appointment {
  id: number;
  userId: number;
  masterId: number;
  serviceId: number;
  appointmentDate: Date;
  status: AppointmentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface MasterSchedule {
  id: number;
  masterId: number;
  dayOfWeek: number; // 0-6 (воскресенье-суббота)
  startTime: string; // HH:mm
  endTime: string;   // HH:mm
  isWorking: boolean;
}

export interface Admin {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// API Response типы
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Request типы
export interface CreateUserRequest {
  telegramId: number;
  firstName: string;
  lastName?: string;
  phone?: string;
}

export interface CreateMasterRequest {
  name: string;
  specialization: string;
  description?: string;
  photoUrl?: string;
}

export interface CreateServiceRequest {
  name: string;
  description?: string;
  price: number;
  duration: number;
}

export interface CreateAppointmentRequest {
  userId: number;
  masterId: number;
  serviceId: number;
  appointmentDate: string; // ISO string
  notes?: string;
}

export interface UpdateAppointmentRequest {
  appointmentDate?: string;
  status?: AppointmentStatus;
  notes?: string;
}
