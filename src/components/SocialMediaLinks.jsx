import React from "react";

function SocialMediaLinks({ alignment = "end" }) {
    return (
        <div className={`text-${alignment}`}>
            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📘</span>
            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🐦</span>
            <span style={{ fontSize: '1.5rem' }}>📷</span>
        </div>
    );
}

export default SocialMediaLinks;
