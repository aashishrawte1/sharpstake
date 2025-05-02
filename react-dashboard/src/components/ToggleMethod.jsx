import React from "react";

export default function ToggleMethod({ method, setMethod }) {
  return (
    <div>
      <label>Choose Data Method: </label>
      <select value={method} onChange={e => setMethod(e.target.value)}>
        <option value="websocket">WebSocket</option>
        <option value="polling">Polling</option>
      </select>
    </div>
  );
}
