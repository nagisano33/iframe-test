import { GetServerSideProps } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { useEffect, useRef, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  iframeUrl?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      // ここで環境変数の値を設定したキーを返す
      iframeUrl: process.env.EMBED_URL,
    },
  };
};

// async function getHello() {
//   const response = await fetch("/api/hello");
//   const data = await response.json();
//   return data;
// }

export default function Home({ iframeUrl }: Props) {
  // const ref = useRef<HTMLIFrameElement>(null);

  // useEffect(() => {
  //   getHello().then((data) => {
  //     ref.current?.setAttribute("src", data.name);
  //   });
  // }, []);
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        This is iframe test
        <iframe
          // ref={ref}
          src={`${iframeUrl}`}
          title="YouTube video player"
          width="560"
          height="315"
        />
      </main>
    </div>
  );
}
