import { writable } from "svelte/store";

export const user = writable({ name: "", id: "" });

export const openLoginModal = writable(false);

export const openInfoModal = writable(false);
export const infoModalContent = writable({ title: "", content: "", color: "" });
