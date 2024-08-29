import BaseHeader from "./baseHeader";
import MainHeader from "./mainHeader";

export default function WrapperClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full border-red-500 border-2 ">
      <MainHeader />
      {children}
    </div>
  );
}
