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
        <a href="/">Welcome</a>
        <a href="/info/infoPage.js">Information</a>
        <a href="/faq/faqPage.js">FAQ</a>
       </nav>
      </Box>
      <Box>
        <Box sx={{textAlign:"center"}}>
          <h1 className="xu">OUR MISSION:</h1>
          <h2>EverGreen aims to provide users with real-time air pollution data in parks, forests, and across the United States. 
            By highlighting these vulnerable and endangered regions, we hope to engage environmental activists as well as inform policymakers in their efforts to reduce climate change.</h2>
        </Box>
        <Box>

        </Box>
      </Box>
    </Box>
  );
}
