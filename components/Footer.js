import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex-shrink-0 w-full bg-[#684eff]">
      <div className="flex justify-center sm:justify-end items-center sm:pr-20 w-full h-full p-2">
        <ul className="flex text-sm text-[#ADD8E6] tracking-wider">
          <Link href="/privacy">
            <li>Privacy Policy</li>
          </Link>
          <Link href="/terms">
            <li className="ml-8">Terms of Service</li>
          </Link>
        </ul>
      </div>
      <p className="text-center text-sm pb-4 tracking-wider">
        Admira &copy; 2024
      </p>
    </div>
  );
};

export default Footer;
