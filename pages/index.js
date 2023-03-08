import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';
import Courses from '../components/Courses';
import Daftar from '../components/Daftar';

export default function Home() {
  return (
    <>
      <SeoHead title="Kursus IT" />
      <Layout>
        <Hero />
        <Feature />
        <Courses />
        <Daftar />
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
