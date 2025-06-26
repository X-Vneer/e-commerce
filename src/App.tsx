import { ModalProvider } from "./contexts/modal-context"
import MyReactQueryProvider from "./lib/react-query"
import MyRouter from "./router"

function App() {
  return (
    <MyReactQueryProvider>
      <ModalProvider>
        <MyRouter />
      </ModalProvider>
    </MyReactQueryProvider>
  )
}

export default App
