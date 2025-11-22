<template>

  <Head title="Task Management" description="Organize, track, and manage all my tasks efficiently." />

  <PageLayout>
    <div class="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col gap-6">

      <!-- Header -->
      <header class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1
            class="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Tasks
          </h1>
          <p class="text-zinc-400 text-sm md:text-base mt-1">
            Manage all tasks in a sleek modern Kanban board.
          </p>
        </div>

        <div class="flex gap-3 mt-2 md:mt-0 flex-wrap">
          <button @click="openTaskModal()"
            class="px-5 py-2 bg-teal-500 text-zinc-900 rounded-2xl font-semibold hover:bg-teal-400 shadow-lg transition-all">
            + New Task
          </button>
          <button @click="openListModal()"
            class="px-5 py-2 bg-orange-500 text-zinc-900 rounded-2xl font-semibold hover:bg-orange-400 shadow-lg transition-all">
            + New List
          </button>
        </div>
      </header>

      <!-- Kanban Board -->
      <div class="overflow-x-auto w-full">
        <div class="flex gap-6 min-w-max pb-6">

          <!-- Unassigned Column -->
          <div
            class="w-80 sm:w-96 flex-shrink-0 bg-zinc-900 rounded-3xl border border-zinc-700 p-5 shadow-xl flex flex-col transition hover:shadow-2xl">
            <h2 class="text-xl md:text-2xl font-semibold text-teal-300 mb-4">Unassigned</h2>

            <VueDraggableNext v-model="unassignedTasks" :group="{ name: 'tasks', pull: true, put: true }" item-key="id"
              @change="async (evt: any) => await onTaskMoved(evt, null)"
              class="flex flex-col gap-4 flex-1 overflow-auto max-h-[70vh] p-2">

              <small class="text-xs sm:text-sm text-zinc-400 italic text-center mt-2 select-none"
                v-if="!unassignedTasks.length">No unassigned tasks yet</small>

              <TaskCard v-else v-for="task in unassignedTasks" :key="task.id" :task="task" />
            </VueDraggableNext>
          </div>

          <!-- Dynamic Task Lists -->
          <div v-for="list in taskLists?.data" :key="list.id"
            class="w-80 sm:w-96 flex-shrink-0 bg-zinc-900 rounded-3xl border border-zinc-700 p-5 shadow-xl flex flex-col transition hover:shadow-2xl">

            <!-- List Header -->
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl md:text-2xl font-semibold text-teal-300">{{ list.name }}</h2>
              <button class="text-zinc-400 hover:text-orange-400 transition" @click="editList(list.id)">
                <i class="i-lucide-edit w-5 h-5"></i>
              </button>
            </div>

            <!-- Tasks -->
            <VueDraggableNext v-model="list.tasks" :group="{ name: 'tasks', pull: true, put: true }" item-key="id"
              class="flex flex-col gap-4 flex-1 overflow-auto min-h-[120px] p-2"
              @change="async (evt: any) => await onTaskMoved(evt, list.id)">
              <small class="text-xs sm:text-sm text-zinc-400 italic text-center mt-2 select-none"
                v-if="!list.tasks.length">No tasks yet</small>
              <TaskCard v-else v-for="task in list.tasks" :key="task.id" :task="task" />
            </VueDraggableNext>

            <!-- Add Task Button -->
            <button @click="openTaskModal(list.id)"
              class="mt-4 text-sm w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-medium transition">
              + Add Task
            </button>
          </div>

        </div>
      </div>

      <!-- Add/Edit Task Modal -->
      <div v-if="taskModalOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
        <div class="bg-zinc-900 rounded-3xl w-full max-w-lg p-6 relative shadow-2xl animate-fadeIn">
          <h3 class="text-xl md:text-2xl font-semibold text-teal-300 mb-4">
            {{ editingTask ? 'Edit Task' : 'New Task' }}
          </h3>

          <div class="flex flex-col gap-4">
            <input type="text" v-model="taskForm.title" placeholder="Task Name"
              class="w-full p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition" />

            <textarea v-model="taskForm.description" rows="4" placeholder="Task Description"
              class="w-full p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"></textarea>
          </div>

          <div class="mt-6 flex justify-end gap-3 flex-wrap">
            <button @click="closeTaskModal"
              class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium transition">
              Cancel
            </button>
            <button @click="saveTask"
              class="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-zinc-900 rounded-xl font-semibold transition">
              Save
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Add/Edit List Modal -->
    <div v-if="listModalOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div class="bg-zinc-900 rounded-3xl w-full max-w-md p-6 relative shadow-2xl animate-fadeIn">
        <h3 class="text-xl md:text-2xl font-semibold text-orange-400 mb-4">
          New List
        </h3>

        <div class="flex flex-col gap-4">
          <input type="text" v-model="listForm.name" placeholder="List Name"
            class="w-full p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition" />
        </div>

        <div class="mt-6 flex justify-end gap-3 flex-wrap">
          <button @click="closeListModal"
            class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium transition">
            Cancel
          </button>
          <button @click="saveList"
            class="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-zinc-900 rounded-xl font-semibold transition">
            Save
          </button>
        </div>
      </div>
    </div>

  </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from '~/layouts/authenticated/PageLayout.vue';
