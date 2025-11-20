import type { GenericResponse } from "~/types/generic-response.type";
import type { PaginatedResponse } from "~/types/pagination.type";

interface MonthlySalary {
  id: string;

  salaryMonth: string;

  createdAt: string;

  updatedAt: string;

  payableSalary: number;
}

export const monthlySalaryService = () => {
  const { $api } = useNuxtApp();

  const fetchAllMonthlySalariesByWorkId = async (
    workId: string,
    query: any
  ) => {
    return await $api<PaginatedResponse<MonthlySalary>>(
      `/works/${workId}/monthly-salaries`,
      query
        ? {
            params: query,
          }
        : undefined
    );
  };

  const fetchMonthlySalaryById = async (id: string) => {
    return await $api<GenericResponse<MonthlySalary>>(
      `/monthly-salaries/${id}`
    );
  };

  const fetchMonthlySalaryMetadata = async () => {
    return await $api<GenericResponse<any[]>>(`/monthly-salaries/metadata`);
  };

  const fetchAllAttendancesByMonthlySalaryId = async (id: string) => {
    return await $api<PaginatedResponse<any[]>>(
      `/monthly-salaries/${id}/attendances`
    );
  };

  const addMonthlySalariesByWorkId = async (
    workId: string,
    salaryMonth: string
  ) => {
    return await $api<PaginatedResponse<MonthlySalary>>(
      `/works/${workId}/monthly-salaries`,
      {
        method: "POST",
        body: {
          salaryMonth: salaryMonth,
        },
      }
    );
  };

  const addMonthlySalariesLatestByWorkId = async (workId: string) => {
    return await $api<PaginatedResponse<MonthlySalary>>(
      `/works/${workId}/monthly-salaries/add-latest`,
      {
        method: "POST",
      }
    );
  };

  return {
    fetchMonthlySalaryById,
    fetchAllAttendancesByMonthlySalaryId,
    fetchMonthlySalaryMetadata,
    addMonthlySalariesLatestByWorkId,
    addMonthlySalariesByWorkId,
    fetchAllMonthlySalariesByWorkId,
  };
};
