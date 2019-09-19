/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import detectBrowserLanguage from "detect-browser-language"
import { ThemeProvider } from "./src/context/ThemeContext"

// class LanguageCheck extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loading: true,
//     }
//   }
// }

// export const onClientEntry = () => {
//   const detectLocale = detectBrowserLanguage()
//   const lsLocale = localStorage.getItem("locale")
//   const location = window.location.pathname
//   if (lsLocale) {
//     localStorage.setItem("locale", lsLocale)
//   }
//   if (/en*/.test(detectLocale) && /nl*/.test(location) ) {
//     // window.location = "/nl"
//     console.log(location)
//   }
//   console.log(localStorage)
// }

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
