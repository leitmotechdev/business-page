export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Help center</h3>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="https://www.linkedin.com/company/leitmotech"  target="_blank" className="hover:underline">Linkedin</a>
              </li>
              <li className="mb-4">
                <a href="mailto:leitmotivdev@gmail.com" className="hover:underline">Email</a>
              </li>
              <li className="mb-4">
                <a href="mailto:leitmotivdev@gmail.com" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h3>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="text-center">
            <span className="block text-sm text-center text-gray-500">© 2021-2022 Leitmotech™</span>
          </div>
      </div>
    </footer>
  )
}