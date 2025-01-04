import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-slate-300 dark:border-slate-700 dark:bg-gray-800 ">
        <div className="w-full text-center mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center mx-2 dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Cinemate™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="w-fit mx-auto my-1 md:mx-2">
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
