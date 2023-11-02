import Link from "next/link";

export default function Begin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">SALT Initialize</h1>
      <Link href="/choose-course" className="border-2 p-2">
        Begin
      </Link>
      <div>Made by SALT</div>
    </main>
  );
}
