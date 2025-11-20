import type { GenericResponse } from "~/types/generic-response.type";

interface Attendance {
  id: string;

  timeIn: string;
  timeOut: string;

  remarks: string;

  isDoublePay: boolean;

  isAbsent: boolean;

  lateMinutes: number;
  lateHours: number;
  lateDeduction: number;

  underTimeMinutes: number;
  underTimeHours: number;
  underTimeDeduction: number;

  totalDeductions: number;

  overtimeMinutes: number;
  overtimeHours: number;
  overtimePay: number;

  workedMinutes: number;
  workedHours: number;

  dayOfMonth: number;
}

export const attendanceService = () => {
  const { $api } = useNuxtApp();

  const addAttendanceManual = async (workId: string, body: any) => {
    return await $api<GenericResponse<Attendance>>(
      `/monthly-salaries/${workId}/attendances`,
      {
        method: "POST",
        body: body,
      }
    );
  };

  return {
    addAttendanceManual,
  };
};
