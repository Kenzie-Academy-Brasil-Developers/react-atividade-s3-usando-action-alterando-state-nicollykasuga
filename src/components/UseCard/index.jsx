import { useDispatch, useSelector } from "react-redux"
import {changeName} from '../../store/modules/user/action'
import {useState} from 'react'
import './style.css'


const UserCard = () =>{
    const dispacth = useDispatch();
    const [input, setInput] = useState("");
    const Name = useSelector((state) => state.user);

    const handleClick = () => {
        if(input === ""){
            return;
        }
        dispacth(changeName(input));
        setInput("")
    }

    return(
        <div className="container">
            <h2 className="text">User name: {Name.name}</h2>
            <div className="inputContainer">
            <input className="input" placeholder="Digite aqui seu nome" value={input} onChange={(e) => setInput(e.target.value)} type="text"></input>
            <button className="button" onClick={handleClick}>Change</button>
            </div>
        </div>
    )
}

export default UserCard;