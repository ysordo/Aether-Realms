import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useToast, useToastStore } from './useToast'

describe('useToast', () => {
  beforeEach(() => {
    useToastStore.setState({ toasts: [] })
    vi.clearAllMocks()
  })

  it('returns toast methods', () => {
    const { result } = renderHook(() => useToast())
    expect(result.current.success).toBeDefined()
    expect(result.current.error).toBeDefined()
    expect(result.current.warning).toBeDefined()
    expect(result.current.info).toBeDefined()
    expect(result.current.dismiss).toBeDefined()
  })

  it('adds a success toast', () => {
    const { result } = renderHook(() => useToast())
    act(() => { result.current.success('Success message') })
    const toasts = useToastStore.getState().toasts
    expect(toasts).toHaveLength(1)
    expect(toasts[0].type).toBe('success')
  })

  it('adds an error toast', () => {
    const { result } = renderHook(() => useToast())
    act(() => { result.current.error('Error message') })
    const toasts = useToastStore.getState().toasts
    expect(toasts).toHaveLength(1)
    expect(toasts[0].type).toBe('error')
  })

  it('dismisses a toast', () => {
    const { result } = renderHook(() => useToast())
    act(() => { result.current.success('Test message') })
    const toastId = useToastStore.getState().toasts[0].id
    act(() => { result.current.dismiss(toastId) })
    const toasts = useToastStore.getState().toasts
    expect(toasts).toHaveLength(0)
  })

  it('adds multiple toasts', () => {
    const { result } = renderHook(() => useToast())
    act(() => {
      result.current.success('Success 1')
      result.current.error('Error 1')
      result.current.warning('Warning 1')
    })
    const toasts = useToastStore.getState().toasts
    expect(toasts).toHaveLength(3)
  })
})

describe('useToastStore', () => {
  beforeEach(() => {
    useToastStore.setState({ toasts: [] })
  })

  it('initializes with empty toasts array', () => {
    const state = useToastStore.getState()
    expect(state.toasts).toEqual([])
  })

  it('adds toast to store', () => {
    act(() => {
      useToastStore.getState().addToast({ type: 'success', message: 'Test message' })
    })
    const state = useToastStore.getState()
    expect(state.toasts).toHaveLength(1)
  })

  it('removes toast from store', () => {
    act(() => {
      useToastStore.getState().addToast({ type: 'success', message: 'Test' })
    })
    const toastId = useToastStore.getState().toasts[0].id
    act(() => { useToastStore.getState().removeToast(toastId) })
    const state = useToastStore.getState()
    expect(state.toasts).toHaveLength(0)
  })
})
