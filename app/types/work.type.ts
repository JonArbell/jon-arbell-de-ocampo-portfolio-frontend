import type { User } from "./user.type";

export interface Work {
  id: string;
  user: User;
  active: boolean;
  endTime: number;
  employer: string;
  fullTime: boolean;
  jobTitle: string;
  createdAt: string;
  dailyRate: number;
  startTime: number;
  updatedAt: string | null;
  hourlyRate: number;
  minuteRate: number;
  description: string;
  hoursPerDay: number;
  monthlySalary: number;
  endContractDate: string; // yyyy-MM-dd
  startContractDate: string; // yyyy-MM-dd
}
