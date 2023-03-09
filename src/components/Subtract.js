import {useState} from 'react'

function Subtract(){
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    function changeFirstNumberHandler(event) {
        setFirstNumber(event.target.value);
    }

    function changeSecondHandler(event) {
        setSecondNumber(event.target.value);
    }

    const result = firstNumber - secondNumber;

    return (
        <form>
            <input type="number" onChange={changeFirstNumberHandler}/> - <input type="number" onChange={changeSecondHandler} /> = {result}
        </form>
    );
}

export default Subtract;