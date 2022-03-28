import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { kosh, kemit, bashynan, kaalagandai } from '../store/headerDataSlice';


const Header = () => {
    const [ state, setState ] = useState(0);

    const san = useSelector(state => state.headerData.san);
    const dispatch = useDispatch();

    return (
        <header>

            <a>{ san }</a>

            <button onClick={() => dispatch(kosh())}>+</button>

            <button onClick={() => dispatch(kemit())}>-</button>

            <button onClick={() => dispatch(bashynan())}>bashynan bashta</button>

            <button onClick={() => dispatch(kaalagandai(state))}>kaalagandai</button>

            <input onChange={(e) => setState(e.target.value)} type='text' value={state} />

        </header>
    )
}

export default Header;