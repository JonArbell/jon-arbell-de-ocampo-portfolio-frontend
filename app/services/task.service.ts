import type { GenericResponse } from "~/types/generic-response.type";
import type { Task } from "~/types/task.type";

export const taskService = () => {
  const { $api } = useNuxtApp();

  const addTask = async (body: any) => {
    return await $api(`/tasks`, {
      body: body,
      method: "POST",
    });
  };

  const removeTaskList = async (id: string) => {
    return await $api(`/tasks/${id}/remove-task-list`, {
      method: "PATCH",
    });
  };

  const fetchAllUnassignedTasks = async () => {
    return await $api<GenericResponse<Task[]>>(`/tasks`);
  };

  return { addTask, fetchAllUnassignedTasks, removeTaskList };
};
