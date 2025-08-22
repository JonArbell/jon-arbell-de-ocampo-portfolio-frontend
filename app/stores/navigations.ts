import { defineStore } from "pinia";

export const useMyNavigationsStore = defineStore("myNavigationsStore", () => {
  const navs = [
    {
      name: "About Me",
      link: "about-me",
    },
    {
      name: "Journey",
      link: "my-journey",
    },
    {
      name: "Personal Projects",
      link: "personal-projects",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Hobbies",
      link: "hobbies",
    },
    {
      name: "Contact Me",
      link: "contact-me",
    },
  ];

  return { navs };
});
