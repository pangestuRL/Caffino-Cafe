import Img1 from "./assets/image1.jpg"
import Img2 from "./assets/image2.jpg"
import Img3 from "./assets/image3.jpg"
import Img4 from "./assets/image4.jpg"

function Contact(){

    return(
        <div className="py-20">
            <h1 className="font-bold text-center text-3xl">Follow us on <span className="text-[#E5CFB5]">Instagram</span></h1>
            <p className="text-center font-thin py-4">Stay connected with us for the latest updates, promotions, and <br/> behind-the-scenes look at our coffee creations.</p>
            <div className='flex flex-col md:flex-row flex-wrap px-20'>
                <div className='flex-1 justify-items-center'>
                    <img src={Img1}/>
                </div>
                <div className='flex-1 justify-items-center'>
                    <img src={Img2}/>
                </div>
                <div className='flex-1 justify-items-center'>
                    <img src={Img3}/>
                </div>
                <div className='flex-1 justify-items-center'>
                    <img src={Img4}/>
                </div>
            </div>
        </div>
        
    )

}

export default Contact;