import { create } from "zustand";

interface UserState {
  user: string;
  setUser: (user: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: "",
  setUser: (user: string) => set({ user }),
}));

export default useUserStore;
