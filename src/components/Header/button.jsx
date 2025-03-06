import React from "react";

export const Button = (text, onClick) => {
    return (
        <button className="navbar-end w-60"
            onClick={onClick}
            >
            {text}
        </button>
    )
}