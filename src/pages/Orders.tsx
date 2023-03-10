import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {TfiTrash} from "react-icons/tfi";
import {removeFood} from "../store/MenuSlice";

const Orders = () => {

    const {orders} = useSelector((state: RootState) => state.menu)
    console.log(orders)

    const dispatch = useDispatch<AppDispatch>()


    return (
        <div className='py-10 px-10 bg-blue-300'>
            <ul>
                {
                    orders.map(food => (
                        <li className=' bg-gray-200 py-4 px-4 rounded-[8px] my-2'>
                            {
                                <div className='flex items-center justify-evenly '>
                                    <img width={140} src={food.photo} alt=""/>
                                    <div>
                                        <h1 className='text-black ml-2 mb-4 text-xl text-bold'>{food.name}</h1>
                                        <h2 className='ml-2 text-xl text-bold text-green'>{food.price}$</h2>
                                    </div>

                                   <div className='flex items-center w-[60px] justify-between'>
                                       <button>+</button>
                                       {food.quantity}
                                       <button>-</button>
                                   </div>

                                    <button onClick={() => dispatch(removeFood(food))}
                                        className='text-red text-xl cursor-pointer'><TfiTrash/></button>
                                </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Orders;