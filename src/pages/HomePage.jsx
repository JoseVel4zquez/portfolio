import Header from "../componets/Header";
import profileImg from "../images/profile.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { faWordpress, faJs, faCss3, faReact, faSass, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HomePage() {
	return (
		<section>
			<article>
				<Header />
			</article>
			<article className="container py-10 lg:py-20 flex flex-col lg:flex-row px-5 lg:px-0">
				<div className="w-full lg:w-1/2">
					<img className="w-full rounded-lg max-w-[480px] m-auto object-cover" src={profileImg} alt="" />
				</div>
				<div className="w-full lg:w-1/2">
					<h2 className="text-3xl uppercase pt-5 font-work font-bold pb-10">About Me!</h2>
					<p className="font-lato text-xl leading-7 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur nemo dolore perferendis nesciunt soluta nihil veritatis maiores optio, amet nam possimus voluptate qui facilis. Nisi neque cum est omnis!</p>
					<p className="font-lato text-xl leading-7 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur nemo dolore perferendis nesciunt soluta nihil veritatis maiores optio, amet nam possimus voluptate qui facilis. Nisi neque cum est omnis!</p>
					<p className="font-lato text-xl leading-7 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur nemo dolore perferendis nesciunt soluta nihil veritatis maiores optio, amet nam possimus voluptate qui facilis. Nisi neque cum est omnis!</p>
				</div>
			</article>
			<article className="container max-w-[1300px]">
				<h2 className="text-3xl uppercase pt-5 font-work font-bold pb-10 px-5">Experience</h2>
				<Splide aria-label="My Favorite Images" options={{ perPage: 3, gap: "1rem", arrows: false, autoWidth: true, breakpoints: { 667: { perPage: 2 }, 447: { perPage: 1 } } }}>
					<SplideSlide>
						<div className="max-w-[300px] lg:max-w-[390px] border  m-auto p-5 bg-black rounded-xl relative">
							<div className="absolute top-5 right-5">
								<FontAwesomeIcon className="text-cyan-500 text-4xl hover:text-cyan-200 transition-all duration-100 ease-linear" icon={faWordpress} />
							</div>
							<h1 className="pb-5 font-work text-2xl text-cyan-500 font-bold">Wordpress.</h1>
							<p className="pb-5 font-lato text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa fugiat repellendus cupiditate eius repellat repudiandae est dolores, excepturi labore. Eveniet, amet. Optio, nobis architecto deleniti sint error minus mollitia.</p>
							<a href="#" className="bg-cyan-500 text-white py-2 block w-full text-center rounded-md hover:bg-cyan-300 transition-all duration-100 ease-in-out hover:text-gray-800 ">
								See More!
							</a>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="max-w-[300px] lg:max-w-[390px] border  m-auto p-5 bg-black rounded-xl relative">
							<div className="absolute top-5 right-5">
								<FontAwesomeIcon className="text-cyan-500 text-4xl hover:text-cyan-200 transition-all duration-100 ease-linear" icon={faJs} />
							</div>
							<h1 className="pb-5 font-work text-2xl text-cyan-500 font-bold">Js.</h1>
							<p className="pb-5 font-lato text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa fugiat repellendus cupiditate eius repellat repudiandae est dolores, excepturi labore. Eveniet, amet. Optio, nobis architecto deleniti sint error minus mollitia.</p>
							<a href="#" className="bg-cyan-500 text-white py-2 block w-full text-center rounded-md hover:bg-cyan-300 transition-all duration-100 ease-in-out hover:text-gray-800 ">
								See More!
							</a>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="max-w-[300px] lg:max-w-[390px] border  m-auto p-5 bg-black rounded-xl relative">
							<div className="absolute top-5 right-5">
								<FontAwesomeIcon className="text-cyan-500 text-4xl hover:text-cyan-200 transition-all duration-100 ease-linear" icon={faCss3} />
							</div>
							<h1 className="pb-5 font-work text-2xl text-cyan-500 font-bold">Css.</h1>
							<p className="pb-5 font-lato text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa fugiat repellendus cupiditate eius repellat repudiandae est dolores, excepturi labore. Eveniet, amet. Optio, nobis architecto deleniti sint error minus mollitia.</p>
							<a href="#" className="bg-cyan-500 text-white py-2 block w-full text-center rounded-md hover:bg-cyan-300 transition-all duration-100 ease-in-out hover:text-gray-800 ">
								See More!
							</a>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="max-w-[300px] lg:max-w-[390px] border  m-auto p-5 bg-black rounded-xl relative">
							<div className="absolute top-5 right-5">
								<FontAwesomeIcon className="text-cyan-500 text-4xl hover:text-cyan-200 transition-all duration-100 ease-linear" icon={faReact} />
							</div>
							<h1 className="pb-5 font-work text-2xl text-cyan-500 font-bold">React.</h1>
							<p className="pb-5 font-lato text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa fugiat repellendus cupiditate eius repellat repudiandae est dolores, excepturi labore. Eveniet, amet. Optio, nobis architecto deleniti sint error minus mollitia.</p>
							<a href="#" className="bg-cyan-500 text-white py-2 block w-full text-center rounded-md hover:bg-cyan-300 transition-all duration-100 ease-in-out hover:text-gray-800 ">
								See More!
							</a>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="max-w-[300px] lg:max-w-[390px] border  m-auto p-5 bg-black rounded-xl relative">
							<div className="absolute top-5 right-5">
								<FontAwesomeIcon className="text-cyan-500 text-4xl hover:text-cyan-200 transition-all duration-100 ease-linear" icon={faHtml5} />
							</div>
							<h1 className="pb-5 font-work text-2xl text-cyan-500 font-bold">HTML.</h1>
							<p className="pb-5 font-lato text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa fugiat repellendus cupiditate eius repellat repudiandae est dolores, excepturi labore. Eveniet, amet. Optio, nobis architecto deleniti sint error minus mollitia.</p>
							<a href="#" className="bg-cyan-500 text-white py-2 block w-full text-center rounded-md hover:bg-cyan-300 transition-all duration-100 ease-in-out hover:text-gray-800 ">
								See More!
							</a>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="max-w-[300px] lg:max-w-[390px] border  m-auto p-5 bg-black rounded-xl relative">
							<div className="absolute top-5 right-5">
								<FontAwesomeIcon className="text-cyan-500 text-4xl hover:text-cyan-200 transition-all duration-100 ease-linear" icon={faSass} />
							</div>
							<h1 className="pb-5 font-work text-2xl text-cyan-500 font-bold">Sass.</h1>
							<p className="pb-5 font-lato text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa fugiat repellendus cupiditate eius repellat repudiandae est dolores, excepturi labore. Eveniet, amet. Optio, nobis architecto deleniti sint error minus mollitia.</p>
							<a href="#" className="bg-cyan-500 text-white py-2 block w-full text-center rounded-md hover:bg-cyan-300 transition-all duration-100 ease-in-out hover:text-gray-800 ">
								See More!
							</a>
						</div>
					</SplideSlide>
				</Splide>
        <div className="pt-20 flex flex-col lg:flex-row justify-around px-5 lg:px-0">
          <div className="w-full lg:w-1/2 ">
            <div className="p-5 bg-gray-100  shadow-xl lg:mr-5 rounded-lg inline-block">
              <h3 className="text-2xl font-work font-bold pb-5">Proyects</h3>
              <hr  />
              <ul>
                <li className="font-lato text-lg pb-5 pt-5">
                &bull;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                </li>
                <li className="font-lato text-lg pb-5">
                &bull;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                </li>
                <li className="font-lato text-lg pb-5">
                &bull;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                </li>
                <li className="font-lato text-lg pb-5">
                &bull;
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
           <div className="p-5 bg-gray-100  shadow-xl rounded-lg mt-5 lg:mt-0">
              <h3 className="text-2xl font-work font-bold pb-5">Goals</h3>
              <hr />
                <ul className="pt-5">
                  <li className="font-lato text-lg pb-5">
                    &bull;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                  </li>
                  <li className="font-lato text-lg pb-5">
                  &bull;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                  </li>
                  <li className="font-lato text-lg pb-5">
                  &bull;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                  </li>
                  <li className="font-lato text-lg pb-5">
                  &bull;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                  </li>
                  <li className="font-lato text-lg pb-5">
                  &bull;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                  </li>
                  <li className="font-lato text-lg pb-5">
                  &bull;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nisi numquam molestiae facilis necessitatibus ut hic fugiat eveniet aut ad excepturi aspernatur, delectus possimus commodi recusandae impedit cupiditate quidem officiis!
                  </li>
                </ul>
           </div>
          </div>
        </div>
			</article>
		</section>
	);
}
