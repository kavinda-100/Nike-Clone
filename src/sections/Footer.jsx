import { useEffect } from "react";
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


function Footer() {
  const fullYear = () => {
    const d = new Date();
    let year = d.getFullYear();
    return year
  }
  
  
  return (
    <footer className="max-container">

    <div className="flex flex-col">

      <div className="flex flex-col items-start">
          <a href="/">
            <img  src={footerLogo}
              alt="footer logo"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-3xl">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in store. Get Rewards.</p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) =>{
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img 
                  src={icon.src}
                  alr={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            })}
          </div>
      </div>

      <div className="flex flex-row flex-1  items-center justify-center lg:gap-y-50 lg:w-full gap-20 flex-wrap">
      {footerLinks.map((section)=>(
        <div key={section.title} className="lg:px-16">
            <h4 className="text-white font-montserrat text-xl leading-normal font-medium mb-6 mt-6">{section.title}</h4>
            <ul className="mt-7">
              {
                section.links.map((link)=>(
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                  <a className="hover:underline">{link.name}</a>
                  </li>
                ))
              }
            </ul>

        </div>
      ))}

      </div>

    

    </div>

    <div className="flex lg:justify-between flex-col items-center justify-center text-white-400 mt-24 max-sm:flex-col max-sm-items-center text-lg">

     <div>
      <h4>&copy; {fullYear()} Copyright. All rights reserved.</h4>
     </div>

     <div>
      <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
     </div>

    </div>

    </footer>
  )
}

export default Footer