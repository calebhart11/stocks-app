import {Outlet} from "react-router-dom"
import './index.css';
import Nav from "./components/Nav";

function App() {
  return (
    <div className='app'>
       <Nav/>
      <Outlet/>
    </div>
  );
}

export default App;
