import { motion } from "framer-motion"

interface NavLink {
    label: string;
    icon: string;
  }

interface HeaderItemsProps {

    onStateOpenChange: () => void;
    isOpen: boolean;
    navLinks: NavLink[];
}

export const HeaderItems: React.FC<HeaderItemsProps> = ({ onStateOpenChange, isOpen, navLinks }) => {

    // framer motion variant for navbar animation 
    const navbar = {
        open: () => ({
            clipPath: 'inset(100% 0% 0% 0%)',//'polygon(0 100%, 100% 100%, 100% 0, 0 0)',//inset(100% 0% 0% 0%)
            transition: {
                type: "spring",
                stiffness: 200,
                restDelta: 1,
            }
        }),
        closed: () => ({
            clipPath: 'inset(0% 0% 0% 0%)',//'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',//inset(0% 0% 0% 0%)
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        })
    }

    return (
        <motion.ul
            className="header__nav"
            animate={isOpen ? "open" : "closed"}
            variants={navbar }
        >
            {navLinks.map((link) => (
                <li
                    className="nav-item"
                    key={link.label}
                    onClick={onStateOpenChange}
                >
                    <i className={link.icon}></i>
                    {link.label}
                </li>
            ))}
        </motion.ul>


    )

}