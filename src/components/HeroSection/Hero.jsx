import heroCoffee from './assets/coffee-hero.png'
import trusted from './assets/trusted.png'

function Hero (){

    return (
        <div id="home" className='flex flex-col md:flex-row gap-4 bg-[#E5CFB5] px-12 items-center'>
            <div className='p-4 flex-1'>
                <h1 className="text-5xl font-bold text-[#311B0B] mb-6">
                    A cozy place to enjoy your coffee
                </h1>
                <p className="text-[#626262] mb-6 font-semibold text-[20px] text-justify">
                    Freshly brewed coffee and delicious treats, crafted with passion to brighten your day. 
                    Relax, sip, and savor the moments with us.
                </p>
                <a href="#" className="bg-[#3E2723] text-white text-[20px] py-2 px-4 rounded hover:bg-[#311B0B]">Order Now →</a>
            </div>
            <div className='p-4 flex-1 relative'>
                <img className='' src={heroCoffee} alt="Coffee cups"/>
                <img className='absolute top-0 right-2 w-[227px] h-[127px]' src={trusted} alt="" />
            </div>
        </div>
    )
}

export default Hero;