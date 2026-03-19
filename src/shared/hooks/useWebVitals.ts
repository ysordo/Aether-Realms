import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals'

function sendToAnalytics(metric: Metric) {
  const body = {
    name: metric.name,
    value: metric.value,
    delta: metric.delta,
    rating: metric.rating,
    id: metric.id,
    url: window.location.href,
  }
  navigator.sendBeacon('/api/analytics/vitals', JSON.stringify(body))
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, { value: metric.value, rating: metric.rating })
  }
}

export function initWebVitals() {
  onCLS(sendToAnalytics)
  onINP(sendToAnalytics)
  onFCP(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
}

export interface WebVitalsScores {
  cls: number | null
  inp: number | null
  fcp: number | null
  lcp: number | null
  ttfb: number | null
}

const scores: WebVitalsScores = {
  cls: null,
  inp: null,
  fcp: null,
  lcp: null,
  ttfb: null,
}

export function subscribeWebVitals(callback: (scores: WebVitalsScores) => void) {
  onCLS((metric) => { scores.cls = metric.value; callback(scores) })
  onINP((metric) => { scores.inp = metric.value; callback(scores) })
  onFCP((metric) => { scores.fcp = metric.value; callback(scores) })
  onLCP((metric) => { scores.lcp = metric.value; callback(scores) })
  onTTFB((metric) => { scores.ttfb = metric.value; callback(scores) })
}

export default initWebVitals
