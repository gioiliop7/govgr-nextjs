import { useEffect, useState } from "react";
import Image from "next/image";
import govGR from "../../assets/govgr.svg";
import Head from "next/head";
import packageJson from "../../package.json";
import Link from "next/link";

const appName = packageJson.name;

export default function Header() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    window.localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gov.gr Next.js</title>
      </Head>
      <header className="govgr-header w-full min-h-[75px]" role="banner">
        <div className="govgr-admin-header__container h-full">
          <div className="govgr-header__content flex items-center">
            <a
              className="govgr-header-link items-center max-w-[30%]"
              href="https://www.gov.gr/"
            >
              <Image src={govGR} className="my-auto w-full" alt="gov.gr logo" />
            </a>

            <div className="flex items-center">
              <Link
                href={"/"}
                className="font-bold text-white text-2xl capitalize"
              >
                {appName}
              </Link>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 border rounded text-white bg-gov-main-text hover:bg-gov-secondary transition"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>
    </>
  );
}
