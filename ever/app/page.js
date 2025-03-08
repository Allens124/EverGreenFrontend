'use client'
import Image from "next/image";
import "./globals.css";
import * as React from 'react';
import { Box, Link } from "@mui/material";

export default function Home() {
  return (  
    <Box sx={{flex:1},
      {text-align:center},
      {padding:10px},  
      {text-decoration:none},
      {font-size:21px},
      {color:black}}>
      <Link href="/">Welcome!</Link>
      <Link href="/info">Information</Link>
      <Link href="/home">AI Assistant</Link>
    </Box>
  );
}
