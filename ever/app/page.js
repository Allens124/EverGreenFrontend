'use client'
import Image from "next/image";
import "./globals.css";
import * as React from 'react';
import { Box, Button, Stack, TextField, Link } from "@mui/material";

export default function Home() {
  return (  
    <Box>
      <Box>
        <h1 className="tit">EverGreen</h1>
      </Box>
      <br/>
      <Box>
       <nav className="jian">
        <a href="/page.js">Welcome</a>
        <a href="info/infoPage.js">Information(home)</a>
        <a href="faq/faqPage.js">FAQ(home)</a>
       </nav>
      </Box>
      <Box sx={{textAlign:"center",display:"flex"}}>
        <br/>
        <h1 style={{textAlign:"center"}}>HOME</h1>
        <br/>
        <br/>
        <Box>
          <h1 className="xu">OUR MISSION:</h1>
          <p>EverGreen aims to provide users with real-time air pollution data in parks, forests, and across the United States. 
            By highlighting these vulnerable and endangered regions, we hope to engage environmental activists as well as inform policymakers in their efforts to reduce climate change.</p>
        </Box>
        <Box>
          <h1 className="xu">OUR VISION:</h1>
          <p>Our ultimate goal is twofold: On one hand, we wish to provide policymakers with the necessary resources to make informed decisions for the betterment of their districts. 
            On the other hand, we would like to mobilize our users by having them be more conscious of environmental conditions in their communities. 
            All together, we hope that our efforts will contribute to the reduction of air pollution across the nation.</p>
        </Box>
      </Box>
    </Box>
  );
}
