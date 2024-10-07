import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "./ui/separator";
import Cards from "./siteCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Testimonials from "./testimonials";
import ProverbCard from "./proverbCard";
import { FAQ } from "./faq";
import {sites, images} from '@/lib/data';



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);



  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mx-auto  bg-white">
      <Carousel className="relative mb-8 w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} hidden={index !== currentIndex}>
              <div className="relative w-full h-[500px] md:h-[800px] lg:h-[900px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Previous Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2  text-5xl font-bold  p-7 rounded-full   transition"
          onClick={handlePrevious}
        >
        <GoChevronLeft />
        </button>

        {/* Custom Next Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-5xl font-bold p-7 rounded-full  transition"
          onClick={handleNext}
        >
         <GoChevronRight />
        </button>
      </Carousel>


      <div className="flex flex-col  mx-[15%] items-center justify-center text-black mt-14">
        <h1 className="text-4xl font-bold">WELCOME TO ETHIOPIA</h1>
        <ProverbCard  />
        <Separator className="my-4 w-[400px]" />
        <h1 className="text-3xl mt-11">DISCOVER ETHIOPIA</h1>
        <Separator className="my-4  w-[400px]" />  
        <p className="text-xl">
          Ethiopia invites you to discover why it is the origin of so much
        </p>

        <p className="p-4">
          Ethiopia is an ancient country whose unique cultural heritage, rich
          history and remarkable biodiversity are reflected in a tally of nine
          UNESCO World Heritage Sites – more than any other country in Africa.
          Within its borders, you’ll find the world&apos;s fourth-holiest Islamic
          city, along with the oldest continuously-occupied town south of the
          Sahara. Compelling antiquities include the medieval rock-hewn
          churches of Lalibela and Gheralta, palaces and temples dating back
          3,000 years, the magnificent 17th century castles of Gondar, and the
          oldest human fossils unearthed anywhere on the planet. Add to this
          the beautiful Simien and Bale Mountains, the spectacular volcanic
          landscapes of the Danakil Depression, and a wealth of mammals and
          birds found nowhere else in the world, and it&apos;s little wonder that
          Ethiopia has become the most attractive and popular emergent tourist
          destination in Africa.
        </p>
      
      </div>

      <div className="flex flex-col items-center justify-center text-black mt-14">
   

        <h1 className="text-3xl mt-14">Popular Things to Visit</h1>
         <Separator className="my-4  w-[400px]" />  
         <p className="p-3 mb-8 ">Here in our site We have a Variety of insight fully planned and well-developed tour packaages and itineraries to meet the different inteerests and needs of out esteemed clients.</p>
          
          <div className="grid  w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { sites.map((site, index) => (
                  <div>
                    <Cards site={site} key={index} />
                    
                    </div>
   
                ))

                }
          </div>
          <Link to='/about' className="my-11">
            <Button variant='secondary' className="mt-8 items-center hover:bg-blue-700 text-md bg-blue-700 ">
              Learn More 
              
              </Button>
            </Link>
         </div>   

            <div>
                <Testimonials />
            </div>
            <div>
              <FAQ  />
            </div>
          
    </div>
  );
}


export default Home;
