import React from "react";

function SubscribeForm() {
    return (
        <div className="mt-3">
            <input 
                type="email" 
                placeholder="Email address" 
                className="form-control mb-2"
                style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
            />
            <button className="btn w-100" style={{ backgroundColor: '#6c757d', color: 'white', fontWeight: 'bold' }}>
                SUBSCRIBE
            </button>
        </div>
    );
}

export default SubscribeForm;
