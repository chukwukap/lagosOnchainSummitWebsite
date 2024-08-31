import BaseHeader from "./baseHeader";
import MainFooter from "./mainFooter";
import MainHeader from "./mainHeader";

export default function WrapperClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full border-red-500 border-2d ">
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}
