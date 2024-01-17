'use client'
const Projecttag = ({name,onClick,isSeleced}) => {
    const buttonStyle = isSeleced?"text-white bg-yellow-500":"text-[#ABD7BE] border-black hover:borde-white"
  return (
<button onClick={()=>onClick(name)} className={`rounded-full border-2 px-6 py-2 text-xl cursor-pointer ${buttonStyle}`}>
    {name}
</button>
  )
}

export default Projecttag