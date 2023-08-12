import Image from "next/image"
import {BsCartFill} from 'react-icons/Bs'
import { ProductProps } from "./ProductProps";

const styles = {
    cardContainer: {
        display: "flex", margin: 8, backgroundColor: 'white',flexDirection: 'column',
        boxShadow:' 2px 0px 10px rgba(0, 0, 0, 0.2)'
    },
    imageContainer: {
        padding: 6
    },
    detailsContainer: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    productInfo: {
        display: "flex" ,flexDirection: 'column',  color: '#808080'
    },
 
  };



const Product = (props: ProductProps) => {
    const {name, price, stock, image, onClick} = props

    return(
        <div style={styles.cardContainer}>
            <div style={styles.imageContainer}>
            <Image width={280} height={280} alt="logo" src={image}/>
            </div>
            <div style={{display: "flex" , flexDirection: 'row', padding:12, alignItems: 'center', justifyContent: 'space-around'}} >
                <div style={styles.productInfo}>
                    <h3>{name}</h3>
                    <span>{price}</span>
                    <small>{stock}</small>
                </div>
                <div>
                    <button onClick={onClick}>
                     <BsCartFill size={25} color={'#349590'}/>
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default Product