import {useState} from 'react'
import {data} from '../../data/data'
const Food =() =>{
    // console.log(data);

    const [foods, setFoods] = useState(data);

    // Filter type 
    const filterType=(category) =>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    };

    // Filter by price
    const FilterPrice =(price)=>{
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }
    return(
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={()=> filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={()=> filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={()=> filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={()=> filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=> FilterPrice('$')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={()=> FilterPrice('$$')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={()=> FilterPrice('$$$')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={()=> FilterPrice('$$$$')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4'>
                {foods.map((item, index)=> (
                    <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' key={index}>
                        <div className='h-[200px]'>
                        <img className='object-cover w-full h-full rounded-t-lg' src={item.image} alt={item.name} />
                        </div>
                        <div className='flex justify-between px-2 py-4'>
                        <p className='font-vold'>{item.name}</p>
                        <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food;