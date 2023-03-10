import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {Order} from "../store/MenuSlice";

const Menu = () => {

    const {foods} = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch<AppDispatch>()


    return (
        <div className='py-10 px-6 bg-blue-300'>
            <ul className='flex wrap'>{
                foods.map(food => (
                    <li key={food.id} className='w-[260px] h-[240px] py-2 px-2 bg-gray-100 rounded-[10px] mx-4'>{
                        <div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <img src={food.photo} alt=""/>
                                    <h1 className='mt-2'>{food.name}</h1>
                                    <h1>{food.price}$</h1>
                                </div>


                                <button onClick={() => {
                                    dispatch(Order(food))
                                }} className='bg-yellow-300 py-1 px-3 rounded'>{
                                    'order'
                                }</button>
                            </div>


                        </div>
                    }</li>
                ))
            }</ul>
        </div>
    );
};

export default Menu;