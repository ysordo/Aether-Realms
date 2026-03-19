import { create } from 'zustand'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  message: string
  duration?: number
}

interface ToastStore {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      id,
      duration: 5000,
      ...toast,
    }

    set((state) => ({ toasts: [...state.toasts, newToast] }))

    // Auto-remove after duration
    if (newToast.duration) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        }))
      }, newToast.duration)
    }
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}))

export function useToast() {
  const addToast = useToastStore((state) => state.addToast)
  const removeToast = useToastStore((state) => state.removeToast)

  const toast = {
    success: (message: string, duration?: number) =>
      addToast({ type: 'success', message, duration }),
    error: (message: string, duration?: number) =>
      addToast({ type: 'error', message, duration }),
    warning: (message: string, duration?: number) =>
      addToast({ type: 'warning', message, duration }),
    info: (message: string, duration?: number) =>
      addToast({ type: 'info', message, duration }),
    dismiss: (id: string) => removeToast(id),
  }

  return toast
}
