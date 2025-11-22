import { defineStore } from "pinia";

interface WorkForm {
  jobTitle: string;
  employer: string;
  description: string;
  hoursPerDay: number;
  startTime: number;
  endTime: number;
  breakStartTime: number;
  breakEndTime: number;
  monthlySalary: number;
  fullTime: boolean;
  dailyRateType: string;
  startContractDate: string;
  endContractDate: string;
}

export const useMyWorkFormStore = defineStore("myWorkFormStore", () => {
  const form = ref<WorkForm>({
    jobTitle: "",
    employer: "",
    description: "",
    hoursPerDay: 8,
    startTime: 8,
    endTime: 17,
    breakStartTime: 12,
    breakEndTime: 13,
    monthlySalary: 0,
    fullTime: true,
    dailyRateType: "",
    startContractDate: "",
    endContractDate: "",
  });

  const resetForm = () => {
    form.value = {
      jobTitle: "",
      employer: "",
      description: "",
      hoursPerDay: 8,
      startTime: 8,
      endTime: 17,
      breakStartTime: 12,
      breakEndTime: 13,
      monthlySalary: 0,
      fullTime: true,
      dailyRateType: "",
      startContractDate: "",
      endContractDate: "",
    };
  };

  return {
    resetForm,
    form,
  };
});
