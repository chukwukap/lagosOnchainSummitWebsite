import Image from "next/image";
import { ContestForm } from "@/components/forms/contestForm";
import { EventTicketForm } from "@/components/forms/eventTicketForm";

export default function Register() {
  return (
    <div className="flex min-h-screen">
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
        <div className="w-full max-w-md space-y-8">
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Register </h2>
            <p className="text-lg mb-6">
              Enter your details to join the Lagos Onhain Summit.{" "}
            </p>
          </div>

          <EventTicketForm />
          {/* <div className="text-center mt-8">
            <p className="text-sm text-lagos-gray-400">
              Already registered?{" "}
              <a
                href="#"
                className="font-medium text-lagos-cyan hover:text-lagos-cyan-light"
              >
                Sign in
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
