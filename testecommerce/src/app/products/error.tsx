"use client";
function error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>{error.message || "something went wrong"}</h1>
    </div>
  );
}

export default error;
