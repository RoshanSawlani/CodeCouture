import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodeCouture - Style the code</title> 
        <meta name="description" content="CodeCouture - Style the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <div className="mx-4">
        This is me
      </div>
    </div>
  );
}
