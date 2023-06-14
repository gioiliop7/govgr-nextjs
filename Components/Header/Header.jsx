import Head from "next/head";
import Image from "next/image";
import govGR from "../../assets/govgr.svg";

export default function Header({serviceName}) {
  return (
    <>
      <Head></Head>
      <header className="govgr-header w-full min-h-[75px]" role="banner">
        <div className="govgr-admin-header__container h-full">
          <div className="govgr-header__content">
            <a className="govgr-header-link flex items-center" href="https://www.gov.gr/">
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
