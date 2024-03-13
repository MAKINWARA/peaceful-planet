
<script>

</script>


export default function NavBar() {


    const handleClick = () => {
        const $mobile_nav_bar = document.getElementById('mobile_nav_bar')!;
        const $mobile_nav_menu = document.getElementById('mobil_nav_menu')!;
        const $open_button_nav_bar = document.querySelectorAll('[data-name="open_button_nav_bar"]')!;
        const $close_button_nav_bar = document.getElementById('close_button_nav_bar')!;
        const $x_button_nav_bar = document.querySelectorAll('[data-name="x_button_nav_bar"]')!;

        $mobile_nav_bar.classList.toggle('hidden')
        $mobile_nav_menu.classList.toggle('h-svh')
        $open_button_nav_bar.forEach((element) => {
            element.classList.toggle('translate-x-10')
        });
        $close_button_nav_bar.classList.toggle('w-12')
        $close_button_nav_bar.classList.toggle('translate-x-0')
        $x_button_nav_bar.forEach((element, index) => {
            if (index === 0) {
                element.classList.toggle('rotate-45')
            } else {
                element.classList.toggle('-rotate-45')
            }
        });
    }


    return (

        <nav id="mobil_nav_menu" className="bg-black/85 fixed w-full max-w-[430px] top-0 z-50">
            <button onClick={handleClick} className="relative group">
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-gray-300 ring-opacity-30 duration-200 shadow-md">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div data-name="open_button_nav_bar" className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left "></div>
                        <div data-name="open_button_nav_bar" className="bg-white h-[2px] w-7 rounded transform transition-all duration-300  delay-75"></div>
                        <div data-name="open_button_nav_bar" className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  delay-150"></div>

                        <div id="close_button_nav_bar" className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0">
                            <div data-name="x_button_nav_bar" className="absolute bg-clementine-500 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"></div>
                            <div data-name="x_button_nav_bar" className="absolute bg-clementine-500 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300"></div>
                        </div>
                    </div>
                </div>
            </button>
            <div id="mobile_nav_bar" className="text-white h-full transition-all hidden origin-left animate-fade-right animate-duration-[1000ms] animate-ease-out">
                <ul className="flex flex-col justify-evenly items-center h-full uppercase">
                    <li className="hover:text-clementine-500">
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:text-clementine-500">
                        <a href="/noticias">01_Noticias</a>
                    </li>
                    <li className="hover:text-clementine-500">
                        <a href="/sobre-nosotros">02_Sobre Nosotros</a>
                    </li>
                    <li className="hover:text-clementine-500">
                        <a href="#">03_Producciones</a>
                    </li>
                    <li className="hover:text-clementine-500">
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}