import { Link } from "react-router-dom";
import data  from "../data"

const Stocks = (props) => {
    return(
        <div className="stocks">
            <table>
            <thead>
                            <tr>
                            <th>Company Name</th>
                            <th>Price</th>
                            <th>Change</th>
                            
                            </tr>
                            </thead>
            {data.map((stock) => {
                const {name,symbol} = stock;
                return(
                    <tr>
                            
                    <td> <Link to = {`/stocks/${symbol}`}>
                            <h2>{name}</h2></Link> </td>
                            <td><h2>{stock.lastPrice}</h2></td>
                           <td> <h2>{stock.change}</h2></td>
                                                  
                        
                        
                    
                    </tr>
                    
                )
            }
            )
            }
            </table>    
        </div>
    )
}
export default Stocks