import Image from "next/image";
import Countdown from "./_components/countDown";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end text-white overflow-hidden bg-circles">
      {" "}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 text-center lg:py-20">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <Countdown deadline={new Date("2024-09-01T00:00:00Z")} />
      </div>
    </main>
  );
}
