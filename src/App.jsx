import Layout from "./Layout";
import HeroSection from "./Components/Hero/HeroSection";
import Description from "./Components/Desciption/Description";
import Agenda from "./Components/Agenda/Agenda";
import Road from "./Components/Road/Road";
import Price from "./Components/Price/Price";
import Team from "./Components/Team/Team";
import JoinUs from "./Components/JoinUs/JoinUs";
import Footer from "./Components/shared/Footer";
import Navbar from "./Components/shared/Navbar";
import { useState, useEffect, useRef } from "react";


function App() {
   const [isPlaying, setIsPlaying] = useState(false);
   const audioRef = useRef(null);

   
   const startAudio = () => {
     const audio = audioRef.current;
     if (audio) {
       audio
         .play()
         .then(() => {
           setIsPlaying(true);
         })
         .catch((error) => {
           console.error("Error playing audio:", error);
         });
     }
   };

  
   useEffect(() => {
     const handleUserInteraction = () => {
       if (!isPlaying) {
         startAudio();
       }
     };

     window.addEventListener("click", handleUserInteraction);
     window.addEventListener("scroll", handleUserInteraction);

     return () => {
       window.removeEventListener("click", handleUserInteraction);
       window.removeEventListener("scroll", handleUserInteraction);
     };
   }, [isPlaying]);
   
  return (
    <Layout>
      <audio ref={audioRef} loop >
        <source src="/audio/bgmusic.mp3" type="audio/mpeg" />
      </audio>
      <Navbar />
      <HeroSection />
      <Description />
      <Agenda />
      <Road />
      <Price />
      <Team />
      <JoinUs />
      <Footer />
    </Layout>
  );
}

export default App;
