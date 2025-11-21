import type { GenericResponse } from "~/types/generic-response.type";
import type { PaginatedResponse } from "~/types/pagination.type";

export const taskListService = () => {
  const { $api } = useNuxtApp();

  const fetchAllTasksByTaskListId = async (listId: string) => {
    return await $api<PaginatedResponse<any[]>>(`/task-lists/${listId}/tasks`);
  };

  const fetchAllTaskLists = async () => {
    return await $api<GenericResponse<any[]>>(`/task-lists`);
  };

  const addTaskList = async (body: any) => {
    return await $api<GenericResponse<any>>(`/task-lists`, {
      method: "POST",
      body: body,
    });
  };

  const moveTaskToTaskList = async (ListId: string | null, taskId: string) => {
    return await $api<GenericResponse<any>>(
      `/task-lists/${ListId}/tasks/${taskId}/move`,
      {
        method: "PATCH",
      }
    );
  };

  const addTaskByTaskListId = async (ListId: string, body: any) => {
    return await $api<GenericResponse<any>>(`/task-lists/${ListId}/tasks`, {
      method: "POST",
      body: body,
    });
  };

  return {
    moveTaskToTaskList,
    fetchAllTaskLists,
    addTaskList,
    addTaskByTaskListId,
    fetchAllTasksByTaskListId,
  };
};
