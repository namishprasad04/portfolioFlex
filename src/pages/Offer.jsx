import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoCameraOutline, IoCodeOutline } from "react-icons/io5";

export default function Offer() {
  return (
    <>
      <section
        id="offer"
        className="w-full py-20 md:py-24 lg:py-32 bg-gray-100 "
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a wide range of services to help your business succeed.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-start gap-3 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-50">
                <HiOutlinePaintBrush className="h-8 w-8 text-gray-900 " />
                <h3 className="text-lg font-bold">Web Design</h3>
                <p className="text-gray-500 ">
                  Our team of experienced designers will create a stunning
                  website that reflects your brand and captivates your audience.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 ">
                <IoCameraOutline className="h-8 w-8 text-gray-900 " />
                <h3 className="text-lg font-bold">Branding</h3>
                <p className="text-gray-500 ">
                  We'll help you create a strong and consistent brand identity
                  that sets you apart from the competition.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 ">
                <IoCodeOutline className="h-8 w-8 text-gray-900 " />
                <h3 className="text-lg font-bold">Digital Marketing</h3>
                <p className="text-gray-500 ">
                  Our digital marketing experts will help you reach your target
                  audience and drive more traffic to your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
