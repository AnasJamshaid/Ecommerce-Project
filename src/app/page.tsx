// pages/page.tsx

import { Aboutus } from "./components/Aboutus";
import { Blog } from "./components/Blog";
import { Chafs } from "./components/Chafs";
import { Clients } from "./components/Clients";
import { Foodcategorie } from "./components/Foodcategorie";
import HeroSection from "./components/HeroSection";
import { Menupick } from "./components/Menupick";
import { Resturant } from "./components/Resturant";
import { Testimonial } from "./components/Testimonial";
import { Whychoose } from "./components/Whychoose";

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <Aboutus />
      <Foodcategorie />
      <Whychoose />
      <Clients />
      <Menupick />
      <Chafs />
      <Testimonial />
      <Resturant /> <br />
      <br />
      <Blog />
      
    </div>
  );
};

export default MainPage;
