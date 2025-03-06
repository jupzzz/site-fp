import React from "react";

export const Header = () => {
    return (
        <header>
            <div className="navbar bg-base-100 shadow-sm justify-center">
                <div className="navbar-start w-60">
                    <a className="btn btn-ghost text-xl">Francine Penz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Sobre</a></li>
                        <li><a>Serviços</a></li>
                        <li><a>Terapias</a></li>
                        <li><a>Áreas de Atuação</a></li>
                        <li><a>Dúvidas</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-60">
                    <a className="btn">Agendamentos</a>
                </div>
            </div>
        </header>
    )
}

