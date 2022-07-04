
export default function Header() {
  const timeElapsed = Date.now();
  const date = new Date(timeElapsed);
  return (
    <header className='w-full  py-4 text-zinc-100 flex flex-col items-center justify-center bg-cyan-700 border-b border-gray-600'>
        <h1 className="text-[40px] font-thin underline decoration-solid">Digital Planner</h1>
        <span>{`Hoje:${date.toLocaleDateString()}`}</span>
    </header>
      
  )
}