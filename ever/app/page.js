'use client'
import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";
import * as React from 'react';
import { Box, Link } from "@mui/material";

export default function Home() {
  return (  
    <Box display={"flex"} font={"30px"}>
      <Link href="/">Welcome!</Link>
      <Link href="/info">Information</Link>
      <Link href="/home">AI Assistant</Link>
    </Box>
  );
}
