import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  function getCurrentYear(): number {
    const currentYear: number = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div>
      <h1 className="font-fancy text-5xl text-primary mt-20 mb-5 mx-auto flex flex-col justify-center gap-1">
        <span className="mx-auto">
          <Image
            src="/images/contact.svg"
            alt="Contact image"
            height={40}
            width={40}
          />
        </span>
        Get in Touch
      </h1>

      <div className={`flex md:flex-row flex-col`}>
        {/* Phone and whatsapp */}
        <h1 className="font-montserrat text-xl text-primary mt-10 mb-10 mx-auto flex flex-col justify-center gap-1">
          <span className="mx-auto">
            <Image
              src="/images/phone.png"
              alt="Phone image"
              height={45}
              width={45}
              className="invert h-8 w-auto"
            />
          </span>
          +905343689567
        </h1>
        {/* Email */}
        <h1 className="font-montserrat text-xl text-primary mt-10 mb-10 mx-auto flex flex-col justify-center gap-1">
          <span className="mx-auto">
            <Image
              src="/images/mail.png"
              alt="Email image"
              height={45}
              width={45}
              className="invert h-8 w-auto"
            />
          </span>
          anass2000271@gmail.com
        </h1>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row mx-auto gap-4">
          <Link
            href="https://www.linkedin.com/in/anas-chammem-977880296/"
            target="_blank"
          >
            <Image
              src="/images/linkedin.svg"
              alt="Email image"
              height={45}
              width={45}
              className="h-auto w-auto rounded-full cursor-pointer hover:shadow-CardExtra hover:scale-105 transition-all duration-300
              ease-linear"
            />
          </Link>
          <Link href="https://github.com/anasss777" target="_blank">
            <Image
              src="/images/github.svg"
              alt="Email image"
              height={45}
              width={45}
              className="h-auto w-auto rounded-full cursor-pointer hover:shadow-CardExtra hover:scale-105 transition-all duration-300
              ease-linear"
            />
          </Link>
        </div>
        <p className="mt-10 text-white/70 font-montserrat">
          © {getCurrentYear()} Anas Chammam
        </p>
      </div>
    </div>
  );
};

export default Contact;
