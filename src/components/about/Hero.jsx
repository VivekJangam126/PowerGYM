function Hero(){

    return(
        <section className="hero-section bg-[#222831] text-white py-20 px-5 text-center w-full h-162 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why to Join Us ?</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
                At Power GYM, we are dedicated to helping you achieve your fitness goals. 
                Our state-of-the-art facilities, experienced trainers, and supportive community 
                provide the perfect environment for you to thrive. Whether you're a beginner or 
                a seasoned athlete, we have the resources and programs to help you succeed.
            </p>
            <button className="mt-8 bg-[#00ADB5] text-[#222831] px-6 py-3 rounded-full 
                               font-semibold hover:bg-[#EEEEEE] hover:text-[#222831] 
                               transition-colors duration-300 w-40 h-12">
                Join Now

            </button>
        </section>
    )

}
export default Hero;