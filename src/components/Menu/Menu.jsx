import americano from './assets/americano.jpg'
import cappucino from './assets/cappucino.jpg'
import espresso from './assets/espresso.jpg'
import coffeeMilk from './assets/coffee milk.jpg'

function Menu(){

    return(
        <div className="p-10 sm:px-0">
            <h1 className="font-bold text-center text-3xl">Explore Our Signature Blends</h1>
            <p className="text-center font-thin py-4">Crafted with care, our coffee selections offer rich flavors and aromas to delight every <br/>coffee enthusiast. Experience the perfect brew in every sip</p>
            <div className='flex flex-col md:flex-row gap-10 flex-wrap px-20'>
                <div className='p-5 flex-1 rounded-xl border-2 border-slate-900 justify-items-center'>
                    <img src={americano} className='rounded-xl' />
                    <p className='font-bold py-3'>Americano</p>
                    <button className='border-2 border-slate-400 px-11 py-2 rounded-full text-center hover:bg-slate-900 hover:text-white'>🛒 Add cart</button>
                </div>
                <div className='p-5 flex-1 rounded-xl border-2 border-slate-900 justify-items-center'>
                    <img src={cappucino} className='rounded-xl' />
                    <p className='font-bold py-3'>Cappucino</p>
                    <button className='border-2 border-slate-400 px-11 py-2 rounded-full text-center hover:bg-slate-900 hover:text-white'>🛒 Add cart</button>
                </div>
                <div className='p-5 flex-1 rounded-xl border-2 border-slate-900 justify-items-center'>
                    <img src={espresso} className='rounded-xl' />
                    <p className='font-bold py-3'>Espresso</p>
                    <button className='border-2 border-slate-400 px-11 py-2 rounded-full text-center hover:bg-slate-900 hover:text-white'>🛒 Add cart</button>
                </div>
                <div className='p-5 flex-1 rounded-xl border-2 border-slate-900 justify-items-center'>
                    <img src={coffeeMilk} className='rounded-xl' />
                    <p className='font-bold py-3'>Coffee Milk</p>
                    <button className='border-2 border-slate-400 px-11 py-2 rounded-full text-center hover:bg-slate-900 hover:text-white'>🛒 Add cart</button>
                </div>
            </div>
        </div>
        
    )

}

export default Menu;