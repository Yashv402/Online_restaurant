const HeadLineCards = () =>{
    return(
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-5">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
                    <p className="font-bold px-2 pt-4">Sun's Out, BOGO's Out</p>
                    <p className="px-2 text-[15px]">Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order now</button>
                </div>
                <img className="rounded-xl max-h-160px md:max-h-[200px] w-full object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
                    <p className="font-bold px-2 pt-4">New Restaurants</p>
                    <p className="px-2 text-[15px]">Added Daily</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order now</button>
                </div>
                <img className="rounded-xl max-h-160px md:max-h-[200px] w-full object-cover" src="https://images.pexels.com/photos/6994271/pexels-photo-6994271.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
                    <p className="font-bold px-2 pt-4">We deliver Desserts</p>
                    <p className="px-2 text-[15px]">Teasty Treats</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">Order now</button>
                </div>
                <img className="rounded-xl max-h-160px md:max-h-[200px] w-full object-cover" src="https://images.pexels.com/photos/998238/pexels-photo-998238.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
        </div>
    )
}
export default HeadLineCards;