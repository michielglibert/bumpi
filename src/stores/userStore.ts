import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: string;
  setUser: (user: string) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: "",
      setUser: (user: string) => set({ user }),
    }),
    {
      name: "user",
    }
  )
);

export default useUserStore;
