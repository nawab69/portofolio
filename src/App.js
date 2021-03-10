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
// import './css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MessageBottom from './component/MessageBottom';
import Projects from './component/Projects';
// import Message from './component/Message';


function App() {

  AOS.init({
    duration:1200
  })

  return (
    <>
      <NavBar />
      <Hero />
      <Services/>
      <Projects/>
      {/* <Features/> */}
      <Team/>
      <ContactUs/>
      <Footer />
      <MessageBottom/>
    </>
  );
}

export default App;
