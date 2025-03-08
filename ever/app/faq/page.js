'use client'
import Image from "next/image";
import "../globals.css";
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
        <a href="..">Welcome(faq)</a>
        <a href="../info">Information(faq)</a>
        <a href="/">FAQ(faq)</a>
       </nav>
      </Box>
    </Box>
  );
}
