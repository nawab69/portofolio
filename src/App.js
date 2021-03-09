import Features from './component/Features';
import Footer from './component/Footer';
import Hero from './component/Hero';
import NavBar from './component/NavBar';
import Services from './component/Services';
import Team from './component/Team';
import ContactUs from './component/ContactUs'
import './css/bootstrap.min.css';
import './css/materialdesignicons.min.css';
import './scss/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  AOS.init({
    duration:1200
  })

  return (
    <div>
      <NavBar />
      <Hero />
      <Services/>
      <Features/>
      <Team/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
