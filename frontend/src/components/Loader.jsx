// components/Loader.jsx
function Loader({ stages = [], activeStage = -1, loading = false, done = false }) {
  return (
    <div className="rail" role="status" aria-live="polite">
      {stages.map((stage, i) => {
        const state = done
          ? "complete"
          : i < activeStage
          ? "complete"
          : i === activeStage
          ? "active"
          : "idle";

        return (
          <div className={`rail__stage rail__stage--${state}`} key={stage}>
            <span className="rail__dot" />
            <span className="rail__label">{stage}</span>
            {i < stages.length - 1 && <span className="rail__line" />}
          </div>
        );
      })}
      {loading && <p className="rail__note">Working through the pipeline…</p>}
    </div>
  );
}

export default Loader;