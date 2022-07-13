
import './App.css';
import {NavBar} from './components/navigationBar';
import {Banner} from './components/banner';
import {Banner2} from './components/banner2';
import { Schedule } from './components/schedule';
import { Item } from './components/item-burger';
import { Order } from './components/order';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Schedule/>
      <Banner2/>
      <Item/>
      <Order/>
    </div>
  );
}

export default App;
