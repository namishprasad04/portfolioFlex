import React from "react";

export default function HomePage() {

  const Templates = [
    {
      id: 1,
      title: "Web Design Portfolio",
      about: "web design",
      image: "https://img.freepik.com/premium-psd/creative-weber-website-page_153148-127.jpg?size=626&ext=jpg&ga=GA1.1.1779324811.1710678715&semt=ais_user"
    },
    {
      id: 2,
      title: 'Branding Portfolio',
      about: "branding",
      image: "https://img.freepik.com/premium-vector/geometric-landing-page_32854-203.jpg?w=1380"
    },
    {
      id: 3,
      title: 'Illustration Portfolio',
      about: "illustration" ,
      image: "https://img.freepik.com/free-vector/bloggers-influencers-writing-articles-posting-content-blog-authors-using-laptops-shouting-megaphone-landing-page_74855-17672.jpg?t=st=1716558004~exp=1716561604~hmac=14e9588aea79a377e5406e3dcb009811b80a0c7ca61b8dde191f5d53a435c702&w=1380"
    },
    {
      id: 4,
      title: "Motion Design Portfolio",
      about: "motion design",
      image: "https://img.freepik.com/free-vector/motiongraphics-landing-page-with-illustrations_23-2148905913.jpg?t=st=1716558067~exp=1716561667~hmac=6e8bd8ae5033e4e1efa1a2a30c4c86ac6eb1ddf8e2f03987e91fa93df64c4954&w=1380"
    },
    {
      id: 5,
      title: "Photography Portfolio",
      about: "photography",
      image: "https://img.freepik.com/free-vector/gradient-photographer-landing-page_23-2150269012.jpg?t=st=1716558214~exp=1716561814~hmac=bae1c69a8890fa0f1b03dbf6095092586af3ecbd82a02637343849640fe3c562&w=1380"
    },
    {
      id: 6,
      title: "UI/UX Design Portfolio",
      about: "ui/ux",
      image: "https://img.freepik.com/free-psd/user-interface-design-website-template_23-2149182791.jpg?t=st=1716558337~exp=1716561937~hmac=79f5e3dc8d3b43b4d5a4df124bf08302d54474aabf3e0f2522116507dd52e140&w=1380"
    },
  ]

  return (
    
    <main data-aos="fade-right" id="home" className="flex flex-col gap-12 md:gap-16 lg:gap-20 bg-gray-100">
      <section className="w-full mt-24">
        <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <img
            alt="Hero Product"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
            height={600}
            src="https://img.freepik.com/free-photo/admin-apartment-exasperated-by-annoying-bugs-while-programming_482257-83163.jpg?t=st=1716560386~exp=1716563986~hmac=cbfb45d301911ded3893ec808053f1f9c3c03e132597581ea4962baec0ea46bf&w=1480"
            width={800}
            loading="lazy"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 mb-5">
              <h1 className="text-2xl font-bold tracking-tighter md:text-4xl xl:text-5xl/none mb-5">
                Showcase Your Portfolio in Style
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Elevate your brand and showcase your work with our modern and responsive portfolio design.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#home"
                aria-label="View Portfolio"
              >
                View Portfolio
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#contact"
                aria-label="Contact Me"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mb-20">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {Templates.map(({index,title,about,image}) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <a className="absolute inset-0 z-10" href="#home">
                <span className="sr-only">View Project</span>
              </a>
              <img
                alt={`Project ${index + 1}`}
                className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                height={300}
                src={image}
                width={400}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 group-hover:bottom-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">Showcasing my {about} work</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  

  );
}