import TaskCard from './components/TaskCard.vue';
import { ref, onMounted } from 'vue';
import { useMyBreadcrumbStore } from '~/stores/breadcrumb';
import { VueDraggableNext } from 'vue-draggable-next';
import { taskListService } from '~/services/task-list.service';
import { taskService } from '~/services/task.service';
import type { Task } from '~/types/task.type';
import Head from '~/components/Head.vue';

const toast = useToast();

const route = useRoute();

const breadCrumbStore = useMyBreadcrumbStore();
onMounted(() => {
  breadCrumbStore.breadCrumb = [];
  if (!breadCrumbStore.breadCrumb.find(b => b.link === '/secret/tasks'))
    breadCrumbStore.breadCrumb.push({ name: 'Tasks', link: '/secret/tasks' });
});

const { data: taskLists, refresh: taskListsRefresh } = await useAsyncData(`task-lists-${route.path}`, async () =>
  await taskListService().fetchAllTaskLists());

const { data: unassignedTasksData, refresh: tasksRefresh } = await useAsyncData(`unassigned-tasks-${route.path}`, async () =>
  await taskService().fetchAllUnassignedTasks());

const unassignedTasks = ref<Task[]>(unassignedTasksData.value?.data || []);

watch(unassignedTasksData, (val: any) => {
  unassignedTasks.value = val?.data || [];
});

const taskModalOpen = ref(false);
const taskForm = ref<{ id?: string; title: string; description: string; listId?: string }>({ title: '', description: '' });
const editingTask = ref<any | null>(null);

const editList = (listId: string) => console.log("Edit list", listId);

const onTaskMoved = async (evt: any, listId: string | null) => {

  console.log(evt);
  console.log(listId);

  try {

    if (evt.added) {

      const task = evt.added.element as Task;

      if (!listId) {

        await taskService().removeTaskList(task.id);
        return;
      }

      // Skip if task already in this list
      if (task.taskListId === listId) return;

      // Move the task to the new list
      await taskListService().moveTaskToTaskList(listId, task.id);

      // Refresh UI
      await taskListsRefresh();
      await tasksRefresh();
    }

  } catch (e) {
    console.log(e);
    toast.error({
      title: "Oops!",
      message: "Failed moving task."
    });
  }

};

const openTaskModal = (listId?: string) => {
  taskModalOpen.value = true;
  editingTask.value = null;
  taskForm.value = { title: '', description: '', listId };
};

const closeTaskModal = () => {
  taskModalOpen.value = false;
  editingTask.value = null;
};

const saveTask = async () => {
  if (!taskForm.value.title) return alert("Task title is required!");

  try {

    if (taskForm.value.listId) {
      await taskListService().addTaskByTaskListId(taskForm.value.listId, taskForm.value);
      await taskListsRefresh();

    } else {
      await taskService().addTask(taskForm.value);
      await tasksRefresh();
    }


    closeTaskModal();
  } catch (e) {

  }
};

const listModalOpen = ref(false);
const listForm = ref<{ name: string }>({ name: '' });

// Open modal
const openListModal = () => {
  listForm.value.name = '';
  listModalOpen.value = true;
};

// Close modal
const closeListModal = () => {
  listModalOpen.value = false;
};

// Save list
const saveList = async () => {
  if (!listForm.value.name.trim()) return alert("List name is required!");

  try {
    const newL = {
      name: listForm.value.name
    };

    await taskListService().addTaskList(newL);
    await taskListsRefresh();
    closeListModal();
  } catch (e) {
    toast.error({
      title: 'Oops!',
      message: 'Failed added task list.'
    });
  }
};
</script>

<style scoped>
/* Horizontal scrollbar for Kanban */
::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(100, 200, 180, 0.5);
  border-radius: 3px;
}

/* Smooth modal animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.25s ease-out;
}
</style>
