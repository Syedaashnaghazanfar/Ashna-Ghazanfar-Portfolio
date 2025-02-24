import Image from "next/image";
import Script from "next/script";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import { Post } from "@/types/post";
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiSanity } from "react-icons/si";

const HomePage = async () => {
  const posts: Post[] = await client.fetch(query); // Fetch posts using the globally defined client
  const skills = [
    { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" />, percentage: 85, color: "bg-orange-500" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" />, percentage: 75, color: "bg-black" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, percentage: 70, color: "bg-blue-600" },
    { name: "Figma to Next js", icon: <FaFigma className="text-purple-500" />, percentage: 91, color: "bg-purple-500" },
    { name: "Python", icon: <FaPython className="text-yellow-500" />, percentage: 30, color: "bg-yellow-500" },
    { name: "Sanity", icon: <SiSanity className="text-red-500" />, percentage: 90, color: "bg-red-500" },
  ];

  return (
    <>
      <Script src="/assets/js/main.js"></Script>
      {/* navbar */}
      <Navbar />
      {/* main page */}
      <div id="home">
  {/* Bubbles Animation */}
  <div className="bubbles">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="bubble" style={{ 
        '--size': `${2 + Math.random() * 4}rem`,
        '--distance': `${6 + Math.random() * 4}rem`,
        '--duration': `${2 + Math.random() * 2}s`,
        '--delay': `${-1 * (1 + Math.random() * 3)}s`
      } as React.CSSProperties}></div>
    ))}
  </div>

  {/* Hero Section */}
  <div className="relative bg-cover bg-center bg-no-repeat py-8 overflow-hidden"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/assets/img/bg-hero.jpg)",
    }}
  >
    <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {/* Animated Profile Picture */}
        <div className="relative rounded-full border-8 border-transparent ring-4 ring-white ring-opacity-30 animate-spin-slow">
        <div className="relative rotating-ring">
  <div className="rounded-full overflow-hidden shadow-xl relative z-10 border-4 border-transparent">
    <Image
      src="/assets/img/me.jpg"
      className="h-48 w-48 sm:h-56 sm:w-56 object-cover"
      alt="author"
      width={224}
      height={224}
    />
  </div>
