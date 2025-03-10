'use client'
import { useState } from "react";
import "../globals.css";
import * as React from 'react';
import { Box, Button } from "@mui/material";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (  
    <Box className="luck">
      <Box className="up">
        <Box >
        <h1 className="tit">EverGreen</h1>
        </Box>
        {/* Menu Button */}
        <Box>
          <Button type="button" className="toggle" color="black" onClick={() => setMenuOpen(prev => !prev)} >  
            ☰
          </Button>
          {/* Dropdown Menu Box */}
          {menuOpen && (
            <Box className="menub">
              <a href="/">HOME</a>
              <a href="/info">WHO WE ARE</a>
              <a href="/map">EVERGREEN MAP</a>
              <a href="/faq">FAQ</a>
            </Box>
          )}
        </Box>
      </Box>
        <h1 style={{textAlign:"center"}}>FAQ</h1>
        <hr/>
          <Box className="b">
            <h1 className="xu">Q: </h1>
            <p>A: </p>
          </Box>
          <hr/>
          <Box className="b">
            <h1 className="xu">Q: </h1>
            <p>A: </p>
          </Box>
          <hr/>
          <Box className="b">
            <h1 className="xu">Can I integrate my own API keys for additional environmental data?</h1>
            <p>Currently, EverGreen supports API integrations for trees, parks, forests, and air quality. We are actively working <br/> on expanding our platform to include lakes, oceans, and wildlife data in the future. Stay tuned for updates!</p>
          </Box>
    </Box>
  );
}
