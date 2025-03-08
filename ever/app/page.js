'use client'
import Image from "next/image";
import "./globals.css";
import * as React from 'react';
import { Box, Link } from "@mui/material";

export default function Home() {
  return (  
    <Box>
      <Box>
        <h1 className="tit">EverGreen</h1>
      </Box>
      <Box sx={{textAlign:"center"}}>
       <nav>
        <a href="/">Welcom</a>
        <a href="/info">Information</a>
        <a href = "/faq">AI Assistant</a>
       </nav>
      </Box>
    </Box>
  );
}
