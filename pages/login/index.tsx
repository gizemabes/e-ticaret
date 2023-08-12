import Header from "../components/Header"
import Image from "next/image"
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';




const login = () => {

    return (
        <div style={{ backgroundColor: '#f5f5f5',display: "flex", flexDirection: 'column',justifyContent: 'space-around' }} >
            <div>
                <Header />
            </div>
            
            
           
            <div style={{ backgroundColor: '#E0F2F1', display: "flex", flexDirection: 'row', padding: 14, justifyContent: 'center' }}>

                 <div >
                   <Image width={500} height={400} alt="logo" src='/images/logintasarım.png' />
   
            </div>
                 <div 
                 style={{ display: "flex", flexDirection: 'column',padding:14, color: '#808080', justifyContent: 'center',alignItems:'center',}}>
                 <Image width={200} height={200} alt="logo" src='/images/paragrafsayfa.png' />
                 <p>e mail giriniz </p>
                 <input type="text" placeholder="" />
                 <p>şifre giriniz </p>
                 <input type="text" placeholder="" />

                 <Button 
                  label="giriş yap"   style={{ backgroundColor: '#80CBC4', color: 'white',padding:8, }}/>
                 </div>
                 

             </div>

             <div
             style={{backgroundColor: 'white',display: "flex" , flexDirection: 'column', padding: 110, justifyContent: 'space-around' ,font:'-moz-initial',color:'black'}}>
                <div><Image width={150} height={150} alt="logo" src='/images/logo.png'/></div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit malesuada dapibus ut pulvinar neque arcu, </p>
           <p> commodo. Pharetra nisi egestas nisi fermentum. Sollicitudin egestas senectus pellentesque enim mauris vel odio </p>
           <p>  commodo. Pellentesque orci vestibulum sed in molestie consequat. </p>
          


            </div>

            

        </div>


    )
}

export default login