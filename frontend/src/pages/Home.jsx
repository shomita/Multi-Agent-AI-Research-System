// src/Home.jsx
import { useEffect, useState } from "react";
import api from "../services/api";

import Loader from "../components/Loader";
import Report from "../components/Report";
import Feedback from "../components/Feedback";

const STAGES = ["Search", "Read", "Write", "Critique"];

function Home() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState("");
  const [feedback, setFeedback] = useState("");
  const [activeStage, setActiveStage] = useState(-1);
  const [done, setDone] = useState(false);

  // The backend replies once at the end, so this cycles through the
  // stage labels in order while the request is in flight — a cosmetic
  // stand-in for real per-stage progress, matching the pipeline's actual order.
  useEffect(() => {
    if (!loading) return;
    const id = setInterval(() => {
      setActiveStage((s) => (s < STAGES.length - 1 ? s + 1 : s));
    }, 1600);
    return () => clearInterval(id);
  }, [loading]);

  const generateReport = async () => {
    if (!topic.trim()) {
      alert("Please enter a research topic.");
      return;
    }

    setLoading(true);
    setDone(false);
    setReport("");
    setFeedback("");
    setActiveStage(0);

    try {
      const response = await api.post("/research", { topic });
      setReport(response.data.report);
      setFeedback(response.data.feedback);
      setActiveStage(STAGES.length - 1);
      setDone(true);
    } catch (error) {
      console.error(error);
      alert("Failed to generate report.");
      setActiveStage(-1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <header className="masthead">
        <span className="masthead__mark">◆</span>
        <div className="masthead__text">
          <p className="masthead__eyebrow">Multi-Agent System</p>
          <h1 className="masthead__title">Research Desk</h1>
        </div>
        <span className="masthead__tag">Search · Read · Write · Critique</span>
      </header>

      <main className="container">
        <section className="brief">
          <label className="brief__label" htmlFor="topic">
            What should we investigate?
          </label>
          <div className="brief__row">
            <input
              id="topic"
              type="text"
              placeholder="e.g. The economics of vertical farming"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generateReport()}
            />
            <button onClick={generateReport} disabled={loading}>
              {loading ? "Working…" : "Run Agents →"}
            </button>
          </div>
        </section>

        <Loader stages={STAGES} activeStage={activeStage} loading={loading} done={done} />

        {!loading && report && <Report report={report} topic={topic} />}
        {!loading && feedback && <Feedback feedback={feedback} />}
      </main>
    </div>
  );
}

export default Home;