import React from 'react';
import '../../App.css';
import { AppRouter } from './Router';
import { Navigation } from './Navigation';
import { NDKProvider } from "@nostr-dev-kit/ndk-react"; // Import NDKProvider



function App() {
  return (
    <NDKProvider
      relayUrls={[
        "wss://relay.damus.io",
        "wss://relay.snort.social",
        "wss://purplepag.es",
      ]}
    >
      <div>
        <Navigation />
        <AppRouter />
      </div>
    </NDKProvider>
  );
}


export default App;
