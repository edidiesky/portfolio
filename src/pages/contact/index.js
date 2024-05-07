import Head from "next/head";
import Inner from "@/components/Layout/Inner";
import Contact from "./_components";

export default function Home() {
  return (
    <div className="w-full bg-[#000000]">
      <Head>
        <title>Victor Essien | CONTACT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/profile_6.jpg"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      </Head>
      <Inner type={"contact"}>
        <Contact />
      </Inner>
    </div>
  );
}
