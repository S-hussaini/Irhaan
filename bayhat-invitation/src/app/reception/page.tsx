import Link from "next/link";

export default function Reception() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-900 via-green-900 to-black text-white flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-xl border border-yellow-500/40 rounded-3xl p-10 max-w-2xl text-center shadow-2xl">

        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Reception Celebration 🎉
        </h1>

        <p className="text-lg mb-6">
          Please join us for a joyful gathering
          as we celebrate this blessed occasion together.
        </p>

        <p className="mb-6">
          📅 Date: [Add Date] <br />
          🕰 Time: [Add Time] <br />
          📍 Location: [Add Address]
        </p>

        <Link href="/" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Back Home
        </Link>
      </div>
    </main>
  );
}
