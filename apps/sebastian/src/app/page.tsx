import Footer from './components/Footer';
import PropuestasCards from './components/Propuestas';
import TrayectoriaCards from './components/Trayectoria';
import Video from './components/VIdeo';
import Hero from './components/hero';

export default function Index() {
  return (
    <>
      <Hero></Hero>
      <div className="">
        <div className="w-100 justify-center flex mt-12">
          <h1 className="font-arial font-bold text-2xl lg:text-4xl text-redprimary">
            Conoce al Candidato
          </h1>
        </div>
        <Video></Video>
      </div>

      <TrayectoriaCards></TrayectoriaCards>
      <PropuestasCards></PropuestasCards>
      <Footer></Footer>
    </>
  );
}
