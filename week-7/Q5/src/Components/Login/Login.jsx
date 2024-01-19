import { useRef } from "react"

export default function Login(){
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleInputChange = (index) => (event) => {
        const inputValue = event.target.value;
        if (inputValue.length === 1 && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }
      };
    return (
       <div>
        <h1>Login Via OTP</h1>
        <div>
            {inputRefs.map((inputRef, index) => (
                <input
                key = {index}
                type = "number"
                maxLength = "1"
                onChange = {handleInputChange(index)}
                ref = {inputRef}
                ></input>
            ))}
        </div>
        <button>Login</button>
       </div>
    )
}
/*


const handleInputChange = (index) => (event) => {
  const inputValue = event.target.value;
  if (inputValue.length === 1 && index < inputRefs.length - 1) {
    inputRefs[index + 1].current.focus();
  }
};

return (
  <div>
    <h1>Login Via OTP</h1>
  
    <button>Login</button>
  </div>
);
}
*/