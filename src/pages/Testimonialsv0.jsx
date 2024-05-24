import Testimonial from "../components/Testimonial";

const testimonials = [
    {
      name: 'John Doe',
      feedback: 'X Product has completely changed the way I handle my daily tasks. It is absolutely fantastic!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      name: 'Jane Smith',
      feedback: 'The best product I have ever used. Highly recommend it to everyone!',
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      name: 'Alice Johnson',
      feedback: 'Excellent product with great features. The customer support is also amazing!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
  
  ];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:h-[800px]">
        <div className="container mx-auto text-center flex flex-col gap-10">
          <h2 className="text-4xl font-bold my-10 text-gray-800">Testimonials</h2>
          <div className="flex flex-wrap justify-evenly lg:justify-center gap-10 lg:gap-0">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} name={testimonial.name} image={testimonial.image} feedback={testimonial.feedback} />
            ))}
          </div>
        </div>
      </section>
  );
}
