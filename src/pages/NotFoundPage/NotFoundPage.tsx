import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="not-found-page text-center py-20!">
      <h1 className="text-6xl font-bold text-gold">404</h1>
      <p className="mt-4! text-xl">Page not found</p>
      <Link to="/" className="btn-primary inline-block mt-6!">
        Go Home
      </Link>
    </div>
  )
}
