import "./mobilemenu.scss";
import 'animate.css';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileMenu = ({isOpen, onClick}) => {
    const currentPath = usePathname();

    const pages = [
        {name: "Girls", path: "/girls"},
        {name: "Boys", path: "/boys"},
        {name: "Accesories", path: "/accesories"},
    ];

    const isActive = (path) => {
        return currentPath === path;
    }
    

  return (
    <div className={isOpen ? "mobilemenu__container animate__animated animate__fadeIn" : "invisible"}>
        <div className="close__icon animate__animated animate__fadeIn">
            <CloseIcon  onClick={onClick}/>
        </div>
        <div className="list">
        {
            pages.map((items, index) => (
                <li key={index}>
                    <Link href={items.path}>{items.name}</Link>
                </li>
            ))
        }
        </div>
        <img src="/kids.png" alt="" />
    </div>
  )
}
