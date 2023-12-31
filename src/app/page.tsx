import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className="text-5xl animate__animated animate__zoomIn">
        <Link href="/begin">SALT Initialize</Link>
      </h1>
    </main>
  );
}
