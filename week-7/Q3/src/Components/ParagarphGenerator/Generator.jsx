import { useCallback, useState } from 'react'
import './Generator.css'


export default function Generator(){
const[input,setInput] = useState('');
const TOTAL_LINES = 10;
const[para, setPara] = useState([]);
const handleClick = useCallback(() => {
    console.log('render');
    const inputWords = input.split(/\s+/);
    const generatedSentences = [];
  
    for (let i = 0; i < TOTAL_LINES; i++) {
      let sentence = '';
      for (let j = 0; j < inputWords.length; j++) {
        sentence += inputWords[Math.floor(inputWords.length * Math.random())];
        sentence += ' ';
      }
      generatedSentences.push(sentence);
    }
  
    setPara(generatedSentences);
  }, [input]);

    return (
        <>
        <div className='main'>
        <input className= 'input' type='text' value ={input} placeholder='Enter number of words' onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleClick}>Generate</button>
        {para.map((sentence,index) => (
            <div key = {index}>{sentence}</div>
        ))}
        </div>
        </>
    )
}
