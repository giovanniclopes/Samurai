export function Header() {
    return (
        <header className="fixed bg-cpBlack w-full h-56 flex flex-auto items-center justify-center">
            <img 
            className="w-48 h-48 select-none"
            src="src\assets\logo.png" alt="" draggable='false' />
            <img
            className="w-auto h-72 select-none"
            src="src\assets\samurai.png" alt="" draggable='false'/>
            <img
            className="w-48 h-48 select-none"
            src="src\assets\logo.png" alt="" draggable='false' />
        </header>
    )
}

export default Header