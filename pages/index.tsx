import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="govgr-layout-wrapper govgr-layout-wrapper__full-height">
      <Header />
      <div className="govgr-width-container"></div>
      <div className="govgr-width-container">
        <div className="govgr-main-wrapper">
          <main className="govgr-grid-column-two-thirds">
            <h1 className="govgr-heading-xl">Welcome</h1>
            <p className="govgr-body">Welcome to next.js gov.gr theme</p>
            <p className="govgr-body">
              Here you can find all the components for gov.gr theme in React and
              Next.js with typescript
            </p>
            <Link href={"/components"} className="govgr-link">
              Components
            </Link>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
