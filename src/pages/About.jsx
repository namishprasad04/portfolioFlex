export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-1 md:px-6 lg:grid-cols-1 lg:gap-8 xl:gap-12">
        <div className="rounded-lg bg-white p-4 shadow-lg  md:w-full">
          <h3 className="text-5xl font-semibold p-5">About Us</h3>
          <div className="mt-4 space-y-5 p-5">
            <p>
              Welcome to our portfolio showcase! We are a team of passionate
              designers and creatives who specialize in a wide range of
              disciplines, including web design, branding, illustration, motion
              design, photography, and UI/UX design.
            </p>
            <p>
              Our mission is to help our clients elevate their brands and
              showcase their work in the most visually stunning and
              user-friendly way possible. We believe that a well-crafted
              portfolio can make all the difference in attracting new
              opportunities and clients.
            </p>
            <p>
              With years of experience and a keen eye for detail, we
              meticulously craft each portfolio design to be responsive, modern,
              and tailored to our clients' unique needs and preferences. We take
              pride in our ability to translate our clients' vision into a
              digital masterpiece that truly showcases their talents.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#offer"
              >
                Learn More
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
