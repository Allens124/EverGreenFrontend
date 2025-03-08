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
        <h1 style={{textAlign:"center"}}>WHO WE ARE</h1>
        <hr/>
        <Box className="b">
          <h1 className="xu">OUR MISSION:</h1>
          <p>EverGreen aims to provide users with the latest air quality data in various environments across the world. <br/> By highlighting regions that are particularly vulnerable, we hope to engage environmental activists <br/> as well as inform policymakers in their efforts to reduce climate change and air pollution.</p>
        </Box>
        <hr/>
        <Box className="c">
          <h1 className="xu">OUR VISION:</h1>
          <p>Our ultimate goal is twofold: On one hand, we wish to provide policymakers with the necessary resources to <br/> make informed decisions for the betterment of their districts. On the other hand, we would like to mobilize <br/> our users by having them be more conscious of environmental conditions in their communities. In sum,<br/> we hope that our efforts will contribute to the reduction of air pollution worldwide.</p>
        </Box>
        <hr/>
        <Box className="d">
          <h1 className="xu">THE PROCESS:</h1>
          <p>Our app works by analyzing air pollution data throughout the United States and ranking the air quality <br/> of each region on a map, using a scale from 1 to 5, where 1 represents an “unsafe” region that has poor <br/> air quality and 5 represents a “safe” region that has favorable air quality. To see the map, the user <br/> first enters a location input </p>
        </Box>
        <hr/>
         <Box id="a">
          <h1 className="xu" >OUR DEVELOPMENT PROCESS</h1>
          <p>--</p>
        </Box>
        <hr/>
        <Box>
          <footer className="e">
            <p>Website Design by: Harrison Min, Steven Ou, Allen Singleton Queens College Copyright © 2025 </p>
          </footer>
        </Box>  
    </Box>
  );
}
