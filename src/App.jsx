import Layout from "./Layout";
import HeroSection from "./Components/Hero/HeroSection";
import Description from "./Components/Desciption/Description";
import Agenda from "./Components/Agenda/Agenda";
import Road from "./Components/Road/Road";
import Price from "./Components/Price/Price";
import Team from "./Components/Team/Team";
import JoinUs from "./Components/JoinUs/JoinUs";
import Footer from "./Components/shared/Footer";


function App() {
  return (
    <Layout>
      <HeroSection/>
      <Description/>
      <Agenda/>
      <Road/>
      <Price/>
      <Team/>
      <JoinUs/>
      <Footer/>
    </Layout>
  );
}

export default App
