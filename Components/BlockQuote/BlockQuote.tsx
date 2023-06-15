import { GovProps } from "@/utils/types";

function BlockQuote({ message }: GovProps) {
  return (
    <>
      <blockquote className="govgr-blockquote">{message}</blockquote>
    </>
  );
}

export default BlockQuote;
