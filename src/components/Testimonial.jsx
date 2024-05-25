export default function Testimonial({ quote, author, role, company,image }) {
  return (
    <div  data-aos="flip-right" className="flex flex-col items-start gap-3 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-50">
      <blockquote className="flex-1">
        <p className="text-gray-500 ">{quote}</p>
      </blockquote>
      <div className="flex items-center gap-4">
        <img
          alt={`${author}'s Avatar`}
          className="rounded-full"
          height={48}
          src={image}
          style={{
            aspectRatio: "48/48",
            objectFit: "cover",
          }}
          width={48}
        />
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-gray-500 ">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}
