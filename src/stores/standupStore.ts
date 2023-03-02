import { create } from "zustand";

interface Item {
  id: string;
  category: string;
  text: string;
}

interface StandupState {
  items: Item[];
  addItem: (item: Item) => void;
}

const useStandupStore = create<StandupState>((set) => ({
  items: [],
  addItem: (item: Item) => set((state) => ({ items: [...state.items, item] })),
}));

export default useStandupStore;
