import React from "react"
import { NavLink } from "react-router-dom"

import { routes } from "routes/routes"

import style from "./Header.module.scss"
import { Logo } from "assets/svg"

const Header: React.FC = () => (
   <header className={style.header}>
      <div>
         <Logo />
         <nav>
            <ul>
               {React.Children.toArray(
                  routes.map(({ path, label, isShowInNav }) => {
                     if (isShowInNav)
                        return (
                           <li>
                              <NavLink to={path}>{label}</NavLink>
                           </li>
                        )
                  }),
               )}
            </ul>
         </nav>
      </div>
   </header>
)

export default Header
