import { useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { Container, Button, Typography, Box } from '@mui/material';
import InputField from './InputField';
import { FieldValues } from '@/app/types';
import * as S from './styled';
import * as Yup from 'yup';

export default function ContactForm() {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validationScheme = Yup.object().shape({
    name: Yup.string().min(3, 'The name should contain minimum 3 symbols').required('Enter a name'),
    email: Yup.string().email('Enter valid e-mail format').required('Enter e-mail'),
    message: Yup.string().required('Enter message')
  });

  const formik = useFormik<FieldValues>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: validationScheme,
    onSubmit: (values) => {
      if (values) {
        const url = '/api/contact';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(values)
        })
          .then((response) => response.json())
          .then((result) => {
            const { message } = result;
            setMessage(message);
          })
          .catch((e) => setError(e));
      }
    }
  });
  const { handleSubmit, handleChange, values, errors } = formik;
  if (message) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            height: { xs: 'calc(100vh - 330px)', md: 'calc(100vh - 140px)' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography sx={{ color: '#34BF48' }} variant="h2">
            {message}
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xs">
      <FormikProvider value={formik}>
        <S.Form onSubmit={handleSubmit}>
          <InputField
            name="name"
            label="Name"
            handleChange={handleChange}
            value={values.name}
            error={errors.name}
          />
          <InputField
            name="email"
            label="E-mail"
            handleChange={handleChange}
            value={values.email}
            error={errors.email}
          />
          <InputField
            name="message"
            label="Message"
            handleChange={handleChange}
            value={values.message}
            error={errors.message}
            multiline
            rows={5}
          />
          <Button variant="outlined" sx={{ my: 2 }} type="submit">
            Send
          </Button>
        </S.Form>
      </FormikProvider>
    </Container>
  );
}
