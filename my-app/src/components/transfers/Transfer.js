import React from 'react'
import "./Transfer.css"
import * as fa6 from "react-icons/fa6";
import br from '../../flags/BR.svg';
import cl from '../../flags/CL.svg';
import co from '../../flags/CO.svg';
import gt from '../../flags/GT.svg';
import kh from '../../flags/KH.svg';
import mx from '../../flags/MX.svg';
import dr from '../../flags/DO.svg';
import pa from '../../flags/PA.svg';
import pe from '../../flags/PE.svg';
import sv from '../../flags/SV.svg';
import ria from '../../img/ria.png';
import intermex from '../../img/intermex.png';


const Transfer = () => {
  return (
    <div className="transfer-container max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">
         {/* Section header */}
         <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div className='logos'>
          <img className='logos-img' src={ria}/>
          <img className='logos-img' src={intermex}/>
          </div>
         <h2 className="h2 mb-4">International Money Transfers / Envios Internacional</h2>
            <p className="text-xl text-gray-400">Fast and safe money transfers</p>
         </div>
         {/* Items */}
         <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
           {/* 1st item */}
           <div className="relative flex flex-col items-center">
           <fa6.FaBoltLightning color="black" fontSize="5em"/>
           <h4 className="h4 mb-2">Fast</h4>
           <p>Send money in seconds to your loved ones across the world.</p>
            </div>
            {/* 2nd item */}
           <div className="relative flex flex-col items-center">
           <fa6.FaLock color="black" fontSize="5em"/>
           <h4 className="h4 mb-2">Safe</h4>
           <p>Feel secure knowing we’ve sent over thousands of safe transfers.</p>
             </div>
             {/* 3rd item */}
           <div className="relative flex flex-col items-center">
           <fa6.FaMoneyBillTrendUp color="black" fontSize="5em"/>
           <h4 className="h4 mb-2">Guarantee</h4>
           <p>Enjoy our no hassle 100% satisfaction guarantee.</p>
             </div>
       </div>
       </div>
       <div className='flags'>
       <div className='flags-slide'>
        <img src={br}/>
        <img src={cl}/>
        <img src={co}/>
        <img src={dr}/>
        <img src={gt}/>
        <img src={kh}/>
        <img src={pe}/>
        <img src={mx}/>
        <img src={pa}/>
        <img src={sv}/>
        <img src={br}/>
        <img src={cl}/>
        <img src={co}/>
        <img src={dr}/>
        <img src={gt}/>
        <img src={kh}/>
        <img src={pe}/>
        <img src={mx}/>
        <img src={pa}/>
        <img src={sv}/>
       </div>
       
       </div>
    </div>
  )
}

export default Transfer