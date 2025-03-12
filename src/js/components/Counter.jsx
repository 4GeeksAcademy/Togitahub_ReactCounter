import React from "react";

const Counter = ({ count }) => {
    return (
        <div className="row justify-content-center py-5 bg-dark">
            <div className="col-6 text-center text-white">
                <h1>{count}</h1>
            </div>
        </div>
    );
};

export default Counter;