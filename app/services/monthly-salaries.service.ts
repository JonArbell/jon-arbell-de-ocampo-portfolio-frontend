import type { PaginatedResponse } from "~/types/pagination.type";

interface MonthlySalary {
  id: string;

  salaryMonth: string;

  createdAt: string;

  updatedAt: string;

  payableSalary: number;
}

export const monthlySalaryService = () => {
  const fetchAllMonthlySalariesByWorkId = async (workId: string) => {
    return await $fetch<PaginatedResponse<MonthlySalary>>(
      `/works/${workId}/monthly-salaries`
    );
  };

  return {
    fetchAllMonthlySalariesByWorkId,
  };
};
