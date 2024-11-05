import ContactForm from '@/components/ContactForm';
import { Typography, Box } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h1">Only CTA on the page</Typography>
      <ContactForm />
    </Box>
  );
}
