import React from "react";

export default function DataDisplay({ data }) {
  if (!data) return <div className="card">No Data Available</div>;

  return (
    <div className="card">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
