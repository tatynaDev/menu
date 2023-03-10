import React from 'react';
import logo from '../assets/img/logo.svg'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store";


const Header = () => {

    const qO = useSelector((state: RootState) => state.menu.orders)
    const qF = useSelector((state: RootState) => state.menu.foods)

    return (
        <header id='header'>
            <div className="container bg-white py-4 px-8 flex items-center justify-between">
                <div>
                    <img src={logo} alt=""/>
                </div>

                <nav className='mr-10 flex'>

                    <div className='relative'>
                        <NavLink className='mx-4' to='/'>Menu</NavLink>
                        <span className='absolute right-[0] text-white font-bold top-[-3px] bg-orange-400 rounded-[50%] px-1 text-[10px]'>{qF.length > 0 ? qF.length : ''}</span>
                    </div>

                    <div className='relative'>
                        <NavLink className='mx-4' to='/orders'>Orders</NavLink>
                        <span className='absolute right-[0] text-white font-bold top-[-3px] bg-orange-400 rounded-[50%] px-1 text-[10px]'>{qO.length > 0 ? qO.length : ''}</span>
                    </div>


                        <NavLink className='mx-4' to='/admin'>Admin</NavLink>




                </nav>
            </div>
        </header>
    );
};

export default Header;