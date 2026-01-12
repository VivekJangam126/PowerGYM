function Hero() {
    return (
        <div className="flex  bg-white  justify-center items-center  h-auto  md:flex-row flex-col   text-black  ">
        <div className="left-container border-black  border-2 rounded-lg m-4  w-1/2 flex flex-col px-4 py-4 items-center">
            <p className="text-3xl font-bold ">Meet Our Trainers </p>   
            <p className="mt-4 text-lg flex flex-col px-4 py-4 ">Our certified trainers are dedicated to helping you achieve your fitness goals. With personalized workout plans, expert guidance, and unwavering support, they ensure you stay motivated and on track. Whether you're a beginner or an experienced athlete, our trainers tailor their approach to suit your needs, making every session effective and enjoyable. Join us and experience the difference a great trainer can make in your fitness journey!</p>  

        </div>
        <div className="right-container items-left px-4 py-4 border-white border-2 rounded-lg m-4 fit-content w-1/2  ">
            <img src="https://thumbs.dreamstime.com/b/personal-trainer-gym-fitness-coach-training-client-vector-illustration-isolated-white-background-198689659.jpg" alt="Trainer Image" className="w-full h-132 object-cover"/>   
        </div>
</div>
    )
}
export default Hero;