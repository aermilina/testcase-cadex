import { FormControl, FormLabel, TextField } from '@mui/material';

interface Props {
  value: string;
  error?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  multiline?: boolean;
  rows?: number;
}

export default function InputField({
  name,
  value,
  error,
  label,
  handleChange,
  multiline,
  rows
}: Props) {
  return (
    <FormControl sx={{ my: 1, textAlign: 'left' }}>
      <FormLabel required>{label}</FormLabel>
      <TextField
        name={name}
        value={value}
        onChange={handleChange}
        required
        variant="filled"
        error={Boolean(error)}
        multiline={multiline}
        rows={rows}
        helperText={error}
      />
    </FormControl>
  );
}
