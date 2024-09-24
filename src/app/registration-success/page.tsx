import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircleIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen bg-lagos-black flex items-center justify-center p-4">
      <div className="bg-lagos-black rounded-lg shadow-2xl p-8 max-w-md w-full border border-gray-800">
        <div className="text-center mb-8">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Registration Successful!
          </h1>
          <p className="text-gray-600">
            We&apos;re excited to have you join us at the Lagos OnChain Summit.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-lagos-cyan mr-3" />
            <span className="text-gray-700">October 20-21, 2024</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-lagos-cyan mr-3" />
            <span className="text-gray-700">Eko Convention Center, Lagos</span>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mb-8 bg-lagos-black/20 border-gray-700 border">
          <h2 className="font-semibold text-gray-800 mb-2">Next Steps:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Check your email for a confirmation and additional details</li>
            <li>Follow us on social media for updates</li>
            <li>Prepare for an exciting blockchain experience!</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3">
          <Link href="/" className="w-full">
            <Button className="w-full bg-lagos-cyan hover:bg-lagos-cyan/90 text-white">
              Return to Home
            </Button>
          </Link>
          <Link href="/agenda" className="w-full">
            <Button
              variant="outline"
              className="w-full border-lagos-cyan text-lagos-cyan hover:bg-lagos-cyan hover:text-white"
            >
              View Event Agenda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
