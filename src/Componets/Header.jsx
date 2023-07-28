import logo from '../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import HeaderItems from './HeaderItems'
import nationalG from "../assets/Images/nationalG.png"
import { useState } from 'react'


function Header() {

    const [toggle, setToggle] = useState(false)

    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <>
            <div className='flex items-center gap-3 justify-between p-5'>
                <div className='flex  gap-8 items-center'>
                    <img className='w-[80px] md:w-[115px] object-cover' src={logo} alt="disney logo" />
                    <div className='hidden md:flex gap-8' >
                        {menu.map((item) => (
                            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
                        ))}
                    </div>   
                    <div className='flex gap-5 md:hidden' >
                        {menu.map((item, index) => index<3&&(
                            <HeaderItems key={item.name} name={''} Icon={item.icon} />
                        ))}
                        <div className='md:hidden' onClick={()=>(setToggle(!toggle))}>
                           <HeaderItems name={''} Icon={HiDotsVertical}/>
                          {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-3'>
                            {menu.map((item, index) => index<3&&(
                                <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
                            ))}
                            </div>:null} 
                        </div>
                    </div>   
                </div>
                <img src={nationalG} alt="nationalG" className='w-[90px] rounded-full' />
            </div>
            <div>


            </div>
        </>



    )
}

export default Header