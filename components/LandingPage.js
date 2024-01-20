import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo1.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const LandingPage = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Top-Tier Dating and Relationship Advice at a Fraction of the Cost With AI Assistance",
      ],
      typeSpeed: 30,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full h-screen p-2 pt-28 sm:pt-60 flex flex-col justify-start items-center">
      <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] flex flex-col items-center relative">
        <Image src={logo} alt="Admira logo" width={300} priority />
        <h1
          ref={el}
          className="absolute top-32 z-10 font-semibold tracking-wider sm:text-lg text-center text-[#ADD8E6] typing-animation"
        ></h1>
        <div className="bg-[#FEFEFE] text-[#684eff] hover:bg-[#FDE3A7] hover:text-[#000000] rounded-full w-[185px] h-[40px] font-semibold tracking-wide mt-20 sm:mt-32 flex flex-col justify-center items-center">
          <Link href="/chat">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
