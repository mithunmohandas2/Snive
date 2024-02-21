import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [selected, setSelected] = useState("Home")
    const navElements = ["Home", "Services", "Contact"]
    const Navigate = useNavigate()

    return (
        <nav className="bg-slate-100 p-12 flex items-center justify-between">
            {/* Logo and company name on the left */}
            <div className="flex items-center cursor-pointer" onClick={() => Navigate('/')}>
                <img src="/images/logo.png" alt="Logo" className="h-10 mr-2" />
                <h1 className="text-gray-800 font-semibold text-5xl">Snive</h1>
            </div>

            {/* Nav elements in the middle */}
            <ul className="flex items-center rounded-full bg-white border border-gray-300 cursor-pointer">

                {navElements.map((page, index) => (

                    <li key={index} className={index === 0 ? "me-2" : index === navElements?.length - 1 ? "ms-4" : "mx-4"}>
                        <div className={selected === page ? "text-white hover:text-slate-100 bg-violet-500 rounded-full px-4 py-2" :
                            index === 0 ? "text-gray-800 hover:text-gray-600 ms-4" :
                                index === navElements?.length - 1 ? "text-gray-800 hover:text-gray-600 me-4" :
                                    "text-gray-800 hover:text-gray-600 mx-2"
                        } onClick={() => { setSelected(page); Navigate(`/${page}`) }}>{page}</div>
                    </li>

                ))}
            </ul>

            {/* Button on the right */}
            <button className="px-6 py-3 text-blue-500 border border-blue-700 rounded-full underline">Book a Demo</button>
        </nav>
    );
};

export default Navbar;
