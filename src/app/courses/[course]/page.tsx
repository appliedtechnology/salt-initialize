import Link from "next/link";

export default function course() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Lessons</h1>
      <div className="flex flex-col">
        <ul>
          <li>Overview</li>
          <li>Fundamentals</li>
          <li>Advanced</li>
        </ul>
      </div>
      <Link href="/lessons/js-ts/overview" className="border-2 p-2">
        Start First Lesson
      </Link>
    </main>
  );
}
