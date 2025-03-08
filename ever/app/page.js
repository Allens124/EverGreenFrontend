'use client'
import Image from "next/image";
import "./globals.css";
import * as React from 'react';
import { Box, Link } from "@mui/material";

export default function Home() {
  return (  
    <Box>
      <Box>
        <h1 class="jian">EverGreen</h1>
      </Box>
      <Box>
        <Link href="/">Welcome!</Link>
        <Link href="/info">Information</Link>
        <Link href="/home">AI Assistant</Link>
      </Box>
    </Box>
  );
}
