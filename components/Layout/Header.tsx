const Header = (): JSX.Element => {
  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </div>
          <nav className="hidden md:flex space-x-7 align-middle justify-center">
            <span className="flex items-center">About</span>
            <span className="flex items-center">Projects</span>
            <span className="flex items-center">Find me</span>
            <button className="ml-10 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Resume
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
