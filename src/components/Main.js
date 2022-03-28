import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../store/mainDataSlice";

const Main = () => {
    const [ first, setFirst ] = useState('');
    const [ second, setSecond ] = useState('');
    const [ third, setThird ] = useState('');

    const colors = useSelector(state => state.mainData);
    console.log(colors)
    const dispatch = useDispatch();

    
    return (
        <main>


            <div style={{backgroundColor: colors?.first || 'silver'}}>
                <input onChange={(e) => setFirst(e.target.value)} type='text' placeholder="only color text" />
                <button onClick={() => dispatch(changeColor({name: 'first', data: first}))}>Chnage color</button>
            </div>

            <div style={{backgroundColor: colors?.second || 'silver'}}>
                <input onChange={(e) => setSecond(e.target.value)} type='text' placeholder="only color text" />
                <button onClick={() => dispatch(changeColor({name: 'second', data: second}))}>Chnage color</button>
            </div>

            <div style={{backgroundColor: colors?.third || 'silver'}}>
                <input onChange={(e) => setThird(e.target.value)} type='text' placeholder="only color text" />
                <button onClick={() => dispatch(changeColor({name: 'third', data: third}))}>Chnage color</button>
            </div>



        </main>
    )
} 

export default Main;