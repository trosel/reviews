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
        ["r", "https://www.themoviedb.org/movie/" + selectedMovie.id, ], // themoviedb.org ID
        ["r", selectedMovie.title + " | " + selectedMovie.release_date.split("-")[0]], // plain text like "Barbie | 2023"
        ["L", "org.schema"],
        [
            "l", 
            "org.schema.thing.creativework.movie.review", 
            "org.schema", 
            "{\"quality\": 0.9}" // rating
        ],
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