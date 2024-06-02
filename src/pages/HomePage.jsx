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
      title: 'Data Science Portfolio',
      about: "Data Science",
      image: "https://d33wubrfki0l68.cloudfront.net/6293cde987189703466dd59ae784f5fdff73dac8/1f2f0/en/blog/uploads/ger-inberg-1.jpg"
    },
    {
      id: 3,
      title: 'Web Devloper',
      about: "web developer" ,
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-of-the-front-end-developer-Olaolu-Olawuyi.webp"
    },
    {
      id: 4,
      title: "Motion Design Portfolio",
      about: "motion design",
      image: "https://marketplace.canva.com/EAFb6ulQkLM/2/0/1600w/canva-brand-agency-portfolio-website-in-white-black-sleek-monochrome-style-VPXYcBtq8h8.jpg"
    },
    {
      id: 5,
      title: "Photography Portfolio",
      about: "photography",
      image: "https://s.tmimgcdn.com/scr/800x500/274300/zoomin-photography-portfolio-website-template_274341-original.jpg"
    },
    {
      id: 6,
      title: "UI/UX Design Portfolio",
      about: "ui/ux",
      image: "https://s3-alpha.figma.com/hub/file/3963839778/53d9d126-1607-4baf-b2d3-d974560ac38e-cover.png"
    },
  ]

  return (
    
    <main id="home" className="flex flex-col gap-12 md:gap-16 lg:gap-20 bg-gray-100">
      <section data-aos="fade-down" className="w-full mt-24">
        <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <img
            alt="Hero Product"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
            height={600}
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
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
      <section data-aos="fade-up" className="w-full mb-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold py-10">We can provide you with</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {Templates.map(({index,title,about,image}) => (
            <div data-aos="zoom-in-right" key={index} className="group relative overflow-hidden rounded-lg">
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
                {/* <p className="text-sm">Showcasing my {about} work</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  

  );
}
