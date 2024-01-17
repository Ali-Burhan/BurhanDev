const Tabbuttons = ({active,selectTab, children}) => {
    const buttonClasses = active?"text-white border-b border-yellow-500":"text-[#ABD7BE] "
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold cursor-pointer ${buttonClasses}`}>
        {children}
        </p>
    </button>
  )
}

export default Tabbuttons