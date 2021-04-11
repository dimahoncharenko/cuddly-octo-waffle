import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <div className="header__content container">
                <div>
                    <span className="logo"></span>
                    {(location.pathname !== "/" ? (
                        <Link to="/" className="toHome">На головну</Link>
                    ) : null)}
                </div>
                <div className="student">
                    <p>Виконав студент групи 33ПОкт</p>
                    <p>Гончаренко Дмитро</p>
                </div>
            </div>
        </header>
    );
}

export default Header;