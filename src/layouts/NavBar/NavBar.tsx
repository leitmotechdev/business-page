export const NavBar = () => {
  return (
    <header className="fixed w-full h-20 bg-white">
      <nav className="bg-white">
        <div className="flex flex-wrap h-20 items-center justify-between max-w-screen-xl px-4 mx-auto">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/images/leitmotech-logo.svg" className="h-11" alt="Leitmotech Logo" />
            </a>
            <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="#" className="text-sm block py-2 pl-3 pr-4 text-white bg-blue-500 rounded lg:bg-transparent lg:text-blue-600 lg:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="text-sm block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0">Company</a>
                </li>
                <li>
                  <a href="#" className="text-sm block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0">Marketplace</a>
                </li>
                <li>
                  <a href="#" className="text-sm block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0">Features</a>
                </li>
                <li>
                  <a href="#" className="text-sm block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0">Team</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center lg:order-2">
            <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0">Contact us</a>
          </div>
        </div>
      </nav>
    </header>
  )
};
