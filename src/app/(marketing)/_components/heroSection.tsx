import Gutter from "@/components/common/gutter";
import Countdown from "./countDown";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="w-full border min-h-[90vh] grid ">
      <Gutter
        className="w-full h-full flex flex-col gap-10 items-center justify-center"
        style={{
          backgroundImage: `assets/images/heroBg.png`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          border: "1px solid red",
        }}
      >
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-5xl font-bold flex gap-3">
            <span>LAGOS</span>
            <span>ONCHAIN</span>
            <span>SUMMIT</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <Countdown deadline={new Date("2024-09-20")} />
        </div>
        <div className="flex gap-3">
          <Button>Register now</Button>
          <Button>Be a Sponsor</Button>
          <Button className="" variant={"outline"}>
            Claim points
          </Button>
        </div>
      </Gutter>
    </div>
  );
}
