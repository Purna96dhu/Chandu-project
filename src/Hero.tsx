import heroImg from "./assets/online-shopping.jpg";
import { type ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Hero({ children }: Props) {
  return (
    <div className="relative w-full min-h-screen">

      {/* BACKGROUND (behind everything) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-6">
        {children}
      </div>

    </div>
  );
}

export default Hero;