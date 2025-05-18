import { toast } from 'sonner'

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default'

export const useToast = () => {
  const showToast = (message: string, type: ToastType = 'default') => {
    switch (type) {
      case 'success':
        toast.success(message)
        break
      case 'error':
        toast.error(message)
        break
      case 'info':
        toast.info(message)
        break
      case 'warning':
        toast.warning(message)
        break
      default:
        toast(message)
    }
  }

  return { toast: showToast }
}
export default useToast
export type { ToastType }