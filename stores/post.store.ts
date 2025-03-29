import { create } from "zustand";

interface CounterState {
    posts: number;
    increment: () => void;
    decrement: () => void;
}

// Tạo store
export const useCounterStore = create<CounterState>((set) => ({
    posts: 0,
    increment: () => set((state) => ({ posts: state.posts + 1 })),
    decrement: () => set((state) => ({ posts: state.posts - 1 })),
}));