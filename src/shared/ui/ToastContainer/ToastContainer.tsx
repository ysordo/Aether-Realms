import { motion, AnimatePresence } from 'framer-motion'
import { useToastStore, type Toast, type ToastType } from '@shared/hooks/useToast'
import * as Lucide from 'lucide-react'

const toastStyles: Record<ToastType, string> = {
  success: 'bg-success/20 border-success text-success border-l-4',
  error: 'bg-error/20 border-error text-error border-l-4',
  warning: 'bg-warning/20 border-warning text-warning border-l-4',
  info: 'bg-info/20 border-info text-info border-l-4',
}

const toastIcons: Record<ToastType, typeof Lucide.CheckCircle> = {
  success: Lucide.CheckCircle,
  error: Lucide.XCircle,
  warning: Lucide.AlertTriangle,
  info: Lucide.Info,
}

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore()

  return (
    <div className="fixed top-20 right-4 z-999 flex flex-col gap-2 max-w-md">
      <AnimatePresence>
        {toasts.map((toast: Toast) => {
          const I = toastIcons[toast.type];
          return (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`${toastStyles[toast.type]} backdrop-blur-sm rounded-lg p-4! shadow-lg flex items-start gap-3 border`}
          >
            <I className="text-xl shrink-0" />
            <p className="text-sm font-medium flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-current/60 hover:text-current transition-colors"
              aria-label="Dismiss"
            >
              <Lucide.X name="close" className="text-lg" />
            </button>
          </motion.div>
        )})}
      </AnimatePresence>
    </div>
  )
}
