import MyReactQueryProvider from "./lib/react-query"
import MyRouter from "./router"

function App() {
  return (
    <MyReactQueryProvider>
      <MyRouter />
    </MyReactQueryProvider>
  )
}

export default App
