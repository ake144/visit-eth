import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
    return (
       <div>
           <footer className="bg-black">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
 

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
       

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-100 lg:text-left">
          As you explore Ethiopia, you will be put in touch with your own origins...for this is a Land of Origins
        </p>

        <Link to='/about' className="my-11 x-auto mt-6 max-w-md text-center md:mx-5 mx-[280px]  text-gray-100 lg:text-left">
            <Button variant='secondary' className="mt-8 hover:bg-blue-700 items-center text-md bg-blue-700 ">
              Learn More 
              
              </Button>
          </Link>
      </div>

     


      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-gray-100 transition hover:text-gray-200/75" href="/about"> About Us </a>
        </li>

        <li>
          <a className="text-gray-100 transition hover:text-gray-200/75" href="#"> Contact Us </a>
        </li>

      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-100 lg:text-right">
      Copyright &copy; 2024. All rights reserved.
    </p>
  </div>
</footer>

</div>
    );
}


export default Footer;