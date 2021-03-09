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


function App() {
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
