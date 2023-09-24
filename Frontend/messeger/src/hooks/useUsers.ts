import { create } from "zustand";

interface ConversationListStore {
  users: any[];
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
}

const useUsers = create<ConversationListStore>((set) => ({
  users: [],
  add: (id) => set((state) => ({ users: [...state.users, id] })),
  remove: (id) =>
    set((state) => ({
      users: state.users.filter((usersId) => usersId !== id),
    })),
  set: (ids) => set({ users: ids }),
}));

export default useUsers;
