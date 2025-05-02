import { useEffect, useRef, useState } from "react";

export const useWebSocket = (url, isActive) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    setLoading(true);
    setError(null);

    const socket = new WebSocket(url);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
      setLoading(false);
    };

    socket.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        setData(parsed);
      } catch (err) {
        setError(new Error("Failed to parse WebSocket message"));
      }
    };

    socket.onerror = () => {
      setError(new Error("WebSocket error"));
      setLoading(false);
    };

    socket.onclose = (e) => {
      console.log("WebSocket closed:", e.code, e.reason);
    };

    return () => {
      socket.close();
    };
  }, [url, isActive]);

  return { data, error, loading };
};
