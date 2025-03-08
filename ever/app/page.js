'use client'
import Image from "next/image";
import { useState } from "react";
import "./globals.css";
import * as React from 'react';
import { Box, Button } from "@mui/material";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (  
    <Box>
      <Box>
        <h1 className="tit">EverGreen</h1>
      </Box>
      <br/>
      <Box>
        {/*Creating the Menubar */}
      <Box className="navbar">
        <Button type="button" class="toggle" onClick={() => setMenuOpen(prev => !prev)}>  
          ☰ Menu
        </Button>
      </Box>
        {/*Creating the Navigation Menu */}
       <nav className={`jian${menuOpen?'open':'closed'}`}>
        <a href="/">WELCOME</a>
        <a href="info/">INFORMATION</a>
        <a href="faq/">FAQ</a>
       </nav>
       <style jsx>{`
       .jian{
            display: ${menuOpen ? 'block' : 'none'};
            flex-direction: column;
            }`}
        </style>
      </Box>
        <br/>
        <h1 style={{textAlign:"center"}}>HOME</h1>
        <hr/>
        <Box>
          <h1 className="xu">OUR MISSION:</h1>
          <p>EverGreen aims to provide users with real-time air pollution data in parks, forests, and across the United States. <br/>
            By highlighting these vulnerable and endangered regions, we hope to engage environmental activists as well as inform policymakers in their efforts to reduce climate change.</p>
        </Box>
        <hr/>
        <Box>
          <h1 className="xu">OUR VISION:</h1>
          <p>Our ultimate goal is twofold: On one hand, we wish to provide policymakers with the necessary resources to make informed decisions for the betterment of their districts. <br/>
            On the other hand, we would like to mobilize our users by having them be more conscious of environmental conditions in their communities. <br/>
            All together, we hope that our efforts will contribute to the reduction of air pollution across the nation.</p>
        </Box>
        <hr/>
        <Box>
          <h1 className="xu">THE PROCESS:</h1>
          <p>Our app works by analyzing air pollution data throughout the United States and ranking the air quality of each region on a map, using a scale from 1 to 5, where 1 represents an “unsafe” region that has poor air quality and 5 represents a “safe” region that has favorable air quality. 
          <br/>To see the map, the user first enters a location input</p>
        </Box>
        <hr/>
         <Box id="a">
          <h1 className="xu" >OUR DEVELOPMENT PROCESS</h1>
          <p>--</p>
        </Box>
        <hr/>
        <footer>
        <p>Website Design by: Harrison Min, Steven Ou, Allen Singleton Queens College  Copyright © 2025 </p>
        </footer>

    </Box>
  );
}
