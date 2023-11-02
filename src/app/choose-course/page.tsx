import Link from "next/link";

export default function ChooseCourse() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Choose Course</h1>
      <div className="flex flex-col">
        <Link href="/courses/java">Java</Link>
        <Link href="/courses/js-ts">JS/TS</Link>
        <Link href="/courses/csharp-dotnet">C# .NET</Link>
      </div>
      <div></div>
    </main>
  );
}
