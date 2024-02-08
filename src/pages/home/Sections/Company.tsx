export const Company = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Work with us and achive your goals</h2>
            <p className="mb-8 font-light lg:text-xl">Join our team and let's achieve your goals together. At our software company, we believe in fostering an environment where every member can thrive and reach their full potential.</p>
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900e">Continuous help and consulting</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Development process with the customers</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900">Knowledge management</span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-lg">Empowerment through Collaboration: Together, we achieve greatness.</p>
          </div>
          <img className="hidden w-4/5 mb-4 rounded-lg lg:mb-0 lg:flex object-cover" src="/images/leitmotech-customers.svg" alt="leitmotech and customers" />
        </div>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img className="hidden w-4/5 w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/images/leitmotech-learning.svg" alt="leitmotech and employees" />
            <div className="text-gray-500 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">We invest in our team's potential</h2>
              <p className="mb-8 font-light lg:text-xl">We are dedicated to nurturing the potential of our team members. Through continuous investment in skill development, mentorship, and growth opportunities, we strive to elevate each individual to their fullest capabilities.</p>
              <div className="pt-8 space-y-5 border-t border-gray-200" />
              <p className="font-light lg:text-lg">Unlocking Potential, Powering Progress.</p>
            </div>
        </div>
      </div>
    </section>
  )
}