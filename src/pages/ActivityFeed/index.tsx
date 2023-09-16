import { useState } from "react";
import { NDKFilter, NDKEvent } from "@nostr-dev-kit/ndk";
import Button from "../common/button";
import { useNDK } from "@nostr-dev-kit/ndk-react";

export const ActivityFeed = () => {
  const { fetchEvents } = useNDK();
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<NDKEvent[]>([]);

  async function getEvents() {
    setLoading(true);
    const filter: NDKFilter = {
      kinds: [1985],
      "#l": ["org.schema.thing.creativework.movie.review"],
    };

    const events = await fetchEvents(filter);
    console.log(events);
    setResults(events);

    setLoading(false);
  }

  return (
    <div>
      <h3>Get Events</h3>

      <p>
        This example shows how to fetch events from relay. You define the filter
        to get events and then call the fetchEvents function. The result is an
        array of <code>NDKEvent</code> events.
      </p>

      <Button
        label={loading ? "..." : "Get Events"}
        onClick={() => getEvents()}
        disabled={loading}
      />

      {/* {results.map((event, index) => {
        //const content = parseContent(event);
        console.log(event)
        //return event.map(({ type, value }, i) => {
          //return <span key={index}>{event}</span>;
        //});
      })} */}
    </div>
  );
}