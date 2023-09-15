import { useState } from "react";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import Input from "../common/input";
import Button from "../common/button";
import { useLocation } from 'wouter';

export default function LogInNostrConnect() {
  const [location, setLocation] = useLocation();

  const [input, setInput] = useState<string>(
    "npub1alpha9l6f7kk08jxfdaxrpqqnd7vwcz6e6cvtattgexjhxr2vrcqk86dsn"
  );
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { loginWithNip46 } = useNDK();

  async function connect() {
    setLoading(true);
    const user = await loginWithNip46(input);
    if (user) {
      setResult(JSON.stringify(user, null, 2));
      setLocation('/review');
    }
    setLoading(false);
  }

  

  return (
    <>
      <h3>Login with Nostr Connect</h3>

      <Input
        value={input}
        placeholder="input your npub"
        label="npub or token"
        onChange={setInput}
      />

      <div>
        <Button
          label={loading ? "..." : "Connect"}
          onClick={() => connect()}
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
