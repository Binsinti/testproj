import React from "react";

function SectionHeader({ title, className = "section-title" }) {
    return (
        <h2 className={className}>{title}</h2>
    );
}

export default SectionHeader;
