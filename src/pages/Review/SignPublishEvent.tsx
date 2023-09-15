import { useState } from "react";
import { NDKEvent } from "@nostr-dev-kit/ndk";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import Button from "../common/button";

export default function SignPublishEvent() {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const { signer, signPublishEvent } = useNDK();
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  async function signAndPublishEvent() {
    setLoading(true);

    const note = new NDKEvent();
    note.kind = 1985;
    note.content = "This was okay!";
    note.tags = [
        ["r", selectedMovie.id],
        ["l", "tmdb.movie", "com.thing.creativework.movie.review", "{\"quality\": 0.9}"],
    ];

    const event = await signPublishEvent(note);
    if (event) {
      setResult(JSON.stringify(event.rawEvent(), null, 2));
    }

    setLoading(false);
  }

  return (
    <>
      <h3>Sign and Publish Events</h3>

      {signer === undefined && (
        <p>You must be signed in to sign and publish events.</p>
      )}

      <Button
        label="Sign and Publish Event"
        onClick={() => signAndPublishEvent()}
        disabled={loading || signer === undefined}
      />

      {result && (
        <pre>
          <code>{result}</code>
        </pre>
      )}
    </>
  );
}