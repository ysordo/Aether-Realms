const baseUrl = import.meta.env.BASE_URL || '/'

export function getAssetUrl(path: string): string {
  if (path.startsWith(baseUrl)) {
    return path
  }
  
  if (path.startsWith('/')) {
    return `${baseUrl}${path.slice(1)}`
  }
  
  return `${baseUrl}${path}`
}
