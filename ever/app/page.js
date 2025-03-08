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
      <Box sx={{textAlign:"left"}}>
        <h1 className="xu">OUR MISSION:</h1>


      </Box>
    </Box>
  );
}
