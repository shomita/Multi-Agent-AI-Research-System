// components/Feedback.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function extractScore(text = "") {
  const match = text.match(/score:\s*([\d.]+)\s*\/\s*(\d+)/i);
  return match ? `${match[1]}/${match[2]}` : null;
}

function Feedback({ feedback }) {
  const score = extractScore(feedback);

  return (
    <article className="memo">
      <header className="memo__head">
        <p className="memo__eyebrow">Critic Memo</p>
        <span className="memo__stamp">{score ? `Score ${score}` : "Reviewed"}</span>
      </header>
      <div className="memo__rule" />
      <div className="memo__body markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{feedback}</ReactMarkdown>
      </div>
    </article>
  );
}

export default Feedback;