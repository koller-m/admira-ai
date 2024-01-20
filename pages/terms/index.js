import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo1.png";

const Terms = () => {
  return (
    <div>
      <Head>
        <title>Admira | Terms of Service</title>
      </Head>
      <div className="w-full h-screen flex flex-col justify-start items-center pt-8">
        <Link href="/">
          <Image src={logo} width={200} priority />
        </Link>
        <div className="w-[300px] sm:w-[600px] flex flex-col p-8">
          <h1 className="text-xl underline">Terms of Service</h1>
          <p className="py-4 tracking-wider">
            These Terms of Service the "Terms" govern your use of Admira the
            "Service". By using the Service, you agree to be bound by these
            Terms. If you do not agree to these Terms, you may not use the
            Service.
          </p>
          <p className="py-4 tracking-wider">Use of the Service</p>
          <p className="py-4 tracking-wider">
            You may use the Service only in compliance with these Terms and all
            applicable laws. The Service is intended for personal use only and
            not for commercial use. You may not use the Service for any illegal
            or unauthorized purpose.
          </p>
          <p className="py-4 tracking-wider">Intellectual Property</p>
          <p className="py-4 tracking-wider">
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of Admira. The Service is
            protected by copyright, trademark, and other laws of the United
            States. Our trademarks and trade dress may not be used in connection
            with any product or service without the prior written consent of
            Admira.
          </p>
          <p className="py-4 tracking-wider">User Content</p>
          <p className="py-4 tracking-wider">
            You are responsible for your own content and the consequences of
            posting or publishing it. By submitting content to the Service, you
            grant us the right and license to use, reproduce, modify, adapt,
            publish, translate, create derivative works from, distribute,
            perform, and display such content throughout the world in any media.
          </p>
          <p className="py-4 tracking-wider">Termination</p>
          <p className="py-4 tracking-wider">
            We may terminate or suspend your access to the Service at any time,
            with or without cause, with or without notice. Upon termination,
            your right to use the Service will immediately cease.
          </p>
          <p className="py-4 tracking-wider">Disclaimer of Warranties</p>
          <p className="py-4 tracking-wider">
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We
            make no representations or warranties of any kind, express or
            implied, as to the operation of the Service or the information,
            content, materials, or products included on the Service.
          </p>
          <p className="py-4 tracking-wider">Limitation of Liability</p>
          <p className="py-4 tracking-wider">
            In no event shall Admira be liable for any damages whatsoever,
            including but not limited to direct, indirect, special, incidental,
            or consequential damages, arising out of or in connection with the
            use or inability to use the Service.
          </p>
          <p className="py-4 tracking-wider">Governing Law</p>
          <p className="py-4 tracking-wider">
            These Terms shall be governed and construed in accordance with the
            laws of the United States, without regard to its conflict of law
            provisions.
          </p>
          <p className="py-4 tracking-wider">Changes to These Terms</p>
          <p className="py-4 tracking-wider">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. What constitutes a material change will be
            determined at our sole discretion. By using this Service, you agree
            to be bound by the then current version of these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
