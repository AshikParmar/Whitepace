
import './App.css'
import whitepace from "./assets/whitepace.png";
import vector from "./assets/Vector.png";
import heroSection from "./assets/hero-Section.png";
import vectorR from "./assets/Right Icon.png";
import aboutUs from "./assets/About-us-banner.webp";



function App() {
 
  return (
    <div className='text-white'>
      {/* Header goes here */}
      <header className="width-full h-[92px] px-8 py-4 bg-blue text-white grid grid-cols-2 xl:grid-cols-3 gap-10 place-content-center">
        <div className='flex items-center'>
          <img src={whitepace} alt="whitepace" width={191} height={34}/>
        </div>
        
        <ul className=" hidden xl:flex items-center justify-center cursor-pointer">
          <li className='mr-10 flex gap-2 items-center'>Products <div className=' min-w-[9px] min-h-[4px]'><img src={vector} alt="vector"/></div></li>
          <li className='mr-10 flex  gap-2 items-center'>Solutions <div className='min-w-[9px] min-h-[4px]'><img src={vector} alt="vector"/></div></li>
          <li className='mr-10 flex gap-2 items-center'>Resources <div className='min-w-[9px] min-h-[4px]'><img src={vector} alt="vector"/></div></li>
          <li className='flex gap-2 items-center'>Pricing <div className='min-w-[9px] min-h-[4px]'><img src={vector} alt="vector"/></div></li>
        </ul>

        <div className='flex items-center justify-end gap-6 max-h-[60px]'>
          <button className='px-10 py-4 md:flex hidden min-w-[120px] text-black bg-yellow rounded-lg'>Login</button>
          <button className='px-6 py-4 md:flex hidden min-w-[208px] items-center gap-2 bg-blue-light rounded-lg'>Try Whitepace Free <div className='width-[10px] height-[10px]'><img src={vectorR} alt="vectorR"/></div></button>
          <div className=' block xl:hidden '>
            <a className="text-4xl" href="#">&#8801;</a>
          </div>
        </div>
      </header>
      {/* Header ends here */}

      {/* Hero Section goes here */}
      <div className='bg-blue px-8 py-20 lg:py-24 grid lg:grid-cols-2 gap-24 lg:gap-0'>
        <div className=' flex flex-col items-center'>
          <div className='mb-12 '>
            <h2 className='md:text-6xl text-4xl leading-6 font-bold mb-6 text-center lg:text-left'>Get More Done with whitepace</h2>
            <p className='text-lg leading-8 font-thin tracking-wider text-center lg:text-left'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          </div>

          <button className='bg-blue-light w-56 p-5 rounded-lg lg:self-start'>Try Whitepace free</button>
        </div>

        <div className='flex items-center' >
          <img className="" src={heroSection} alt="hero Section"/>
        </div>
      </div>
    </div>
  )
}

export default App
