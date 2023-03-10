import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addFood, newFood} from "../store/MenuSlice";
import MenuItem from "./MenuItem";
import {AppDispatch} from "../store";

const Admin: React.FC = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState<any>("")


    const dispatch = useDispatch<AppDispatch>();

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setPhoto(fileReader.result)
    }
    const handleChangePhoto = (e: React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newFood = {
            id: Date.now(),
            name,
            price: Number(price),
            photo: photo
        };
        dispatch(addFood(newFood));
        setName("");
        setPrice("");
        console.log(newFood)

    };

    return (
        <div className='bg-blue-300 py-10'>

            <h1 className='text-center text-2xl text-blue-900'>Create Product</h1>

            <form className='flex items-start justify-between px-20 py-16' onSubmit={handleSubmit}>

                <div className='flex flex-col items-start'>
                    <input type="file"
                           className='w-[135px] ml-12 mb-6'
                           onChange={handleChangePhoto}
                    />

                    <input
                        type="text"
                        placeholder='title'
                        className='border py-2 px-3 rounded w-[230px] mb-6'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder='price'
                        className='border py-2 px-3 rounded w-[230px] mb-6'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <button onClick={() => newFood}
                            type="submit"
                            className='w-[80px] py-2 px-3 bg-orange-400 rounded text-xl text-white'
                    >Create
                    </button>
                </div>

                <div>
                    {
                        photo ?
                            <MenuItem name={name} photo={photo} price={price}/>
                            :
                            <div className='w-[300px] pt-8 rounded-[10px] h-[240px] bg-gray-200'>
                                <h1 className='text-2xl text-center text-bold text-blue-800 '>place for a photo</h1>
                            </div>
                    }
                </div>
            </form>


        </div>
    );
};

export default Admin;
