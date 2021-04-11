import React from "react";

type Props = {
    children: React.ReactElement
}

function Container({ children }: Props) {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default Container;