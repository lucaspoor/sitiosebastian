import Footer from './components/Footer';
import PropuestasCards from './components/Propuestas';
import TrayectoriaCards from './components/Trayectoria';
import Video from './components/VIdeo';
import Hero from './components/hero';

export default function Index() {
  return (
    <>
      <Hero></Hero>
      <Video></Video>
      <TrayectoriaCards></TrayectoriaCards>
      <PropuestasCards></PropuestasCards>
      <Footer></Footer>
    </>
  );
}
