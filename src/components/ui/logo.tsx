import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-32 h-16 relative">
      <Image alt="Lagos onchain summit logo" src={"/los.svg"} fill />
    </div>
  );
}
