import type { PaginatedResponse } from "~/types/pagination.type";
import type { GenericResponse } from "~/types/generic-response.type";

interface Work {
  id: string;
  employer: string;
  description: string;
  startContractDate: string;
  endContractDate: string;
  active: boolean;
  fullTime: boolean;
  monthlySalary: number;
  dailyRate: number;
  hourlyRate: number;
  minuteRate: number;
  jobTitle: string;
  hoursPerDay: number;
  startTime: number;
  endTime: number;
  createdAt: string;
  updatedAt: string;
}

export const workService = () => {
  const { $api } = useNuxtApp();

  const fetchWorkById = async (workId: string) => {
    return await $api<GenericResponse<Work>>(`/works/${workId}`);
  };

  const fetchAllWorkInfosByWorkId = async (workId: string) => {
    return await $api<PaginatedResponse<any>>(`/works/${workId}/work-infos`);
  };

  const fetchAllWorks = async () => {
    return await $api<PaginatedResponse<Work>>(`/works`, {
      baseURL: "http://localhost:8080/api",
    });
  };

  return {
    fetchWorkById,
    fetchAllWorks,
    fetchAllWorkInfosByWorkId,
  };
};
