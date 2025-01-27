import Image from "next/image";
import { createClient } from "@sanity/client";
import Script from "next/script";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import { Post } from "@/types/post";
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";

const HomePage = async () => {
  const posts: Post[] = await client.fetch(query); // Fetch posts using the globally defined client

  return (
    <>
      <Script src="/assets/js/main.js"></Script>
      {/* navbar */}
      <Navbar />
      {/* main page */}
      <div>
        {/* hero */}
        <div
          className="relative bg-cover bg-center bg-no-repeat py-8"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/assets/img/bg-hero.jpg)",
          }}
        >
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

          <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="rounded-full border-8 border-white shadow-xl">
                <img
                  src="/assets/img/me.jpg"
                  className="h-48 rounded-full sm:h-56"
                  alt="author"
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                  Hello I'm Ashna Ghazanfar!
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">
                      Let's connect
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href="https://www.instagram.com/s_ashnaali/">
                    <Image
                      src="/assets/img/instagram (1).png"
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashna-ghazanfar-b268522b4/"
                    className="pl-4"
                  >
                    <Image
                      src="/assets/img/linkedin.png"
                      alt="in"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a
                    href="https://github.com/Syedaashnaghazanfar"
                    className="pl-4"
                  >
                    <Image
                      src="/assets/img/github.png"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center">
        {/* about */}
        <div className="bg-grey-50" id="about">
          <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Who am I?
              </h2>
              <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                I'm Ashna Ghazanfar, a Front End Developer & Student
              </h4>
              <p className="pt-6 font-body leading-relaxed text-grey-20">
                I am a first-year medical student with a passion for blending
                science and technology. Alongside my medical studies, I am
                enhancing my skills as a front-end developer. I have mastered
                TypeScript, HTML, CSS, Next.js, and Figma, allowing me to create
                visually stunning and functional web designs. Currently, I am
                expanding my expertise by diving into backend development,
                aiming to build well-rounded, full-stack solutions.
              </p>
              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"></div>
            </div>
            <div className="w-full px-4 pt-10 sm:w-3/4 lg:w-2/5 lg:px-6 lg:pt-0 mx-auto">
              {/* HTML & CSS */}
              <div>
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    HTML & CSS
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    85%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-300 relative">
                  <div
                    className="h-3 rounded-full bg-primary absolute top-0 left-0"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              {/* Next.js */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Next.js
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    70%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-300 relative">
                  <div
                    className="h-3 rounded-full bg-primary absolute top-0 left-0"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              {/* Typescript */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Typescript
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    98%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-300 relative">
                  <div
                    className="h-3 rounded-full bg-primary absolute top-0 left-0"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>

              {/* Figma */}
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Figma
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    91%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-300 relative">
                  <div
                    className="h-3 rounded-full bg-primary absolute top-0 left-0"
                    style={{ width: "91%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="container py-16 md:py-20" id="services">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here's what I'm good at
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services I offer
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-gray-300 transition-colors duration-300">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <img
                  src="/assets/img/web-development.png"
                  alt="development icon"
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
                <img
                  src="/assets/img/initiative.png"
                  alt="content marketing icon"
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
                <img
                  src="/assets/img/design-thinking.png"
                  alt="Mobile Application icon"
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
                <img src="/assets/img/creative.png" alt="creative" />
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
                <img src="/assets/img/biology.png" alt="Theme Design icon" />
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
                <img src="/assets/img/baker.png" alt="baker icon" />
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
            Here's what I have done with the past
          </h3>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 px-4 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2 lg:px-8">
            <a
              href="https://duas-diary.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/dua.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
            <a
              href="https://syeda-coffee-website.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/coffee.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
            <a
              href="https://syeda-ui-ux-hackhaton.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/bandage.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
            <a
              href="https://syeda-shop-co.vercel.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/shop.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
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
                    <img
                      src="/assets/img/icon-project.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon project"
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
                    <img
                      src="/assets/img/icon-award.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon award"
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
                    <img
                      src="/assets/img/icon-happy.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon happy clients"
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
                    <img
                      src="/assets/img/icon-puzzle.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon puzzle"
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
            Here's a contact form
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Have Any Questions?
          </h4>
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-body text-grey-10">
              "Feel free to reach out! Whether you have questions, need
              assistance, or just want to connect, I’m here to help. You can
              contact me via email or phone, and I’ll get back to you as soon as
              possible. I look forward to hearing from you!"
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
