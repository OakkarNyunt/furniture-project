import DOMPurify from "dompurify";

function DompurifySanitized({ content }: { content: string }) {
  const sanitizedContent = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
}

export default DompurifySanitized;
