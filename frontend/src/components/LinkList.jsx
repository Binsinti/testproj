import React from "react";
import { Link } from "react-router-dom";

function LinkList({ links, isExternal = false }) {
    return (
        <p className="mt-3">
            {links.map((link, index) => (
                isExternal ? (
                    <a 
                        key={index}
                        href={link.url} 
                        style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: index < links.length - 1 ? '0.5rem' : '0' }}
                    >
                        {link.text}
                    </a>
                ) : (
                    <Link 
                        key={index}
                        to={link.url} 
                        style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: index < links.length - 1 ? '0.5rem' : '0' }}
                    >
                        {link.text}
                    </Link>
                )
            ))}
        </p>
    );
}

export default LinkList;
