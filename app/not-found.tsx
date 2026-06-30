import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-accent text-sm tracking-widest uppercase mb-4">404</p>
      <h1 className="text-4xl md:text-6xl font-semibold mb-6">Page not found</h1>
      <p className="text-secondary mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="bg-primary text-white px-6 py-3 rounded-xl hover:opacity-85 transition">
        Back home
      </Link>
    </div>
  );
}
