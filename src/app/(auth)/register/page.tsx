import Image from "next/image";
import { ContestForm } from "@/components/forms/contestForm";

export default function Register() {
  return (
    <div className="flex min-h-screen">
      {/* Image column - hidden on small screens, visible on md and up */}
      <div className="hidden md:flex md:w-1/2 bg-lagos-cyan relative">
        <Image
          src="/assets/images/authImage.png"
          alt="OnChain Summit"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-lagos-black">
        <div className="w-full max-w-md">
          <ContestForm />
        </div>
      </div>
    </div>
  );
}
