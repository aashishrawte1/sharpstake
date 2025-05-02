import React, { useState } from "react";
import { usePolling } from "../hooks/usePolling";
import { useWebSocket } from "../hooks/useWebSocket";
import DataDisplay from "./DataDisplay";
import ToggleMethod from "./ToggleMethod";

export default function Dashboard() {
  const [method, setMethod] = useState("websocket");
  const isWebSocket = method === "websocket";

  const {
    data: wsData,
    error: wsError,
    loading: wsLoading,
  } = useWebSocket("ws://localhost:4000", isWebSocket);

  const {
    data: pollData,
    error: pollError,
    loading: pollLoading,
  } = usePolling("http://localhost:4000/api/history", !isWebSocket);

  const data = isWebSocket ? wsData : pollData;
  const error = isWebSocket ? wsError : pollError;
  const loading = isWebSocket ? wsLoading : pollLoading;

  return (
    <div>
      <ToggleMethod method={method} setMethod={setMethod} />

      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}
      {loading && !data && <div>Loading...</div>}

      <DataDisplay data={data} />
    </div>
  );
}
