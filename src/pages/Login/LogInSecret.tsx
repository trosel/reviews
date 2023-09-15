import { useState } from "react";
import Input from "../common/input";
import Button from "../common/button";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { useLocation } from 'wouter';

export default function LogInSecret() {
  const [location, setLocation] = useLocation();

  const [input, setInput] = useState<string>(
    "nsec1zyxuyap3zmewe7089wwnja2t0sjj2ql6ut7n4w58dcnwpgn0jzeqpjjsvc"
  );
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { loginWithSecret } = useNDK();

  async function connectSecret() {
    setLoading(true);
    const user = await loginWithSecret(input);
    if (user) {
      setResult(JSON.stringify(user, null, 2));
      setLocation('/review');
    }
    setLoading(false);
  }

  

  return (
    <>
      <h3>Login with Secret</h3>

      <Input
        value={input}
        placeholder="input your nsec"
        label="nsec or secret key"
        onChange={setInput}
      />

      <div>
        <Button
          label={loading ? "..." : "Connect"}
          onClick={() => connectSecret()}
          disabled={loading}
        />
      </div>

      {result && (
        <pre>
          <code>{result}</code>
        </pre>
      )}
    </>
  );
}
