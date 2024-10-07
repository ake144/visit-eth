import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Overlay */}
      <div className="relative h-[700px] bg-[url('/public/images/hewan.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold z-10">About Us</h1>
        </div>
      </div>

      {/* About Us Content */}
      <div className="p-5 my-11">
        <Link to="/" className="p-7 mx-8">
          <Button className="bg-black mt-9 text-white">Back to Home</Button>
        </Link>

        <p className="text-center mb-11 mt-11 p-4 mx-auto text-black text-lg max-w-2xl">
          We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage. Whether you're seeking adventure or tranquility, we aim to make your journey extraordinary.
        </p>
        
      </div>
    </div>
  );
};

export default AboutUs;
