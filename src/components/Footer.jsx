// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* First Section */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Join Our Newsletter</h2>
//           <p className="mb-4">
//             Subscribe to our newsletter and get the latest updates.
//           </p>
//           <form>
//             <div className="mb-2">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full p-2 rounded bg-gray-700 text-white"
//               />
//             </div>
//             <div className="mb-2">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 rounded bg-gray-700 text-white"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Second Section */}
//         <div className="flex justify-center">
//           <div className="text-left">
//             <h2 className="text-xl font-bold mb-4">Quick Links</h2>
//             <ul>
//               <li className="mb-2">
//                 <a href="#!" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#!" className="hover:underline">
//                   Blogs
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#!" className="hover:underline">
//                   FAQ's
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#!" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#!" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#!" className="hover:underline">
//                   Terms and Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Third Section */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Follow Us</h2>
//           <p className="mb-4">
//             Stay connected with us on social media for the latest updates.
//           </p>
//           <h2 className="text-xl font-bold mb-4">Address</h2>
//           <p className="mb-4">Lahore, Punjab, Pakistan.</p>
//           <h2 className="text-lg font-bold mb-4">Social Media</h2>
//           <div className="flex space-x-4">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src="/insta.jfif" alt="Instagram" className="w-8 h-8" />
//             </a>
//             <a
//               href="https://tiktok.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src="/tiktok.png" alt="TikTok" className="w-8 h-8" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src="/linkedIn.jfif" alt="LinkedIn" className="w-8 h-8" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {/* First Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Join Our Newsletter
          </h2>
          <p className="mb-4">
            Subscribe to our newsletter and get the latest updates.
          </p>
          <form>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Second Section */}
        <div className="flex justify-start md:justify-center">
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li className="mb-2">
                <a href="/faqs" className="hover:underline">
                  FAQ's
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacypolicy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Follow Us</h2>
          <p className="mb-4">
            Stay connected with us on social media for the latest updates.
          </p>
          <h2 className="text-lg md:text-xl font-bold mb-4">Address</h2>
          <p className="mb-4">Lahore, Punjab, Pakistan.</p>
          <h2 className="text-lg md:text-xl font-bold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.jfif" alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/tiktok.png" alt="TikTok" className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedIn.jfif" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
