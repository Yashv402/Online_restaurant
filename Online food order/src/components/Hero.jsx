const Hero = () => {
    return(
        <div className="max-width-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
            {/* Overlay */}
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
                <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
                <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-500">Food</span>Delivered</h1>
            </div>
            <img className="w-full max-h-[500px] object-cover sm:h-[300px] md:h-[400px]" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        </div>
    )
}

export default Hero;