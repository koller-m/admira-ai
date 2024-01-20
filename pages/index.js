import Head from "next/head";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          Admira | Dating and Relationship Advice With AI Assistance
        </title>
        <meta
          name="description"
          content="Top-Tier Dating and Relationship Advice at a Fraction of the Cost With AI Assistance"
        />
      </Head>
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
