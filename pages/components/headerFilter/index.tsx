import { Button } from 'primereact/button';

import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import InputSearch from "../icon";


const headerFilter = () => {
   

    return (
        <div style={{ backgroundColor: '#E0F2F1', flexDirection: 'row', padding: 14,gap:"250px", display:'flex',alignItems:'center',justifyContent: 'center'}}>

            <div  style={{display:"flex",justifyContent:"center",alignItems:"center",color: '#E0F2F1'}}>
                
                <InputSearch />
            </div>
                <div style={{ backgroundColor: '#E0F2F1',display: 'flex', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gridGap: '20px', flexDirection: 'row',padding:'8px', justifyContent: 'space-center' }}>
                <Button 
                  label="teknoloji"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px' }}/>
                  <Button 
                  label="giyim"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px' }}/>
                  <Button 
                  label="kozmetik"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px' }}/>
                  <Button 
                  label="mobilya"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px' }}/>
                  <Button 
                  label="aksesuar"   style={{ backgroundColor: '#80CBC4', color: '#349590',padding:8,width:'80px' }}/>
            </div>
        </div>


           
        
    )
}

export default headerFilter
