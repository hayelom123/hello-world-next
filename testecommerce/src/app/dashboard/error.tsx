"use client";
function error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <p>{error.message || "Something went wrong"}</p>
      <button onClick={reset}>try again</button>
    </div>
  );
}

export default error;
