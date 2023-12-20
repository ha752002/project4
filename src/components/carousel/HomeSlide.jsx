import { Carousel } from "@material-tailwind/react";
import slide1 from "@/assets/slide/slide1.jpg";
import slide2 from "@/assets/slide/slide2.jpg";
import slide3 from "@/assets/slide/slide3.jpg";
import slide4 from "@/assets/slide/slide4.png";
export function HomeSlide() {
  return (
    <Carousel className="rounded-xl">
      <img src={slide1} alt="image 1" className="h-full w-full object-cover" />
      <img src={slide2} alt="image 2" className="h-full w-full object-cover" />
      <img src={slide3} alt="image 3" className="h-full w-full object-cover" />
      <img src={slide4} alt="image 4" className="h-full w-full object-cover" />
    </Carousel>
  );
}
