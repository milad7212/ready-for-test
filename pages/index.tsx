




import Hero from "../components/Hero";
import Navbar from "../components/ui/Navbar/Navbar";

import StartExam from "../components/StartExam";
import ContactWhitMe from "../components/ContactWhitMe";
import Footer from "../components/Footer";
import ShowItemTest from "../components/ShowItemTest";
import WhyUse from "../components/WhyUse";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-200  ">
      <Navbar />
      <div className="container mx-auto px-6 flex flex-col">
        <Hero />
        <StartExam/>
       
        <WhyUse/>
        <ShowItemTest/>
        <ContactWhitMe/>
      </div>
        <Footer/>
    </div>
  );
}
