export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a project in mind? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
          <form action="https://getform.io/f/paoxypnb" method="POST" className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="John Doe" required type="text" name="name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="john@example.com" required type="email" name="email" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="How can we help you?" required name="message" />
            </div>
            <button className="justify-center bg-gray-900 text-white p-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
