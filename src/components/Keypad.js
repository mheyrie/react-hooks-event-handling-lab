// Code Keypad Component Here

function Keypad (){
    function handleChange(e){
        console.log(e.target.name)
    }
    return (
        <div>
            <h6>Please Enter your password</h6>
            <input 
            type="password" 
            name="Entering password..."
            onChange={handleChange}
            placeholder="Entering password..."
            />
        </div>
    )
}

export default Keypad;