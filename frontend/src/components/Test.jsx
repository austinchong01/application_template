import { useEffect, useState } from "react";
import { api } from "../services/api";

function Test() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const testBackend = async () => {
      const result = await api.test();
      if (result.success) setMessage(result.data.test);
    };
    testBackend();
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Test;