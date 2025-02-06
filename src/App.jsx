
import './App.css'
import whitepace from "./assets/whitepace.png";
import vector from "./assets/Vector.png";
import heroSection from "./assets/hero-Section.png";
import vectorR from "./assets/Right Icon.png";
import aboutUs from "./assets/About-us-banner.webp";
import workTogether from "./assets/Work Together Image.png";
import element from "./assets/Element.png";



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
          <button className='px-10 py-4 md:flex hidden min-w-[120px] text-black bg-yellow font-semibold rounded-lg'>Login</button>
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
          <div className='mb-16 '>
            <h2 className=' text-4xl md:text-6xl md:leading-snug font-bold mb-8 text-center lg:text-left'>Get More Done with whitepace</h2>
            <p className='text-lg leading-8 font-thin tracking-wider text-center lg:text-left'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          </div>

          <button className='bg-blue-light text-xl  p-5 rounded-lg flex items-center gap-2 lg:self-start'>Try Whitepace free<div className='width-[10px] height-[10px]'><img src={vectorR} alt="vectorR"/></div></button>
        </div>

        <div className='flex items-center' >
          <img className="" src={heroSection} alt="hero Section"/>
        </div>
      </div>
      {/* Hero Section ends here */}

      {/* Project Management goes here */}
      <div className='md:px-8 md:py-36 px-4 py-20  bg-white text-black'>
        <div className='grid lg:grid-cols-2 gap-16 mb-20 lg:gap-0 w-full'>
          <div className=' flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl md:text-7xl md:leading-tight font-bold mb-8 text-center lg:text-left'>Project Management</h1>

            <p className='text-lg leading-6 font-thin tracking-wider mb-16 text-center lg:text-left'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>

            <button className='bg-blue-light text-white text-xl py-5 px-10 w-fit rounded-lg flex items-center gap-2 '>Get Started<div className='width-[10px] height-[10px]'><img src={vectorR} alt="vectorR"/></div></button>

          </div>
          <div className='flex justify-center'>
            <img className='' src={aboutUs} alt="AboutUs" />
          </div>
        </div>

        <div className='flex flex-col justify-between lg:flex-row-reverse w-full'>
          <div className=' flex flex-col items-center lg:items-start justify-center mb-20 lg:mb-0 lg:w-1/2'>
            <h1 className='text-4xl md:text-7xl md:leading-tight font-bold mb-8 text-center lg:text-left'>Work together</h1>

            <p className='text-lg leading-6 font-thin tracking-wider mb-16 text-center lg:text-left'>With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.</p>

            <button className='bg-blue-light text-white text-xl py-5 px-10 w-fit rounded-lg flex items-center gap-2 '>Try it now<div className='width-[10px] height-[10px]'><img src={vectorR} alt="vectorR"/></div></button>

          </div>
          <div className='flex justify-center lg:justify-start lg:w-1/2'>
            <img className='lg:w-3/4 md:w-3/5' src={workTogether} alt="Work Together" />
          </div>
        </div>
      </div>
      {/* Project Management ends here */}

      {/* Extension goes here */}
      <div className='grid bg-blue lg:grid-cols-2 gap-16 lg:gap-0 md:px-8 md:py-36 px-4 py-20'>
          <div className=' flex flex-col items-center lg:items-start'>
            <h1 className='text-4xl md:text-7xl md:leading-tight font-bold mb-8 text-center lg:text-left'>Use as Extension</h1>

            <p className='text-lg leading-6 font-thin tracking-wider mb-16 text-center lg:text-left'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>

            <button className='bg-blue-light text-white text-xl py-5 px-10 w-fit rounded-lg flex items-center gap-2 '>Let's Go<div className='width-[10px] height-[10px]'><img src={vectorR} alt="vectorR"/></div></button>

          </div>
          <div className='flex justify-center'>
            <img className='' src={aboutUs} alt="AboutUs" />
          </div>
        </div>
        {/* Extension ends here */}

        {/* customise goes here */}
        <div className='grid bg-white text-black lg:grid-cols-2 gap-16 lg:gap-0 md:px-8 md:py-36 px-4 py-20'>
          <div className='flex justify-center'>
            <img className='p-8' src={aboutUs} alt="AboutUs" />
          </div>
          <div className=' flex flex-col items-center lg:items-start '>
            <h1 className='text-4xl md:text-7xl md:leading-tight font-bold mb-8 text-center lg:text-left'>Customise it to your needs</h1>

            <p className='text-lg leading-6 font-thin tracking-wider mb-16 text-center lg:text-left'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>

            <button className='bg-blue-light text-white text-xl py-5 px-10 w-fit rounded-lg flex items-center gap-2 '>Let's Go<div className='width-[10px] height-[10px]'><img src={vectorR} alt="vectorR"/></div></button>

          </div>
          
        </div>

    </div>
  )
}

export default App
