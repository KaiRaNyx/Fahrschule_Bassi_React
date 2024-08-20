import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Fahrschule from "@/scenes/fahrschule";
import Theorie from "@/scenes/theorie";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import VKU from "./scenes/vku";
import Preise from "./scenes/preise";
import UeberMich from "./scenes/ueberMich";
import MeineAutos from "./scenes/meineAutos";
import Kontakt from "./scenes/kontakt";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar 
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Fahrschule setSelectedPage={setSelectedPage} />
        <Theorie setSelectedPage={setSelectedPage} />
        <VKU setSelectedPage={setSelectedPage} />
        <UeberMich setSelectedPage={setSelectedPage} />
        <Preise setSelectedPage={setSelectedPage} />
        <MeineAutos setSelectedPage={setSelectedPage} />
        <Kontakt setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
}

export default App;
