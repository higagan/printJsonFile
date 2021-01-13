import Table from 'react-bootstrap/Table'
import {items} from './test1'


export default function PrintList() {
    

const formattedData = {};
 
items.data.map((data) => {
  const { product_id, quantity, name } = data;
 
  if (formattedData[product_id]) {
    formattedData[product_id] = {
      ...formattedData[product_id],
      quantity: formattedData[product_id].quantity + quantity,
    };
  } else {
    formattedData[product_id] = {
      product_id,
      name,
      quantity: quantity,
    };
  }
});


var a =Object.entries(formattedData)

console.log("aaaaa",a)
return(
    Object.keys(formattedData).map(key => {
      return(
        <>
         <Table striped border="2" hover >
            <tr>
         <td> Product id:{formattedData[key]["product_id"]} </td>
        <td> Quantity:{formattedData[key]["quantity"]}</td>
        <td>Name:{formattedData[key]["name"]}</td>
            </tr>
            </Table>
          </>
        );

        
     
    })
);
}