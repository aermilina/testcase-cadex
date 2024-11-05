import { BottomNavigation, Typography } from '@mui/material';

export default function Footer() {
  return (
    <BottomNavigation
      sx={{
        position: { md: 'static', xs: 'fixed' },
        bottom: { xs: 0 },
        width: '100%',
        alignItems: 'center',
        padding: '1rem 0',
        zIndex: 2
      }}>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Some Company&nbsp;2024
      </Typography>
    </BottomNavigation>
  );
}
