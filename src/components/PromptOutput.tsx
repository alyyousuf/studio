export default function PromptOutput({ prompt }: any) {
  return (
    <div className="card">
      <h3>البرومبت الناتج</h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>{prompt}</pre>
    </div>
  );
}