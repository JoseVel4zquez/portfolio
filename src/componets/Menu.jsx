
import '../styles/Menu.css'

const toggleMenu = () => {
    const menu = document.querySelector('.menu-header')
    const hamburguerMenu = document.querySelector('.hamburguer-menu')
    menu.classList.toggle('active')
    hamburguerMenu.classList.toggle('active')
}
export default function Menu() {
  return (
    <header className="fixed w-full top-0 z-20 py-10 bg-black">
        <nav className="flex flex-row justify-around  relative">
            <div className="text-white text-3xl font-work font-bold">
                Luis <span className="text-cyan-500">Velazquez</span>
            </div>
            <div className="flex flex-col lg:flex-row menu-header absolute transition-all duration-100 ease-in-out bg-black w-full h-screen z-[999] top-10 -left-full  lg:left-0 bottom-0 lg:w-auto lg:relative lg:h-auto lg:top-0 ">
                <a href="#" className="text-white pt-5 px-5 text-center lg:pr-0 lg:pt-0 font-work font-bold">Home</a>
                <a href="#" className="text-white  pt-5 px-5 text-center lg:pr-0 lg:pt-0 lg:pl-5 font-work font-bold">About</a>
                <a href="#" className="text-white pt-5 px-5 text-center lg:pr-0 lg:pt-0  lg:pl-5 font-work font-bold">Experience</a>
                <a href="#" className="text-white  pt-5 px-5 text-center lg:pr-0 lg:pt-0 lg:pl-5 font-work font-bold" >Contact</a>
            </div>
            <div className='cursor-pointer block lg:hidden hamburguer-menu' onClick={toggleMenu}>
                <span className='block w-[35px] h-[4px] transition-all duration-75 ease-in-out rounded bg-cyan-500 my-[6px]'></span>
                <span className='block w-[35px] h-[4px] transition-all duration-75 ease-in-out rounded bg-cyan-500 my-[6px]'></span>
                <span className='block w-[35px] h-[4px] transition-all duration-75 ease-in-out rounded bg-cyan-500 my-[6px]'></span>
            </div>
        </nav>
    </header>
  )
}
