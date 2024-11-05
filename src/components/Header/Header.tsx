import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ContactButton from '../ContactButton';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" sx={{ color: '#fff', textTransform: 'uppercase' }}>
            Some company
          </Typography>
        </Link>
        <ContactButton />
      </Toolbar>
    </AppBar>
  );
}
