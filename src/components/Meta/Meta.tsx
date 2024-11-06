import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function Meta() {
  const pathname = usePathname();
  const title = pathname.includes('contact') ? 'Some Company - Contact us' : 'Some Company';
  const fullUrl = `https://testcase-cadex-2.vercel.app${pathname}`;
  return (
    <Head>
      <link rel="preconnect" href="https://youtube.com/" />
      <title>{title}</title>
      <meta name="description" content="Some company is a some company" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
      />
      <meta property="og:description" content="Some company is a some company" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Some company is a some company" />
      <meta
        name="twitter:image"
        content="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
      />
      <link rel="canonical" href={fullUrl} />
      <link rel="alternate" href={fullUrl} />
    </Head>
  );
}
