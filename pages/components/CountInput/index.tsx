
import {GoPlusCircle} from 'react-icons/go'
import {AiOutlineMinusCircle} from 'react-icons/ai'         
const CountInput = () => {
    return(
        <div style={{borderRadius:22, height:'20%', display: 'flex', backgroundColor:'#e4e4e4', justifyContent:'center',alignItems:'center', flexDirection:'row',border:2,borderColor:'black', padding:7}}>
             
             <button>
             <AiOutlineMinusCircle color={'#000'} size={25}/>
             </button>
               
            <input type="text" style={{color:'black', width:'50px', backgroundColor:'#e4e4e4', border:10, borderRadius:8, borderColor:'#ddd'}}/>
         
         <button>
         <GoPlusCircle color={'#000'} size={25}/>
         </button>
           
        </div>
    )
}


export default CountInput