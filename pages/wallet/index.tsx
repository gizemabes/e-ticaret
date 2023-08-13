import Header from "../components/Header"
import Image from "next/image"


const wallet = () => {
   
    return(

        <div>
              <div>
            <Header/>
             </div>
            
             <div style={{  padding: 6, backgroundColor: '#E0F2F1',}}>

               <div style={{ padding:10, justifyContent: 'center' ,position:'relative',right:'500px',display: "flex" , flexDirection: 'row'}}>
               <Image width={50} height={50} alt="logo" src='/images/cuzdanlogo.png' />
               <Image style={{ padding:19}}
               width={100} height={0} alt="logo" src='/images/cuzdan.png' />
              
               </div>
               </div>

             

            
        </div>
        
)
       
     }

export default wallet
     