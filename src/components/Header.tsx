import Logo from '/src/assets/logo.png'
import Samurai from '/src/assets/samurai.png'

export function Header() {
    return (
        <header className="fixed bg-cpBlack w-full h-56 flex flex-auto items-center justify-center">
            <img 
            className="w-48 h-48 select-none sm:w-24 h-auto"
            src={Logo} alt="" draggable='false' />
            <img
            className="w-auto h-72 select-none sm:w-52 h-auto"
            src={Samurai} alt="" draggable='false'/>
            <img
            className="w-48 h-48 select-none sm:w-24 h-auto"
            src={Logo} alt="" draggable='false' />
        </header>
    )
}

export default Header