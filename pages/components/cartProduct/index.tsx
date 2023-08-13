import Image from "next/image"
import { Button } from 'primereact/button';
import { CartProps } from "./CartProps";
import { InputNumber } from 'primereact/inputnumber';
import 'primeicons/primeicons.css';
import CountInput from "../CountInput";




const CartProduct = (props:CartProps) => {
    const {name, price, stock, image} = props
    return(


     
<div style={{ backgroundColor: '#f5f5f5',padding:'10px',flexDirection: 'row',flexWrap: 'wrap', justifyContent: "space-between" }}>
         <div style={{ display: "flex", margin: 20, backgroundColor: 'white', flexDirection: 'row', justifyContent: "space-around" }}>
         <Image width={200} height={100} alt="logo" src={image}/>
         <div style={{flexDirection: 'column',color:'black',position:'relative',right:'300px' , top:'50px'}}>
         <h3>{name}</h3>
         <small>{stock}</small>
         </div>

        <div style={{ display: "flex", backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap', }}>
        
        <div style={{display:"flex" , flexDirection:'column', justifyContent:'center'}}>
        <CountInput />
         
        </div>
         
        
        </div>
    
    </div>
    
    
    
</div>

)
}

export default CartProduct