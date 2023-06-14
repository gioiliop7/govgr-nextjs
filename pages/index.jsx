import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Accordion from "@/Components/Accordion/Accordion";
import BackLink from "@/Components/BackLink/BackLink";
import BlockQuote from "@/Components/BlockQuote/BlockQuote";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Header serviceName={"New service"} />
      <div className="w-full flex flex-col items-center max-w-[80%]">
        <h2 className="govgr-heading-l mt-8">Back Link</h2>
        <BackLink />
        <h2 className="govgr-heading-l">Accordion</h2>
        <Accordion />
        <h2 className="govgr-heading-l mb-0 mt-6">Blockquote</h2>
        <BlockQuote
          message={
            "Η διαδικασία έκδοσης του διαβατηρίου σας μπορεί να διαρκέσει εώς 10 μέρες,εφόσον η αίτηση σας δεν έχει λάθη."
          }
        />
        <h2 className="govgr-heading-l mb-0 mt-6">Breadcrumbs</h2>
        <Breadcrumbs />
      </div>
      <Footer />
    </main>
  );
}
