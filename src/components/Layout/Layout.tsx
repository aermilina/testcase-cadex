import Header from '../Header';
import Footer from '../Footer';
import Meta from '../Meta';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
}
