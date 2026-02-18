import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-900 via-emerald-900 to-black text-white flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-xl border border-yellow-500/40 rounded-3xl p-10 max-w-2xl text-center shadow-2xl animate-fadeIn">

        <p className="text-2xl text-yellow-400 font-serif mb-4">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          Baby Bayhat 🤍
        </h1>

        <p className="text-lg mb-8">
          A joyful celebration of blessings, Noor, and love.
          Join us as we celebrate our precious little star.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/bayhat" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            About Bayhat 👶
          </Link>

          <Link href="/reception" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Reception Details 🎉
          </Link>
        </div>
      </div>
    </main>
  );
}
