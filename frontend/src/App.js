import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Pocetna</Link>
          </li>
          <li>
            <Link to="/admin/unos-novog-proizvoda">Dodavanje</Link>
          </li>
          <li>
            <Link to="/admin/proizvodi">Proizvodi</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/admin/unos-novog-proizvoda">
          <AddProduct /> 
        </Route>
        <Route path="/admin/proizvodi">
          <ProductList />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
