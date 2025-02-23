import coffeeImg from './assets/coffeeImg.jpg'

function About (){
    return (
        <div className='flex flex-col md:flex-row gap-4 p-10 '>
            <div className='p-10 flex-1 justify-items-center'>
                <img className='w-96' src={coffeeImg} alt="Coffee cups"/>
            </div>
            <div className='p-4 flex-1'>
                <div className='py-8'>
                    <h1 className='text-2xl font-bold pb-5'>Why Were the Best Choice</h1>
                    <h1 className='font-bold pb-3'>☕ Highlight One</h1>
                    <p className='font-thin pr-28 pb-5'>By offering a cozy ambiance, our coffee shop becomes the perfect spot for relaxation and connection.</p>
                    <h1 className='font-bold pb-3'>☕ Highlight Two</h1>
                    <p className='font-thin pr-28 pb-5'>By serving expertly crafted beverages, we ensure every cup delivers a delightful experience.</p>
                </div>
            </div>
        </div>
    )
}

export default About;