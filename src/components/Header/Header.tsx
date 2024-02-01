import { useState } from "react"
import logo from "../../assets"
import { HeaderItems } from "./HeaderItems";

interface NavLink {
    label: string;
    icon: string;
    type: string;
    index: number;
    hasSubItems: boolean;
    submenu?: [NavLink];
  }

export const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const changeStateOpen = () =>{

        //console.log( 'Visible '+ isOpen)
        setIsOpen( isOpen => !isOpen )

    }

    const navLinks:NavLink[] = [

        {label: "Home", icon: "bx bx-home", type:"main", index: 1, hasSubItems: false, },
        {label: "Projects", icon: "bx bx-briefcase", type:"main", index: 1, hasSubItems: false, },
        {label: "Blog", icon: "bx bx-edit", type:"main", index: 1, hasSubItems: false, },
        {label: "Testimonials", icon: "bx bx-message-square-dots", type:"main", index: 1, hasSubItems: false, },
        {label: "About us", icon: "bx bx-info-circle" , type:"main", index: 1, hasSubItems: false, },
        {label: "Others", icon: "bx bx-envelope" , type:"main" , index: 1, hasSubItems: true, submenu:[
            {label: "test1", icon: "bx bx-info-circle" , type:"sub1", index: 1, hasSubItems: false,}
        ], },

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

