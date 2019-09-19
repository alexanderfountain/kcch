import React from "react"

const defaultState = {
  english: false,
  toggleLocale: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
  state = {
    english: false,
  }

  toggleLocale = () => {
    let english = !this.state.english
    if (typeof window !== "undefined") {
      localStorage.setItem("english", JSON.stringify(english))
    }
    this.setState({ english })
    var path = window.location.pathname
    var baseUrl = window.location.origin
    if (english) {
      if (/en\//.test(window.location.href)) {
        window.location = baseUrl
      } else {
        window.location = baseUrl + "/en" + path
      }
    } else {
      path = path.replace("/en/", "")
      window.location = baseUrl + "/" + path
    }
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    if (typeof window !== "undefined") {
      const lsEnglish = JSON.parse(localStorage.getItem("english"))
      if (lsEnglish) {
        this.setState({ english: lsEnglish })
      }
    }
  }

  render() {
    const { children } = this.props
    const { english } = this.state
    return (
      <ThemeContext.Provider
        value={{
          english,
          toggleLocale: this.toggleLocale,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
