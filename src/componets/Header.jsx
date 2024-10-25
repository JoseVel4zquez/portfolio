import Divider from './Divider'
import profileImg from '../images/profile.jpg'
import Menu from './Menu'



export default function Header() {
  return (
    <div className="bg-black w-full  pb-5 pt-28 relative ">
      <Menu/>
        <div className='px-5 lg:px-0'>
          <h1 className='text-white text-center text-3xl uppercase pb-5 lg:pb-28 font-lato font-bold'>Portfolio</h1>
          <div className="flex flex-col-reverse md:flex-row container m-auto pb-52 justify-between">
              <div className="mr-5">
                  <h2 className="text-white text-3xl font-work font-bold pb-5 text-pretty">Luis <span className="text-cyan-500">Velazquez</span> Ancona</h2>
                  <p className='text-cyan-500 text-lg font-bold font-lato pb-2'>Front-End Developer</p>
                  <hr />
                  <p className='max-w-[800px] text-white text-xl pt-5 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iusto autem natus ipsum. Repudiandae nam sunt repellat unde nostrum, atque soluta possimus temporibus quo? Tenetur tempore ipsa maiores aliquam!</p>
                  <button className='contact-me-btn'>Contact Me!</button>
              </div>
              <div className='rounded-lg relative profile-image mb-10 lg:mb-0'>
                  <img className="w-full rounded-lg " src={profileImg} alt="" />
              </div> 
          </div>
        </div>
        <Divider/>
        
        
    </div>
  )
}
