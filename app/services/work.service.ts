import type { PaginatedResponse } from "~/types/pagination.type";
import type { GenericResponse } from "~/types/generic-response.type";
import type { ActivityLog } from "~/types/activity-log.type";
import type { Work } from "~/types/work.type";
import type { NameValue } from "~/types/name-value.type";

interface Year {
  year: number;
}

export const workService = () => {
  const { $api } = useNuxtApp();

  const addWork = async (body: any) => {
    return await $api<GenericResponse<Work>>(`/works`, {
      method: "POST",
      body: body,
    });
  };

  const fetchWorkById = async (workId: string) => {
    return await $api<GenericResponse<Work>>(`/works/${workId}`);
  };

  const fetchAllWorkInfosByWorkId = async (workId: string) => {
    return await $api<
      PaginatedResponse<
        ActivityLog<{
          work: Work;
        }>
      >
    >(`/works/${workId}/work-infos`);
  };

  const fetchAllWorks = async () => {
    return await $api<PaginatedResponse<Work>>(`/works`);
  };

  const fetchContractYearsByWorkId = async (workId: string) => {
    return await $api<GenericResponse<Year[]>>(
      `/works/${workId}/contract-years`
    );
  };

  const fetchAvailableMonthsByWorkId = async (
    workId: string,
    year: number = new Date().getFullYear()
  ) => {
    return await $api<GenericResponse<NameValue[]>>(
      `/works/${workId}/monthly-salaries/months/available`,
      {
        params: {
          year: year,
        },
      }
    );
  };

  return {
    addWork,
    fetchContractYearsByWorkId,
    fetchAvailableMonthsByWorkId,
    fetchWorkById,
    fetchAllWorks,
    fetchAllWorkInfosByWorkId,
  };
};
