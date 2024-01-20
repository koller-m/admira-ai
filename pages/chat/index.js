import Head from "next/head";
import ChatApp from "../../components/ChatApp";
import Footer from "../../components/Footer";

const Chat = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Admira | Chat</title>
      </Head>
      <ChatApp />
      <Footer />
    </div>
  );
};

export default Chat;
