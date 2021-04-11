import React from "react";
import { Link } from "react-router-dom";

function IndexPage() {
    return (
        <>
            <h1 className="heading">Таблиця контенту</h1>
            <ul className="list vertical centered">
                <li>
                    <Link to="/preview">ІТ у професійній діяльності вчителя</Link>
                </li>
                <li>
                    <Link to="/stages">Етапи розвитку ІТ</Link>
                </li>
                <li>
                    <Link to="/it-competence">ІТ-компетентність</Link>
                </li>
                <li>
                    <Link to="/benefits">Переваги використання ІТ в освіті</Link>
                </li>
                <li>
                    <Link to="/shortcomings">Існуючі недоліки та проблеми застосування ІТ</Link>
                </li>
            </ul>
        </>
    );
}

export default IndexPage;