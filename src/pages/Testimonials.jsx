import Testimonial from "../components/Testimonial";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The team at PortfolioFlex delivered an exceptional website that has significantly improved our online presence. Their attention to detail and creative approach were truly impressive.",
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      author: "Jane Doe",
      role: "CEO",
      company: "Acme Corp"
    },
    {
      quote: "PortfolioFlex has been an invaluable partner in our digital transformation. Their team's expertise and responsiveness have been instrumental in the success of our new website and marketing campaigns.",
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      author: "John Smith",
      role: "Marketing Director",
      company: "Globex Inc."
    },
    {
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      quote: "I was hesitant to work with a new agency, but PortfolioFlex exceeded all of my expectations. Their team's creativity and attention to detail have been instrumental in the success of our brand.",
      author: "Sarah Lee",
      role: "Brand Manager",
      company: "Stark Industries"
    },
    {
      quote: "PortfolioFLex has been a true partner in our digital marketing efforts. Their team's expertise and strategic guidance have been invaluable in helping us reach our target audience and achieve our business goals.",
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      author: "Michael Johnson",
      role: "Digital Marketing Manager",
      company: "Stark Industries"
    },
    {
      quote: "PortfolioFLex has been an invaluable partner in our digital transformation. Their team's expertise and responsiveness have been instrumental in the success of our new website and marketing campaigns.",
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      author: "Emily Davis",
      role: "Marketing Director",
      company: "Globex Inc."
    },
    {
      quote: "I was hesitant to work with a new agency, but PortfolioFlex exceeded all of my expectations. Their team's creativity and attention to detail have been instrumental in the success of our brand.",
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      author: "David Lee",
      role: "Brand Manager",
      company: "Stark Industries"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Testimonials
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Hear what our clients have to say about our services.
            </p>
          </div>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
