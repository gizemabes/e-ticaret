import Header from "../components/Header";
import CartProduct from "../components/cartProduct";
import Image from "next/image";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

const data = [
  {
    name: "urun",
    price: 25,
    image: "/images/urun.png",
    stokc: 333,
  },
];

const wallet = () => {
  const addToCart = () => {};

  return (
    <div>
      <div>
        <Header />
      </div>

      <div style={{ padding: 6, backgroundColor: "#E0F2F1" }}>
        <div
          style={{
            padding: 10,
            justifyContent: "center",
            position: "relative",
            right: "500px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            width={50}
            height={50}
            alt="logo"
            src="/images/cuzdanlogo.png"
          />
          <Image
            style={{ padding: 19 }}
            width={100}
            height={0}
            alt="logo"
            src="/images/cuzdan.png"
          />
        </div>
      </div>

      <div
        style={{padding: 10, justifyContent: "space-around", display: "flex",flexDirection: "row",background: "#f5f5f5",}}>
        <div  style={{padding: 10, justifyContent: "center", display: "flex",flexDirection: "column",background: "#f5f5f5",}}>
           <div style={{color:'#349590',position:'relative',left:'50px'}}>
            <span>Sepetinizdeki ürünler(1)</span>
           </div> 
             <div style={{margin: 0, flexDirection: 'column', justifyContent: "center" ,backgroundColor:"#f5f5f5",width:'500px'}}>

                {
                    data.map((item, key) => {

                        return(
                            <CartProduct key={key} name={item.name} price={item.price} stock={item.stokc} image={item.image} onClick={addToCart} />
                        )
                    }
                    )
                }
              </div>
            

        </div>

       <div  style={{padding:0, display: "flex",flexDirection: "column",background: "#f5f5f5",}}>
        <div style={{color:'#349590',position:'relative',left:'50px'}}>
            <span>Bakiye bilgileri</span>
        </div> 
        <div style={{margin: 40,color:'#349590', display: "flex",flexDirection: "column",height:'200px',backgroundColor:"white",border: '300px',borderBlockColor:'#349590' }}>
            <span>toplam bakiyeniz:</span>
            <span>toplam sepet tutarınız:</span>
            <span>kalan bakiyeniz:</span>
        </div> 


       </div>
      
      </div>
      <div
     style={{padding:10, display: "flex",flexDirection: "column",background: "#f5f5f5",width:'100%',height:'500px'}}>
     <div style={{color:'#349590',position:'relative',left:'150px',padding:10}}>
     <h1 style={{ fontSize: '18px' }}>toplam harcamalarınız:</h1>
         
      </div>
      <div style={{color:'#349590',position:'relative',left:'150px',padding:10,}}>
      <h1 style={{ fontSize: '13px' }}>toplam harcamalarınız:</h1>
         
      </div>


      

      </div>
    </div>
  );
};

export default wallet;
