import { ModeToggle } from './ModeToggle'
import { ThemeProvider } from './ModeToggle'

function App() {

  return (
    <>
      <ThemeProvider>
        <ModeToggle/>
      </ThemeProvider>
    </>
  )
}

export default App
