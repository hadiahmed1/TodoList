export const Nav = () => {
  return (
    <nav className='flex justify-between bg-blue-400 text-white py-4 rounded-t-lg'>
        <div className='logo'>
            <span className='font-bold text-white text-4xl mx-9'>Todo List</span>
        </div>
        <ul className='flex gap-8 mx-9 text-2xl'>
            <li className="hover:font-bold transition-all">Home</li>
            <li className="hover:font-bold transition-all">About</li>
        </ul>
    </nav>
)
}
