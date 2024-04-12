import Head from "next/head";
import Inner from "@/components/Layout/Inner";
import WorkDetails from "./_components";

export default function Page({ params }) {
  return (
    <>
      <Head>
        <title>VICTOR ESSIEN | PROJECT DETAILS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/profile_6.jpg"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      </Head>
      <Inner>
        <WorkDetails />
      </Inner>
    </>
  );
}
