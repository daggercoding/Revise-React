
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "./Components/Button"
import Display from "./Components/Display"
import { Provider } from 'react-redux'
import Store from './Components/Store'
function App() {
  
  return (
    <>
    <Provider store={Store} >
    <Display/>
    <Button/> 
    </Provider>
    </>
  )
}

export default App
