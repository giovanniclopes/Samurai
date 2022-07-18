import Logo from '/src/assets/logo.png'

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center mt-10">
            <div>
                <img 
                className="w-36 h-40"
                src={Logo} alt="" />
                <span></span>
            </div>
        </footer>
    )
}

export default Footer