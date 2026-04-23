import usePageMeta from '../hooks/usePageMeta';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProofStrip from '../components/ProofStrip';
import TrustBlock from '../components/TrustBlock';
import CtaBand from '../components/CtaBand';

export default function HomePage() {
  usePageMeta(
    'Genesis Roofing Ltd | Professional Roofing Services',
    'Genesis Roofing Ltd provides professional roofing services including roof repairs, new roofs, flat roofing, fascias, soffits, guttering and chimney repairs in [TO BE PROVIDED].',
  );

  return (
    <>
      <Hero />
      <Services />
      <ProofStrip />
      <TrustBlock />
      <CtaBand />
    </>
  );
}
