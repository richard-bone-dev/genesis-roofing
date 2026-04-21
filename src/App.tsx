import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProofStrip from './components/ProofStrip';
import TrustBlock from './components/TrustBlock';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ProofStrip />
        <TrustBlock />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
