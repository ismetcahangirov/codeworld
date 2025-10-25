import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-5xl font-bold text-dark mb-4">404</h1>
            <p className="text-lg text-dark mb-6">
                Üzr istəyirik, axtardığınız səhifə tapılmadı 😢
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-dark text-white rounded-xl hover:bg-primary transition"
            >
                Ana səhifəyə qayıt
            </Link>
        </div>
    );
}
