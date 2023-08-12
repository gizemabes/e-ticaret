import Image from "next/image"
import { Button } from 'primereact/button';
import { CartProps } from "./CartProps";
import { InputNumber } from 'primereact/inputnumber';
import 'primeicons/primeicons.css';




const CartProduct = (props:CartProps) => {
    const {name, price, stock, image} = props
    return(


     
<div style={{ backgroundColor: '#f5f5f5',padding:'10px',flexDirection: 'row',flexWrap: 'wrap', justifyContent: "space-between" }}>
    <div style={{ display: "flex", margin: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: "space-around" }}>
         <Image width={200} height={100} alt="logo" src={image}/>
         <div style={{flexDirection: 'column',color:'black',position:'relative',right:'300px',  }}>
         <h3>{name}</h3>
         <small>{stock}</small>
         </div>

        <div style={{ display: "flex", margin: 20, backgroundColor: '#fff', flexDirection: 'column', flexWrap: 'wrap', }}>
        
        <InputNumber   value={0} onValueChange={(e) => null} showButtons buttonLayout="horizontal" style={{ width: '2rem',color:'white',background:'#349590',display: "flex",flexDirection: 'column', }} 
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
      
         
              <div style={{color:'black' }}>  
              <span>{price}</span>
              </div>
        </div>
    
    </div>
    
    
</div>

)
}

export default CartProduct