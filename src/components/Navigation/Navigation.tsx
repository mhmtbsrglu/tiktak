import React from 'react'
import logo from "@assets/logo.png"
type Props = {}

function Navigation({}: Props) {
  return (
    <div className='flex justify-between items-center container my-5'>
       <div>
       <img src={logo} className='w-20 -translate-y-2' /> 
       </div> 
       <div className='flex items-center'>
        <ul  className='flex gap-5 font-semibold uppercase'>
            <li className='hover:text-primary hover:cursor-pointer' >Hakkımızda</li>
            <li className='hover:text-primary hover:cursor-pointer'>Nasıl Kullanılır</li>
            <li className='hover:text-primary hover:cursor-pointer'>Marka İşbirlikleri</li>
            <li className='hover:text-primary hover:cursor-pointer'>Bize Ulaş</li>
            <li className='hover:text-primary hover:cursor-pointer cursor-pointer'>Tiktak Neo</li>
            <li className='text-primary'>Kurumsal</li>
        </ul>
        <button className='bg-primary p-1 font-semibold px-4 text-white mx-5 rounded-full'>EN</button>
       </div>
    </div>
  )
}

export default Navigation