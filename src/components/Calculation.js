function Calculation({props1, props2, props3,}){
   
    return (
        <form>
            <input type="number" onChange={props1}/> 
            
            <select onChange={props3}>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>

            <input type="number" onChange={props2} /> 
            
        </form>
    );
}

export default Calculation;