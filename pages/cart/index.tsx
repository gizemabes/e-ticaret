
import Header from "../components/Header"
import Image from "next/image"
import { Button } from 'primereact/button';
import CartProduct from "../components/cartProduct"
import { InputNumber } from 'primereact/inputnumber';
import InputSearch from "../icon";

const data = [
    {
        name: 'urun',
        price: 25,
        image: '/images/urun.png',
        stokc: 333
    }
]

const Cart = () => {
   
   
    const addToCart = () => {

    }

    return(

        <div>
              <div>
            <Header/>
             </div>


             <div style={{  padding: 14, backgroundColor: '#E0F2F1'}}>

                <div style={{ padding:10, justifyContent: 'center' ,position:'relative',left:'220px'}}>
                <Image width={100} height={100} alt="logo" src='/images/sepetim.png' />
                </div>
            </div>
           
            <div style={{ backgroundColor: '#f5f5f5',padding:'1px', flexDirection: 'column',justifyContent: "space-around"}}>
            <div style={{ display: "flex", margin: 10, backgroundColor: '#fff', flexDirection: 'column', justifyContent: "center" }}>

                {
                    data.map((item, key) => {

                        return(
                            <CartProduct key={key} name={item.name} price={item.price} stock={item.stokc} image={item.image} onClick={addToCart} />
                        )
                    }
                    )
                }

            </div>
            <div style={{ backgroundColor: '#f5f5f5', gridGap: '100px',padding:180,  }}>
                <Button 
                  label="sepeti onayla"   style={{ backgroundColor: '#80CBC4', color: '#f5f5f5',padding:10,position:'relative',left:'1050px' }}/>
            </div>
            </div>

            
        </div>
        
)
       
     }

export default Cart
     
    

         
