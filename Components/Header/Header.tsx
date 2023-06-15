import Image from "next/image";
import govGR from "../../assets/govgr.svg";
import { GovProps } from "@/utils/types";
import Head from "next/head";

export default function Header({ serviceName }: GovProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gov.gr Next.js</title>
      </Head>
      <header className="govgr-header w-full min-h-[75px]" role="banner">
        <div className="govgr-admin-header__container h-full">
          <div className="govgr-header__content">
            <a
              className="govgr-header-link flex items-center"
              href="https://www.gov.gr/"
            >
              <Image
                src={govGR}
                className="max-w-[30%] my-auto"
                alt="gov.grlogo"
              />
              <p className="font-bold text-white text-2xl">{serviceName}</p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
