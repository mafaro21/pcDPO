import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

// Define initial state
const initialUserState = {
  firstname: "",
  lastname: "",
  email: "",
  isAuth: false,
};

export const useAuthStore = create(
  persist(
    (set) => ({
      user: initialUserState, // Flatten the structure for easier access
      addAuthUser: (user) => set(() => ({ user: { ...user, isAuth: true } })), // Add auth user
      logoutAuthUser: () => set(() => ({ user: initialUserState })), // Clear user data
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage), // Persist to localStorage
    }
  )
);