import data from "./data"
export const stockLoader =  async ({params}) => {
    const symbol = params.symbol
    const stockData= data.find(element => {
        console.log(element)
        return element.symbol === symbol
    })
    return(
        
        stockData
    )
}