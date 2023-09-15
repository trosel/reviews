import React from 'react';
import LogInExtension from "./LogInExtension";
import LogInNostrConnect from "./LogInNostrConnect";
import LogInSecret from "./LogInSecret";

export const Login = () => {

  return (
    <div>
      <h2 id="Signers">Signers</h2>
      <LogInExtension />
      <LogInNostrConnect />
      <LogInSecret />
    </div>
  );
};
