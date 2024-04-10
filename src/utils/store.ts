import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IStorage {
  userData: {
    name: string;
    key: string;
    secret: string;
    password: string;
    confirm_password: string;
    id: string;
  };

  setStorageState: (data: Partial<Omit<IStorage, "setStorageState">>) => void;
}

// const Storage = ;

const useStorage = create<IStorage>()(
  persist(
    (set, get): IStorage => ({
      userData: {
        name: "",
        confirm_password: "",
        key: "",
        password: "",
        secret: "",
        id: "",
      },
      setStorageState: (data) => set({ ...get(), ...data }),
    }),
    {
      name: "StateStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStorage;
