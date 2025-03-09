'use client'
import { useState } from "react";
import "../globals.css";
import * as React from 'react';
import { Box, Button } from "@mui/material";
import MapPage from "../backend/MapPage";
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
        <h1 style={{textAlign:"center"}}>EVERGREEN MAP</h1>
        <hr/>
        <MapPage />
    </Box>
  );
}
