import ProductList from './ProductList';
import Seed from "../Seed.json"
import '../styles/index.css'
import Header from "./header"

const App = () => {
  return (
      <>
        <Header/>
        <ProductList product_list={ Seed }/>
      </>
  )
}

export default App;
