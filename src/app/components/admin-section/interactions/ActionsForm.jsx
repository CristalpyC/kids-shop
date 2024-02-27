"use client"

import Link from "next/link";
import "./actionsStyle.scss";
import { usePathname } from "next/navigation";

export const ActionsForm = () => {
    const currentPath = usePathname();

    const pages = [
       {name: "POST", path: "/post"},
       {name: "PUT", path: "/put"},
       {name: "DELETE", path: "/delete"},
       {name: "BACK", path: "/"},
    ];

    const isActive = (path) => {
        return currentPath === path;
    }

  return (
    <div className='actions__container'>
        <ul>
            {pages.map((item, index) => (
                <Link href={item.path}>
                    <li key={index} className={isActive(pages[index].path) ? "active__link" : ""}>
                        {item.name}
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}
