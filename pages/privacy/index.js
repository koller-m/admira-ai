import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo1.png";

const Privacy = () => {
  return (
    <div>
      <Head>
        <title>Admira | Privacy Policy</title>
      </Head>
      <div className="w-full h-screen flex flex-col justify-start items-center pt-8">
        <Link href="/">
          <Image src={logo} width={200} priority />
        </Link>
        <div className="w-[300px] sm:w-[600px] flex flex-col p-8">
          <h1 className="text-xl underline">Privacy Policy</h1>
          <p className="py-4 tracking-wider">
            At Admira, we respect and value the privacy of our users. This
            Privacy Policy explains what information we collect, why we collect
            it, and how we use it.
          </p>
          <p className="py-4 tracking-wider">
            We collect different types of information from our users. Personal
            information, such as your name and email address, is collected when
            you voluntarily provide it to us. We also collect technical
            information, such as your IP address, browser type, and device
            information, when you use our app. Additionally, we collect usage
            information, such as how you interact with our app, including pages
            visited and features used.
          </p>
          <p className="py-4 tracking-wider">
            We collect this information for several reasons. Firstly, to provide
            you with a personalized experience while using our app. Secondly, to
            improve the functionality and performance of our app. Thirdly, to
            communicate with you about updates and new features. Lastly, to
            comply with legal and regulatory requirements.
          </p>
          <p className="py-4 tracking-wider">
            We use the information we collect for several purposes. Firstly, to
            provide you with the services and features offered through our app.
            Secondly, to improve the design and content of our app. Thirdly, to
            analyze usage trends and improve our app's performance. Lastly, to
            send you promotional materials and other communications about our
            app.
          </p>
          <p className="py-4 tracking-wider">
            We do not share your information with third parties, except as
            necessary to provide you with our services, comply with legal and
            regulatory requirements, or as otherwise described in this Privacy
            Policy.
          </p>
          <p className="py-4 tracking-wider">
            We take reasonable steps to protect your information from
            unauthorized access, use, or disclosure. However, no security
            measure can be 100% effective, so we cannot guarantee the complete
            security of your information.
          </p>
          <p className="py-4 tracking-wider">
            We reserve the right to make changes to this Privacy Policy at any
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
