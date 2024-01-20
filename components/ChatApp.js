import Image from "next/image";
import logo from "../public/assets/logo1.png";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

const ChatApp = () => {
  const el = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userApi, setUserApi] = useState("");

  useEffect(() => {
    if (el.current && !loading) {
      const typed = new Typed(el.current, {
        strings: [apiOutput],
        typeSpeed: 15,
        showCursor: false,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [apiOutput]);

  useEffect(() => {
    return () => {
      setUserApi("");
    };
  }, []);

  const callApi = async () => {
    setLoading(true);
    const response = await fetch("/api/wrapper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput, userApi }),
    });
    const data = await response.json();
    const { output } = data;
    setApiOutput(`${output}`);
    setLoading(false);
    setUserInput("");
  };

  const onUserChangedText = (e) => {
    setUserInput(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      callApi();
    }
  };
  const onUserApiChanged = (e) => {
    setUserApi(e.target.value);
  };

  return (
    <div className="flex flex-col justify-start items-center pt-20 sm:pt-28">
      <p className="font-semibold tracking-wider pt-12">Free Early Access</p>
      <p className="w-[300px] sm:w-[600px] text-sm py-5">
        Please ensure you have a valid OpenAI API key to access our service. We
        do not store your API key. Kindly delete your key and close your browser
        once you have completed using our service. Thank you.
      </p>
      <form>
        <input
          type="text"
          placeholder="Your OpenAI API Key"
          value={userApi}
          onChange={onUserApiChanged}
          disabled={userApi !== ""}
          className="w-[200px] border-none rounded py-1 text-black text-center"
        />
      </form>
      <Image
        src={logo}
        alt="Admira logo"
        width={300}
        priority
        className="pt-16"
      />
      <form>
        <input
          type="text"
          placeholder="Ask a Question..."
          value={userInput}
          onChange={onUserChangedText}
          onKeyDown={onKeyDown}
          className="w-[300px] sm:w-[600px] border-none rounded py-3 pl-1 text-black"
        />
      </form>
      {loading ? (
        <div
          className="w-[300px] sm:w-[600px] pt-14"
          style={{ minHeight: "600px" }}
        >
          Loading...
        </div>
      ) : apiOutput === "" ? (
        <div
          className="w-[300px] sm:w-[600px] pt-14 tracking-wider"
          style={{ minHeight: "600px" }}
        >
          <p className="py-2">
            <span className="font-semibold">Example Questions</span>:
          </p>
          <p className="py-2 text-[#FDE3A7]">
            Should I stay friends with my ex?
          </p>
          <p className="py-2 text-[#FDE3A7]">
            I'm meeting my partner's parents for the first time, and I'm super
            nervous-any advice?
          </p>
          <p className="py-2 text-[#FDE3A7]">
            How to deal with so many options on dating apps?
          </p>
          <p className="py-2 text-[#FDE3A7]">
            What are easily overlooked red flags in a relationship?
          </p>
          <p className="py-2 text-[#FDE3A7]">
            I'm scared to talk to my partner about money-what's the best way to
            do it?
          </p>
        </div>
      ) : (
        <div
          className="w-[300px] sm:w-[600px] pt-14 tracking-widest"
          style={{ minHeight: "600px" }}
        >
          <p ref={el} className="py-2"></p>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
