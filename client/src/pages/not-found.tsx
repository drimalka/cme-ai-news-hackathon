import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen section-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link href="/">
          <a className="btn-cta inline-block">Go Home</a>
        </Link>
      </div>
    </div>
  );
}
