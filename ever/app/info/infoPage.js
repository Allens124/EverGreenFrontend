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
      <Box sx={{textAlign:"center"}}>
       <nav>
        <a href="../page.js">Welcome(info)</a>
        <a href="/infoPage.js">Information(info)</a>
        <a href="/../faq/faqPage.js">FAQ(info)</a>
       </nav>
      </Box>
    </Box>
  );
}
