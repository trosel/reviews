import { useState } from "react";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import Button from "../common/button";
import { useLocation } from 'wouter';

export default function LogInExtension() {
  const [location, setLocation] = useLocation();

  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { loginWithNip07 } = useNDK();

  async function connectExtension() {
    setLoading(true);
    const user = await loginWithNip07();
    if (user) {
      setResult(JSON.stringify(user, null, 2));
      setLocation('/review');
    }
    setLoading(false);
  }

  

  return (
    <div>
      <h3>Login with Extension</h3>

      <Button
        label={loading ? "..." : "Connect with Extension"}
        onClick={() => connectExtension()}
        disabled={loading}
      />

      {result && (
        <pre>
          <code>{result}</code>
        </pre>
      )}
    </div>
  );
}
