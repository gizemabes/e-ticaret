import Image from "next/image"
import { useState } from 'react';
import {FiUser} from 'react-icons/Fi'
import InputSearch from "../icon";



 const footerFilter = () => {
   

    return (
        <div style={{ backgroundColor: '#E0F2F1', display: "flex", flexDirection: 'row', padding:'60px', justifyContent: 'space-around', }}>

            <div style={{ display: "flex", flexDirection: 'column',padding:40, color: '#808080', justifyContent: 'space-around' }}>
                <Image width={200} height={200} alt="logo" src='/images/paragrafsayfa.png' />
                <InputSearch />
            </div>
            <div>
                <Image width={200} height={200} alt="logo" src='/images/sayfatasarım.png' />

            </div>
        </div>
        
    )
}

export default footerFilter