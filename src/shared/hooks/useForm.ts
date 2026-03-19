import { useState, useCallback, type ChangeEvent, type FormEvent } from 'react'

export interface UseFormOptions<T extends Record<string, unknown>> {
  initialValues: T
  validate?: (values: T) => Partial<Record<keyof T, string>>
  onSubmit: (values: T) => void | Promise<void>
}

export interface UseFormReturn<T extends Record<string, unknown>> {
  values: T
  errors: Partial<Record<keyof T, string>>
  touched: Partial<Record<keyof T, boolean>>
  isSubmitting: boolean
  isValid: boolean
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: FormEvent) => void
  setFieldValue: <K extends keyof T>(field: K, value: T[K]) => void
  setFieldError: <K extends keyof T>(field: K, error: string) => void
  resetForm: () => void
}

export function useForm<T extends Record<string, unknown>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = useCallback(
    (field: keyof T, value: T[keyof T]) => {
      if (!validate) return

      const fieldErrors = validate({ ...values, [field]: value })
      setErrors((prev) => ({
        ...prev,
        [field]: fieldErrors?.[field],
      }))
    },
    [validate, values]
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setValues((prev) => ({ ...prev, [name]: value }))
      validateField(name as keyof T, value as T[keyof T])
    },
    [validateField]
  )

  const handleBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setTouched((prev) => ({ ...prev, [name]: true }))
      validateField(name as keyof T, value as T[keyof T])
    },
    [validateField]
  )

  const setFieldValue = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }, [])

  const setFieldError = useCallback(<K extends keyof T>(field: K, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }))
  }, [])

  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      e.stopPropagation()

      // Mark all fields as touched
      const allTouched = Object.keys(values).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Partial<Record<keyof T, boolean>>
      )
      setTouched(allTouched)

      // Validate all fields
      if (validate) {
        const validationErrors = validate(values)
        setErrors(validationErrors || {})

        if (validationErrors && Object.keys(validationErrors).length > 0) {
          return
        }
      }

      setIsSubmitting(true)

      try {
        await onSubmit(values)
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, validate, onSubmit]
  )

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    resetForm,
  }
}
