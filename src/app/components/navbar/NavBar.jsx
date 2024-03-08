"use client"
import "./navbar.scss";
import 'animate.css';
import MenuIcon from '@mui/icons-material/Menu';
import Cart from "./Cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import { useState } from "react";

export const NavBar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const [isOpen, setOpen] = useState(false);

  const pages = [
    {name: "Girls", path: "/girls"},
    {name: "Boys", path: "/boys"},
    {name: "Accesories", path: "/accesories"},
  ];

  const isActive = (path) => {
    return currentPath === path;
  }

  const handleMenu = () => {
    setOpen(!isOpen);
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <>
      <div className="navbar__container">
        <img className="animate__animated animate__flipInY" onClick={() => router.push("/")} src="/logo.png" alt="" />
        <ul>
            <li className={isActive(pages[0].path) ? "active__link" : ""}><Link href={pages[0].path}>Girls</Link></li>
            <li className={isActive(pages[1].path) ? "active__link" : ""}><Link href={pages[1].path}>Boys</Link></li>
            <li className={isActive(pages[2].path) ? "active__link" : ""}><Link href={pages[2].path}>Accesories</Link></li>
            <li className="cart__icon"><Cart /></li>
        </ul>
        <div onClick={handleMenu} className={isOpen ? "invisible" : "menu__icon animate__animated animate__fadeIn"}>
            <MenuIcon />
        </div>
        
    </div>
    <MobileMenu isOpen={isOpen} onClick={handleClose}/>
    </>
  )
}

//invisible
