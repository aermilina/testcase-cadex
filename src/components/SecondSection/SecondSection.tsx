import Section from '../Section';
import Announce from '../Announce';
import ContactButton from '../ContactButton';
import { Grid2 } from '@mui/material';

export default function SecondSection() {
  return (
    <Section name="Also very important title">
      <Grid2
        container
        columnSpacing={{ xs: 2, md: 4 }}
        rowSpacing={{ xs: 2, md: 5 }}
        columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Announce />
          </Grid2>
        ))}
      </Grid2>
      <ContactButton pulse />
    </Section>
  );
}
