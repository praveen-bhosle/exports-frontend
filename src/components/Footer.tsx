const Footer = () => {
    return (
      <div className="bg-gradient-to-b from-gray-900 to-black text-gray-300 px-4 py-8 font-inter">
        {/* Links Section */}
        <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
          {/* Resources */}
          <div>
            <div className="text-xl xl:text-2xl font-semibold mb-3 text-white tracking-wide">
              Resources
            </div>
            <a href="" className="block text-sm hover:text-green-400 transition">
              Blog
            </a>
            <a
              href=""
              className="block text-sm hover:text-green-400 transition mt-2"
            >
              Customer stories
            </a>
          </div>
  
          {/* Company */}
          <div>
            <div className="text-xl font-semibold mb-3 text-white tracking-wide">
              Company
            </div>
            <a
              href="/about"
              className="block text-sm hover:text-green-400 transition"
            >
              About us
            </a>
            <a
              href=""
              className="block text-sm hover:text-green-400 transition mt-2"
            >
              Jobs
            </a>
          </div>
  
          {/* Contact */}
          <div className="col-span-2 text-sm space-y-3">
            <div className="text-xl font-semibold mb-3 text-white tracking-wide">
              Contact Us
            </div>
            <div className="flex items-center gap-2">
              <img src="/call.svg" alt="call" width={20} height={20} />
              <span>+91 7899255947</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/mail.svg" alt="mail" width={20} height={20} />
              <a
                href="mailto:guruprasadkulkarni@ykdevoutexports.com"
                className="hover:text-green-400 transition"
              >
                guruprasadkulkarni@ykdevoutexports.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <img src="/location.svg" alt="location" width={20} height={20} />
              <span>
                Rajendra Nagar, Madhubani, Purnia 854301,
                <br /> Bihar, India
              </span>
            </div>
          </div>
        </div>
  
        {/* Social Icons */}
        <div className="flex gap-4 px-4 pb-6 w-full">
          <div className="mx-auto flex gap-4">
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-800 hover:bg-blue-500 transition">
              <img src="/instagram.svg" alt="instagram" width={32} height={32} />
            </div>
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-800 hover:bg-blue-500 transition">
              <img src="/yt.svg" alt="youtube" width={36} height={36} />
            </div>
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-800 hover:bg-blue-500 transition">
              <img src="/facebook.svg" alt="facebook" width={38} height={38} />
            </div>
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-800 hover:bg-blue-500 transition">
              <a href="mailto:guruprasadkulkarni@ykdevoutexports.com?subject=MakhanaOrderQueries">
                <img src="/mail.svg" alt="mail" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} YK Devout Exports. All rights reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;
  