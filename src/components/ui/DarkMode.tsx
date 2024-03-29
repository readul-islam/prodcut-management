const DarkMode = () => {
  return (
    <>
      {/* <button
        type="button"
        className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
        data-hs-theme-click-value="dark"
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
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
      <button
        type="button"
        className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
        data-hs-theme-click-value="light"
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
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8a2 2 0 1 0 4 4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button> */}
    </>
  );
};

export default DarkMode;


// const HSThemeAppearance = {
//     init() {
//         const defaultTheme = 'default'
//         let theme = localStorage.getItem('hs_theme') || defaultTheme

//         if (document.querySelector('html').classList.contains('dark')) {
//             return this.setAppearance(theme)
//         }
//     },
//     _resetStylesOnLoad() {
//         const $resetStyles = document.createElement('style')
//         $resetStyles.innerText = `*{transition: unset !important;}`
//         $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')
//         document.head.appendChild($resetStyles)
//         return $resetStyles
//     },
//     setAppearance(theme, saveInStore = true, dispatchEvent = true) {
//         const $resetStylesEl = this._resetStylesOnLoad()

//         if (saveInStore) {
//             localStorage.setItem('hs_theme', theme)
//         }

//         if (theme === 'auto') {
//             theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
//         }

//         document.querySelector('html').classList.remove('dark')
//         document.querySelector('html').classList.remove('default')
//         document.querySelector('html').classList.remove('auto')

//         document.querySelector('html').classList.add(this.getOriginalAppearance())

//         setTimeout(() => {
//             $resetStylesEl.remove()
//         })

//         if (dispatchEvent) {
//             window.dispatchEvent(new CustomEvent('on-hs-appearance-change', {detail: theme}))
//         }
//     },
//     getAppearance() {
//         let theme = this.getOriginalAppearance()
//         if (theme === 'auto') {
//             theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
//         }
//         return theme
//     },
//     getOriginalAppearance() {
//         const defaultTheme = 'default'
//         return localStorage.getItem('hs_theme') || defaultTheme
//     }
// }
// HSThemeAppearance.init()

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//     if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
//         HSThemeAppearance.setAppearance('auto', false)
//     }
// })

// window.addEventListener('load', () => {
//     const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]')
//     const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]')

//     $clickableThemes.forEach($item => {
//         $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item))
//     })

//     $switchableThemes.forEach($item => {
//         $item.addEventListener('change', (e) => {
//             HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')
//         })

//         $item.checked = HSThemeAppearance.getAppearance() === 'dark'
//     })

//     window.addEventListener('on-hs-appearance-change', e => {
//         $switchableThemes.forEach($item => {
//             $item.checked = e.detail === 'dark'
//         })
//     })
// })