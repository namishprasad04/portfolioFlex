export default function Testimonial({ feedback, image, name }) {
  return (
    <div className="relative bg-slate-400 rounded-lg shadow-lg p-6 max-w-sm h-52 mx-auto mb-8 md:mb-0 md:mx-4">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <img
          className="w-20 h-20 object-cover rounded-full border-8 border-white"
          src={image}
          alt={name}
        />
      </div>
      <div className="mt-10 text-center md:text-left">
        <p className="text-white italic mb-8">"{feedback}"</p>
        <p className="text-gray-800 font-bold">{name}</p>
      </div>
    </div>
  );
}
