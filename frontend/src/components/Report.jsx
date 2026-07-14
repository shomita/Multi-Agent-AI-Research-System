// components/Report.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Report({ report, topic }) {
  const date = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="doc">
      <header className="doc__head">
        <div>
          <p className="doc__eyebrow">Research Report</p>
          <h2 className="doc__title">{topic || "Untitled inquiry"}</h2>
        </div>
        <p className="doc__meta">{date}</p>
      </header>
      <div className="doc__rule" />
      <div className="doc__body markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
      </div>
    </article>
  );
}

export default Report;