import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
  const description =
    "Discover the power of true AI freedom with our uncensored AI task technology.";
  return (
    <div className="flex min-h-screen min-h-screen flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]">
      <Head>
        <title>$AGENT</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="@$AGENT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="$AGENT 🤖" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="640" />
        <meta
          property="og:title"
          content="$AGENT: Autonomous AI in your browser 🤖"
        />
        <meta
          property="og:description"
          content="Discover the power of true AI freedom with our uncensored AI task technology.
."
        />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <DottedGridBackground>{props.children}</DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
