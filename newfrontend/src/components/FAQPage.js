/*const FAQPage = () => {
    return (
      <div>
        <h1>FAQ</h1>
        <p>Here are some frequently asked questions about the app.</p>
        <ul>
          <li>What is this app about?</li>
          <li>How do I input data?</li>
        </ul>
      </div>
    );
  };
  
  export default FAQPage;*/

  'use client'
import { useState } from "react";
import "./globals.css";
import * as React from 'react';
import { Box, Button } from "@mui/material";

export default function Home() {
        <><Box>
    <Box>
      <Box>
        <a href="/">HOME</a>
        <a href="/map">EVERGREEN MAP</a>
        <a href="/faq">FAQ</a>
      </Box>
    </Box>
  </Box><h1 style={{ textAlign: "center" }}>FAQ</h1><hr /><Box className="b">
      <h1 className="xu">Q: </h1>
      <p>A: </p>
    </Box><hr /><Box className="b">
      <h1 className="xu">Q: </h1>
      <p>A: </p>
    </Box><hr /><Box className="b">
      <h1 className="xu">Can I integrate my own API keys for additional environmental data?</h1>
      <p>Currently, EverGreen supports API integrations for trees, parks, forests, and air quality. We are actively working <br /> on expanding our platform to include lakes, oceans, and wildlife data in the future. Stay tuned for updates!</p>
    </Box></>
}
