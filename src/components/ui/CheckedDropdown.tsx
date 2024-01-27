const CheckedDropdown = () => {
  return (
    <>
      <div className="hs-dropdown relative sm:inline-flex z-20 [--auto-close:inside]">
        <button
          id="hs-dropdown-auto-close-inside"
          type="button"
          className="hs-dropdown-toggle py-3 px-6 inline-flex items-center gap-x-4 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Filter
          <svg
            className="hs-dropdown-open:rotate-180 w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 bg-white shadow-md rounded-lg p-2  dark:bg-gray-800 dark:border dark:border-gray-700"
          aria-labelledby="hs-dropdown-auto-close-inside"
        >
         

<div className="hs-accordion-group !mt-[-12px]">

<li className="hs-accordion " id="users-accordion">
            <button
              type="button"
              className="hs-accordion-toggle  w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Users
              <svg
                className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
              <svg
                className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              id="users-accordion-child"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
              <div className="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center h-5 mt-1">
              <input
                id="hs-dropdown-item-checkbox-delete"
                name="hs-dropdown-item-checkbox-delete"
                type="checkbox"
                className="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                checked
              />
            </div>
            <label
              htmlFor="hs-dropdown-item-checkbox-delete"
              className="ms-3.5"
            >
              <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-gray-300">
                Delete
              </span>
            </label>
          </div>
          <div className="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center h-5 mt-1">
              <input
                id="hs-dropdown-item-checkbox-archive"
                name="hs-dropdown-item-checkbox-archive"
                type="checkbox"
                className="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="hs-dropdown-item-checkbox-archive"
              className="ms-3.5"
            >
              <span className="mt-1 block text-sm font-semibold text-gray-800 dark:text-gray-300">
                Archive
              </span>
            </label>

          </div>
            </div>
          </li>
</div>
          
        </div>
      </div>
    </>
  );
};

export default CheckedDropdown;
