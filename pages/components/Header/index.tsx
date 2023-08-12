import Image from "next/image"
import {FiUser} from 'react-icons/Fi'
const Header = () => {
    return(
        <div style={{backgroundColor: 'white',display: "flex" ,flexDirection: 'row', padding: 14, justifyContent: 'space-between'}}>
            <Image width={150} height={150} alt="logo" src='/images/logo.png'/>
            <div style={{display: "flex", flexDirection: 'row', padding: 3  ,justifyContent: 'space-around', alignItems :'center'}}>
            <FiUser size={25} color={'#349590'}/>
            <a href="/login" style={{color: '#349590'}}>
                        Giriş Yap</a>
            </div>
        </div>
    )
}

export default Header