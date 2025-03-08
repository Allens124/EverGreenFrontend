'use client'
import { useState } from "react";
import "../globals.css";
import * as React from 'react';
import { Box, Button } from "@mui/material";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (  
          <Box>
               <Box className="up">
                    <Box >
                    <h1 className="tit">EverGreen</h1>
                    </Box>
                    {/* Menu Button */}
                    <Box>
                      <Button type="button" className="toggle" onClick={() => setMenuOpen(prev => !prev)} >  
                        ☰
                      </Button>
                      {/* Dropdown Menu Box */}
                      {menuOpen && (
                        <Box className="menub">
                          <a href="/">WELCOME</a>
                          <a href="/info">INFORMATION</a>
                          <a href="/faq">FAQ</a>
                        </Box>
                      )}
                    </Box>
                </Box>
          </Box>
  );
}