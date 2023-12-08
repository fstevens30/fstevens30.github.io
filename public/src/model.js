class Model {
  constructor (name) {
    this.name = name
    this.systemTheme = ''
  }

  getSystemTheme () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      print('dark')
      this.systemTheme = 'dark'
    }else {
      print('light')
      this.systemTheme = 'light'
    }
  }

  output () {
    return `<h1>${this.name}</h1>`
  }
}
