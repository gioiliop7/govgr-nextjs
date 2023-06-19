import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Accordion from "@/Components/Accordion/Accordion";
import BackLink from "@/Components/BackLink/BackLink";
import BlockQuote from "@/Components/BlockQuote/BlockQuote";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";
import Button from "@/Components/Button/Button";
import Card from "@/Components/Card/Card";
import Checkboxes from "@/Components/Checkboxes/Checkboxes";
import ConfirmationMessage from "@/Components/ConfirmationMessage/ConfirmationMessage";
import CookieBanner from "@/Components/CookieBanner/CookieBanner";
import DateInput from "@/Components/DateInput/DateInput";
import Details from "@/Components/Details/Details";
import ErrorMessage from "@/Components/ErrorMessage/ErrorMessage";
import FileUpload from "@/Components/FileUpload/FileUpload";
import MastHead from "@/Components/MastHead/MastHead";
import NavigationList from "@/Components/NavigationList/NavigationList";
import NotificationBanner from "@/Components/NotificationBanner/NotificationBanner";
import PhaseBanner from "@/Components/PhaseBanner/PhaseBanner";
import Radio from "@/Components/Radio/Radio";
import Select from "@/Components/Select/Select";
import SummaryList from "@/Components/SummaryList/SummaryList";
import Table from "@/Components/Table/Table";
import Tabs from "@/Components/Tabs/Tabs";
import TextArea from "@/Components/TextArea/TextArea";
import TextInput from "@/Components/TextInput/TextInput";
import WarningText from "@/Components/WarningText/WarningText";

export default function Home(): JSX.Element {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Header />
      <div className="w-full flex flex-col items-center max-w-[80%]">
        <h2 className="govgr-heading-l mt-8">Back Link</h2>
        <BackLink />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />
        <h2 className="govgr-heading-l">Accordion</h2>
        <Accordion />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />
        <h2 className="govgr-heading-l mb-0 mt-6">Blockquote</h2>
        <BlockQuote
          message={
            "Η διαδικασία έκδοσης του διαβατηρίου σας μπορεί να διαρκέσει εώς 10 μέρες,εφόσον η αίτηση σας δεν έχει λάθη."
          }
        />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />
        <h2 className="govgr-heading-l mb-0 mt-6">Breadcrumbs</h2>
        <Breadcrumbs />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l mt-8">Button</h2>
        <Button />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Card</h2>
        <Card />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Checkboxes</h2>
        <Checkboxes />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Confirmation Message</h2>
        <ConfirmationMessage />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Cookie Banner</h2>
        <CookieBanner />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Date Input</h2>
        <DateInput />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Details</h2>
        <Details />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Error Message</h2>
        <ErrorMessage />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">File Upload</h2>
        <FileUpload />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">MastHead</h2>
        <MastHead />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Navigation List</h2>
        <NavigationList />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Notification Banner</h2>
        <NotificationBanner />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Phase Banner</h2>
        <PhaseBanner />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Radio</h2>
        <Radio />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Select</h2>
        <Select />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />
        <h2 className="govgr-heading-l">Summary List</h2>
        <SummaryList />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Table</h2>
        <Table />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Tabs</h2>
        <Tabs />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Text Area</h2>
        <TextArea />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Text Input</h2>
        <TextInput />
        <hr className="govgr-section-break govgr-section-break--l govgr-section-break--visible" />

        <h2 className="govgr-heading-l">Warning Text</h2>
        <WarningText />
      </div>
      <Footer />
    </main>
  );
}
