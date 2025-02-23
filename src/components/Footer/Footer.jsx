import peopple from "./assets/peopple.png"
import logo from "./assets/white-logo.png"

function Footer (){

    return (
        <div>
            <div className="flex flex-col md:flex-row bg-[#E5CFB5] px-20">
                <div className='pt-10 flex-1 justify-items-center'>
                    <img className='' src={peopple} alt="peopple"/>
                    <p className="text-[#3E2723] font-bold text-center">Pangestu Riski Lestari</p>
                    <p>FrontEnd Developer</p>
                </div>
                <div className='p-4 flex-1 py-8'>
                    <p className='text-[#3E2723] font-bold text-center'>“Every time I come here, I always feel at home. The coffee is incredibly delicious, 
                        with rich flavor and an enticing aroma. The atmosphere of the café is also very cozy, 
                        perfect for relaxing or working. The friendly service makes me want to come back every 
                        time!”
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row bg-[#3E2723] px-20'>
                <div className='p-10 px-20 flex-1 justify-items-start'>
                    <img src={logo} alt="logo"/>
                    <p className="text-white pt-3">Copyright © 2024 Caffino Caffe by Pangestu <br/>All Rights Reserved
                    </p>
                </div>
                <div className='p-4 flex-1 pt-8'>
                    <p className='text-white'><span className='font-bold'>Opening Hours</span>
                        <br/>Mon-Fri: 08:00 AM - 08:00 PM 
                        <br/>Sat-Sun: 09:00 AM - 05:00 PM
                    </p>
                </div >   
                <div className='p-4 flex-1 py-8'>
                <   p className='text-white'>
                        <span className='font-bold'>Address</span>
                        <br/> 123 Sip Street, United Brewland, CO 12345, Cafeville
                        <br/> info@caffino.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;