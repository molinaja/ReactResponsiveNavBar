import { useState } from "react"
import logo from "../../assets"
import { HeaderItems } from "./HeaderItems";


interface NavLink {
    label: string;
    icon: string;
  }

export const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const changeStateOpen = () =>{

        //console.log( 'Visible '+ isOpen)
        setIsOpen( isOpen => !isOpen )

    }

    const navLinks:NavLink[] = [
        {label: "Home", icon: "bx bx-home"},
        {label: "Projects", icon: "bx bx-briefcase"},
        {label: "Blog", icon: "bx bx-edit"},
        {label: "Testimonials", icon: "bx bx-message-square-dots"},
        {label: "About us", icon: "bx bx-info-circle"},
        {label: "Contact us", icon: "bx bx-envelope"},
    ]

    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt=""/>
                <h1>Molinaja</h1>
            </div>
            <div className="header__icon">
                <i className='bx bx-menu' onClick={changeStateOpen }></i>
            </div>
           
            <HeaderItems onStateOpenChange={changeStateOpen} isOpen={isOpen} navLinks={navLinks}/>

        </div>
    )
}

