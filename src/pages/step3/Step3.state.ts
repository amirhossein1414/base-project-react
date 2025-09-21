
import { create } from "zustand";
import { z } from 'zod';

export const step3Schema = z.object({
    fromPlace: z.string().nonempty('تکمیل این بخش الزامی است'),
    mosavabe: z.string().nonempty('تکمیل این بخش الزامی است'),
    mainEcoPart: z.string().nonempty('تکمیل این بخش الزامی است'),
});

export type Step3Model = z.infer<typeof step3Schema>;

export interface Step3State {
    data: Step3Model;
    setField: <K extends keyof Step3Model>(key: K, value: Step3Model[K]) => void;
    reset: () => void;
};

const initialState: Step3Model = {
    fromPlace: '',
    mosavabe: '',
    mainEcoPart: ''
};

export const step3Store = create<Step3State>((set) => ({
    data: initialState,
    setField: (key, value) =>
        set((state) => ({
            data: {
                ...state.data,
                [key]: value,
            },
        })),
    reset: () => set({ data: initialState }),
}));