</div>
        </div>

        <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
          {/* Typewriter Animation */}
          <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl typewriter">
            Hello I'm <span className="text-yellow-400">Ashna Ghazanfar!</span>
          </h1>

          {/* Social Icons */}
          <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-4 space-x-6">
            <a href="https://www.instagram.com/s_ashnaali/" target="_blank" rel="noopener" className="social-icon">
              <FiInstagram className="w-8 h-8 text-white hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/" target="_blank" rel="noopener" className="social-icon">
              <FiLinkedin className="w-8 h-8 text-white hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://github.com/Syedaashnaghazanfar" target="_blank" rel="noopener" className="social-icon">
              <FiGithub className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="flex flex-col justify-around items-center">
        {/* about */}
    <div className="bg-gray-50 py-16" id="about">
      <div className="container flex flex-col items-center lg:flex-row">
        {/* About Me Section */}
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="text-5xl font-bold text-primary uppercase">Meet Ashna</h2>
          <h4 className="pt-4 text-2xl font-medium text-gray-800">A Frontend Developer & Future Dermatologist</h4>
          <p className="pt-4 text-lg text-gray-600 leading-relaxed">
            Passionate about technology and medicine, I seamlessly blend my skills in frontend development with
            my medical studies. I specialize in modern web technologies like TypeScript, Next.js, and Tailwind CSS.
            Currently, I’m expanding my knowledge in backend development to create full-stack applications.
          </p>
        </div>

        {/* Skills Section */}
        <div className="w-full px-6 pt-10 sm:w-3/4 lg:w-2/5 lg:pt-0 mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {skill.icon}
                  <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{skill.percentage}%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-gray-300 relative">
                <div className={`h-3 rounded-full ${skill.color} absolute top-0 left-0`} style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        {/* Services */}
        <div className="container py-16 md:py-20" id="services">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here is what I am good at
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services I offer
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-gray-300 transition-colors duration-300">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <Image
                  src="/assets/img/web-development.png"
                  alt="development icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  WEB DEVELOPMENT
                </h3>
                <p className="text-grey pt-4 text-sm  md:text-base">
                  A passionate web developer skilled in crafting visually
                  stunning and functional websites using modern tools like
                  Next.js, TypeScript, and Figma.
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-gray-300 transition-colors duration-300">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <Image
                  src="/assets/img/initiative.png"
                  alt="content marketing icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Problem Solver
                </h3>
                <p className="text-grey pt-4 text-sm  md:text-base">
                  Thrives on tackling challenges and finding innovative
                  solutions to complex coding and design issues.
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-gray-300 transition-colors duration-300">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <Image
                  src="/assets/img/design-thinking.png"
                  alt="Mobile Application icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  CREATIVE IDEAS
                </h3>
                <p className="text-grey pt-4 text-sm  md:text-base">
                  Brings fresh, imaginative ideas to every project, blending
                  functionality with aesthetics.
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-gray-300 transition-colors duration-300">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <Image src="/assets/img/creative.png" alt="creative"   width={100}
                  height={100} />
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  MOBILE EDITOR
                </h3>
                <p className="text-grey pt-4 text-sm  md:text-base">
                  Enhancing visuals and content on the go with precision and a
                  keen eye for detail.
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-gray-300 transition-colors duration-300">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <Image src="/assets/img/biology.png" alt="Theme Design icon"   width={100}
                  height={100} />
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  BIOLOGY TEACHER
                </h3>
                <p className="text-grey pt-4 text-sm  md:text-base">
                  Shares the wonders of biology with students, combining
                  knowledge with engaging teaching techniques.
                </p>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-gray-300 transition-colors duration-300">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <Image src="/assets/img/baker.png" alt="baker icon"   width={100}
                  height={100}/>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  SELF TAUGHT BAKER
                </h3>
                <p className="text-grey pt-4 text-sm  md:text-base">
                  A dedicated baker who turns simple ingredients into delightful
                  creations, showcasing creativity and love for learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* portfolio */}
        <div className="container py-16 md:py-20" id="portfolio">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check out my Portfolio
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here is what I have done with the past
          </h3>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 px-4 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2 lg:px-8">
            <Link
              href="https://duas-diary.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <Image
                src="/assets/img/dua.png"
                className="w-full shadow"
                alt="portfolio image"
                width={500}
                height={500}

              />
            </Link>
            <Link
              href="https://syeda-coffee-website.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <Image
                src="/assets/img/coffee.png"
                className="w-full shadow"
                alt="portfolio image"
                width={500}
                height={500}
              />
            </Link>
            <Link
              href="https://syeda-ui-ux-hackhaton.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <Image
                src="/assets/img/bandage.png"
                className="w-full shadow"
                alt="portfolio image"
                width={500}
                height={500}
              />
            </Link>
            <Link
              href="https://syeda-shop-co.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <Image
                src="/assets/img/shop.png"
                className="w-full shadow"
                alt="portfolio image"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* statistics */}
        <div
          className="bg-[#bebdbd] bg-top bg-no-repeat pb-16 flex justify-center items-center md:py-16 lg:py-24"
          id="statistics"
        >
          <div className="container">
            <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
              <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    <Image
                      src="/assets/img/icon-project.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon project"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-xl font-bold text-primary sm:text-2xl md:text-4xl">
                      10
                    </h1>
                    <h4 className="text-grey-dark font-header text-sm font-medium leading-snug sm:text-base md:text-xl">
                      Finished Projects
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    <Image
                      src="/assets/img/icon-award.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon award"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-xl font-bold text-primary sm:text-2xl md:text-4xl">
                      2
                    </h1>
                    <h4 className="text-grey-dark font-header text-sm font-medium leading-snug sm:text-base md:text-xl whitespace-nowrap">
                      Hackathon Completed
                    </h4>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    <Image
                      src="/assets/img/icon-happy.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon happy clients"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-xl font-bold text-primary sm:text-2xl md:text-4xl">
                      8
                    </h1>
                    <h4 className="text-grey-dark font-header text-sm font-medium leading-snug sm:text-base md:text-xl">
                      Satisfied People
                    </h4>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    <Image
                      src="/assets/img/icon-puzzle.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon puzzle"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-xl font-bold text-primary sm:text-2xl md:text-4xl">
                      60
                    </h1>
                    <h4 className="text-grey-dark font-header text-sm font-medium leading-snug sm:text-base md:text-xl">
                      Bugs Fixed
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-around items-center">
        {/* blog */}
        <div className="bg-grey-50" id="blog">
          <div className="container py-16 md:py-20">
            {/* Section Title */}
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              I also like to write Blogs
            </h2>
            {/* Section Subtitle */}
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Check out my latest posts!
            </h4>

            {/* Blog Posts Grid */}
            <div className="mx-auto grid w-full grid-cols-1 gap-10 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-12">
              {posts.map((post) => {
                return (
                  <div
                    key={post._id}
                    className="rounded-lg overflow-hidden shadow-lg bg-white"
                  >
                    <div
                      className="relative h-48 sm:h-60 lg:h-48 xl:h-60"
                      style={{
                        backgroundImage: `url(${post?.mainImageUrl || "/default-image.jpg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span className="absolute inset-0 block bg-gradient-to-b from-black/30 to-black/50 opacity-20 transition-opacity group-hover:opacity-50"></span>
                      <Link
                        key={post.slugCurrent}
                        href={`/post/${post.slugCurrent}`}
                      >
                        <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                          Read More
                        </span>
                      </Link>
                    </div>
                    <div className="py-6 px-5">
                      <span className="block font-body text-lg font-semibold text-black">
                        {post?.title || "Untitled Post"}
                      </span>
                      <span className="block pt-2 font-body text-gray-600">
                        Click read more to read my blogs
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="container py-16 md:py-20" id="contact">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here is a contact form
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Have Any Questions?
          </h4>
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-body text-grey-10">
              Feel free to reach out! Whether you have questions, need
              assistance, or just want to connect, I’m here to help. You can
              contact me via email or phone, and I’ll get back to you as soon as
              possible. I look forward to hearing from you!
            </p>
          </div>
          <form className="mx-auto w-full pt-10 sm:w-3/4">
            <div className="flex flex-col md:flex-row">
              <input
                className="mr-3 w-full rounded border border-black px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
              <input
                className="mt-6 w-full rounded border border-black px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </div>
            <textarea
              className="mt-6 w-full rounded border border-black px-4 py-3 font-body text-black md:mt-8"
              placeholder="Message"
              name="message"
              cols={30}
              rows={10}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-6 flex items-center justify-center rounded bg-black px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
            >
              Send
              <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
            </button>
          </form>
        </div>
      </div>

      {/* footer */}
      <div className="bg-black">
        <div className="container py-6 flex justify-center">
          <p className="text-center font-body text-white">
            © Copyright 2024. All rights reserved, Ashna Ghazanfar.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
