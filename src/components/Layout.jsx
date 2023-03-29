import { Toaster } from "react-hot-toast";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-bgDefault text-textDefault min-h-screen relative">
        <Header />
        {children}
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default Layout;

const Footer = () => {
  return (
    <footer className="bg-white shadow flex flex-col justify-between sm:flex-row  p-4 sm:p-6 dark:bg-gray-800 absolute items-center bottom-0 w-full space-y-3">
      <div className="flex gap-4 items-center">
        <div className="flex justify-end items-center space-x-1">
          <a
            href="https://github.com/kaitakami/indicadores-economicos"
            data-tooltip-target="tooltip-github"
            className="inline-flex justify-center text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Github</span>
          </a>
          <div
            id="tooltip-github"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
          >
            Star us on GitHub
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
          &copy; 2023 Indicadores Económicos
        </p>
      </div>
      <div className="flex gap-4 px-9">
        <a
          href="https://www.kaitakami.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://avatars.githubusercontent.com/u/83680466?v=4"
            alt="kai Profile Photo"
            className="rounded-full w-12 h-12"
          />
        </a>
        <a
          href="https://github.com/PatoKuack"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://avatars.githubusercontent.com/u/73372927?v=4"
            alt="Pato Profile Photo"
            className="rounded-full w-12 h-12"
          />
        </a>
      </div>
    </footer>
  );
};
