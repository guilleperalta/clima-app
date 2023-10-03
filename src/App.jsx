import AppClima from './components/AppClima'
import { ClimaProvider } from './context/ClimaProvider'

const App = () => {
  return (
    <ClimaProvider >
      <header>
        <h1>Bucador de clima</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  )
}

export default App

