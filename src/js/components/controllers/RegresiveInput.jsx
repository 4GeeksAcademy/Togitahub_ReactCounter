import React, { useState } from "react";

const RegresiveInput = ({ onSetCount }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        
        if (/^\d*$/.test(value)) {
            setInputValue(value);
        }
    };

    const handleStart = () => {
        if (inputValue) {
            onSetCount(parseInt(inputValue, 10));
        }
    };

    return (
        <div className="col-8 col-sm-4 col-md-2 mt-4 mt-sm-4 mt-md-0">
            <div className="d-flex justify-content-center">
                <input
                    className="form-control text-center p-2"
                    type="text"
                    placeholder="Regresive Number"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleStart}
                />
            </div>
        </div>
    );
};

export default RegresiveInput;