import React from "react";

import { Link } from "react-router-dom";

import { GiBrazil } from "react-icons/gi"; 

import style from './style.module.css';

export default function Nav() {
  return (
    <div className={style.header}>
        
        <div className={style.Nav}>
          <Link to="/" className={`${style.navItem} ${style.navTitle}`}>
            COVID-19 - BR
          </Link>
        </div>

      <div className={style.navHeader}>
        <Link to="/" className={`${style.navItem} ${style.navItemFirst}`}>
          Página Inicial
        </Link>
        <Link to="/brasil" className={style.navItem}>
          Brasil <GiBrazil size={18} className={style.icon} />
        </Link>
      </div>
    </div>
  );
}
