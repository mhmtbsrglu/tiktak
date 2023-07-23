import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import HowWorks from "./components/HowWorks/HowWorks";
import bg from "@assets/bg.svg";
import Blog from "./components/Blog/Blog";
import Nerede from "./components/Nerede/Nerede";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className=" z-0 opacity-0 absolute xl:opacity-100 -top-32 -left-20 ">
        <img src={bg} alt="tiktak" className="rotate-180 w-96" />
      </div>
      <Navigation />
      <HeroBanner />
      <div className="relative overflow-hidden">
        <HowWorks />
        <div className="absolute -bottom-0 -right-28">
          <img
            src={bg}
            alt="tiktak"
            className="xl:opacity-100 opacity-0 rotate-0 w-96"
          />
        </div>
      </div>

      <Blog />
      <Nerede />
      <Footer />
    </>
  );
}

export default App;
