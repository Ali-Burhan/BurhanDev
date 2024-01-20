'use client'
import { useState } from 'react';
import {TypeAnimation} from 'react-type-animation'
const Chatgpt = () => {
  const [response,setResponse] = useState()
  const [input, setInput] = useState('')
  const [loading,setLoading] = useState(false)
  const message = () => {
    setLoading(true)
    const OpenAI = require('openai')
  const openai = new OpenAI({apiKey:'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',dangerouslyAllowBrowser: true});
  
  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: input }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
    setResponse(completion.choices[0].message.content)
    setLoading(false)
  }
  
  main();
  }

  return (
<div className='-my-1'>
    <div className='my-20 text-white min-h-screen hidden md:block bg-[#181818]'>
      <h3 className='text-4xl p-5 text-center md:block hidden'>GPT</h3>
      <div className='text-center mt-5'>
      <input type='text' className='bg-[#181818] w-1/2 border p-2 rounded-lg border-yellow-500' onChange={(e)=>setInput(e.target.value)}/>
      <button className='bg-yellow-500 ml-5 p-2 hover:bg-yellow-700 rounded-lg' onClick={message}>Submit</button>
      </div>
      <p className='mt-10 text-center text-2xl px-20'>{
        loading?'Loading...':
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        response,
        1000
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: '0.8em', display: 'inline-block'}}
    />
      }</p>
    </div>
    <div className='md:hidden sm:block min-h-screen flex justify-center items-center mt-20 bg-[#181818]'>
        This will available soon in mobile device!!
        stay tuned 😉
    </div>
</div>
  )
}

export default Chatgpt