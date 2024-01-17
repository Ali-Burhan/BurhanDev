import Link from 'next/link'
const NotFound = () => {
  return (
    <div className=" h-screen place-content-center bg-[#181818] flex flex-col items-center justify-center text-white">
        <h1 className="font-mono text-center border-b border-yellow-400 text-5xl mb-5">
      Not Found
        </h1>
      <button className="block border border-yellow-500 p-3 text-lg font-bold rounded-lg "> <Link href={'/'}>Back To Home</Link></button>
    </div>
  );
};

export default NotFound;
