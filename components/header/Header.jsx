import React from 'react'
import MaxWidth from "../common/MaxWidth";

const Header = () => {
  return (
    <MaxWidth size="max-w-screen-md">
      <header className="py-6 px-2 sm:px-0 sm:pb-10 flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="h-8 w-8 mt-0.5 rounded-full bg-black">
          </div>
          <div>
            <div className="h1">Torto Timer</div>
            <p className="h4 hidden sm:block">The fastest time manager</p>
          </div>
        </div>
        <a href="github page" className="hidden sm:block">
          <span className="sr-only">View our Github page</span>
          <svg className="h-10 w-10 fill-current text-black hover:text-black-2">
            <defs>
              <symbol viewBox="0 0 50 50">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"
                ></path>
              </symbol>
            </defs>
          </svg>
        </a>
      </header>
    </MaxWidth>
  )
}

export default Header