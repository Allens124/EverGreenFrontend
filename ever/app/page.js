'use client'
import { useState } from "react";
import "./globals.css";
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
        <h1 style={{textAlign:"center"}}>HOME</h1>
        <hr/>
          <Box className="b">
            <h1 className="xu">What is EverGreen?:</h1>
            <p>EverGreen is a software that works by analyzing air pollution data across the world and ranking the <br/> air quality of each region on a map, using a scale from 1 to 5, where 1 represents an “unsafe” region <br/> that has poor air quality and 5 represents a “safe” region that has favorable air quality.</p>
          </Box>
        <hr/>
    </Box>
  );
}
