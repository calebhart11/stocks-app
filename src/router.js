import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Stocks from "./pages/stocks";
import Stock from "./pages/stock";
import Home from "./pages/home";
import { stockLoader } from "./loaders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element = {<Home/>}/>
            <Route path="/stocks" element = {<Stocks/>}/>
            <Route path= "/stocks/:symbol" element = {<Stock/>} loader= {stockLoader}/>
            <Route path="/about" element = {<About/>} />
        </Route>
    )
)
export default router