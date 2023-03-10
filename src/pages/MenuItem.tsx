import React from 'react';

interface IPropsMenuItem {
    photo: any
    name: string
    price: string
}

const MenuItem: React.FC<IPropsMenuItem> = ({photo, name, price}) => {
    return (
        <div className='w-[300px] rounded-[10px] h-[240px]'>
            <img src={photo} alt=""/>
            <h2 className='text-center text-2xl text-black'>{name}</h2>
            <h3 className='text-center text-2xl text-black text-bold'>{price}$</h3>
        </div>
    );
};

export default MenuItem;