import './App.css'
import ProductList from './components/ProductList'
import UsingState from './states/UsingState'
import LifeCycle from './states/Lifecycle'
import UnmountDemo from './states/UnmountDemo'

function App() {
  

  return (
    <>
     <ProductList></ProductList>
      <UsingState></UsingState>
      <LifeCycle></LifeCycle>
      <UnmountDemo></UnmountDemo>
    </>
  )
}

export default App
