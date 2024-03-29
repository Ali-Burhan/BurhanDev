import Link from "next/link";
import Image from "next/image";
import GithubIcon from '../../../public/logo-github.svg'
import LinkdinIcon from '../../../public/logo-linkedin.svg'
const Emailsection = () => {
  return (
    <section className="grid relative md:grid-cols-2 my-12 py-24 gap-4">
        <div className=" blur-lg absolute md:top-1/2 md:-left-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400 to-transparent rounded-full md:h-80 md:w-80 sm:w-40 sm:h-40 z-0"></div>
      <div>
        <h5 className="text-3xl text-white font-mono font-extrabold my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] text-lg font-mono font-extrabold mb-4 max-w-md ">
          Thank you for visiting my portfolio website. I&apos;m excited to connect
          with you. Feel free to reach out for project inquiries,
          collaborations, or just to say hello. Let&apos;s bring your ideas to life!
          Contact me today.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link  href={"/"}><Image alt="Github IMG" className="bg-white rounded-full" src={GithubIcon} width={50} height={50} /></Link>
          <Link  href={"/"}><Image alt="Linkedin Image" className="bg-white " src={LinkdinIcon} width={50} height={50}/></Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <form>
          <div className="mt-3">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Ali@google.com"
              className="bg-[#18191E] border w-full border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border w-full border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium "
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Let's Talk a bit!"
              className="bg-[#18191E] border w-full border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 rounded-lg w-full mt-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Emailsection;
