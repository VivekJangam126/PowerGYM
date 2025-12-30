import { useEffect, useState } from "react";

function Why() {
  var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

  

  return (
    <section className="min-h-screen flex font-fira bg-gradientBody">

    <div lassName="
  relative w-[95%] max-w-[800px] mx-auto
  bg-white rounded-[25px]
  p-6 h-[400px]
  shadow-card
  transition-all duration-300

  lg:max-w-[680px]
  md:min-h-[500px] md:h-auto md:my-[180px]
">  
       <div>
          <div className="
  flex items-center
  md:flex-col
">

                  <div className="
  relative flex-shrink-0
  w-[300px] h-[300px]
  rounded-[20px]
  overflow-hidden
  bg-gradientCard
  shadow-image
  -translate-x-[80px]

  md:w-[90%] md:-translate-x-0 md:-translate-y-1/2
  sm:w-[95%]
">
  <img
    src="/image.jpg"
    className="
      w-full h-full object-cover
      rounded-[20px]
      opacity-0
      transition-all duration-300
    "
  />
</div>

                  <div className="
  pr-6
  md:mt-[-80px] md:text-center md:px-8
  sm:px-0
">

    
                       <h2 className="text-2xl font-bold text-[#0d0925] mb-5">
Certified Personal Trainers</h2>
                       <p className="text-[#4e4a67] leading-relaxed mb-8">
Train under certified and experienced fitness professionals who prioritize correct form, injury prevention, and sustainable progress. Our trainers guide every movement to ensure safe, effective, and long-term results</p>
                       <a
  href="#"
  className="
    inline-flex justify-center items-center
    px-9 py-4
    rounded-full
    text-white font-medium tracking-wider
    bg-gradientCard
    shadow-button
    no-underline
    sm:w-full
  "
>
Book a Free Session</a>
                   </div>
          </div>
            
       </div>
       <div className="
  absolute right-5 top-1/2 -translate-y-1/2
  z-20 text-center w-[11px]

  md:left-1/2 md:top-[205px] md:-translate-x-1/2
  md:flex md:justify-center md:items-center md:w-full
">
 </div>
    </div>

</section>
   
  );
}

export default Why;
