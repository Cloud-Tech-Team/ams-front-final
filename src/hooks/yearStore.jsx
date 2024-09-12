import { create } from "zustand";

const useStore = create((set) => ({
  year: 2024,
  setYear: (newYear) => set((state) => ({ year: newYear })),
}));

export default useStore;
