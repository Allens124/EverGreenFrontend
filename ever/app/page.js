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
      <Box className ="jian">
       <nav>
        <a href="/">Welcome</a>
        <a href="/info">Information</a>
        <a href = "/faq">AI Assistant</a>
       </nav>
      </Box>
    </Box>
  );
}
