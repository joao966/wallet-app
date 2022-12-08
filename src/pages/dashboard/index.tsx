import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <section className="h-screen bg-bgdefault">
      <div className="px-6 py-8 text-white">
        <div className="w-full flex justify-between">
          <div className="w-2/4 flex items-center gap-4">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="profile"
            />
            <span>Jack Liar</span>
          </div>

          <div>
            <button
              type="button"
              className="rounded-full bg-white-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFF"
                  viewBox="0 0 24 24"
                  stroke-width="4.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
            </button>
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col items-center gap-y-2 py-6 text-white">
        <div className="text-[14px]">Saldo Atual da Carteira</div>
        <div className="text-[40px]">$ 5,689.10</div>
        <div className="flex">
          BTC : 0,00335 - 
            <svg
              className="h-6 w-6 pl-1 text-[green]"
              width="16"
              height="16"
              viewBox="0 0 24 24"stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
              />
              <path
                d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75"
              />
            </svg>
            <span className="text-[green] text-[12px]">+8,87%</span>
        </div>
      </div>
    </section>
  )
};

export default DashboardPage;
