import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Pathways from './components/Pathways';
import Difference from './components/Difference';
import FeaturedBook from './components/FeaturedBook';
import Endorsements from './components/Endorsements';
import GetInvolved from './components/GetInvolved';
import Authors from './components/Authors';
import Subscribe from './components/Subscribe';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Pathways />
        <Difference />
        <FeaturedBook />
        <Endorsements />
        <GetInvolved />
        <Authors />
        <Subscribe />
        <FinalCTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
