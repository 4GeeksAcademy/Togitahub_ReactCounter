import React from "react";

const StopButton = ({ onStop }) => {
    return (
        <div className="col-12 col-sm-4 col-md-3">
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger shadow" onClick={onStop}>
                    DETENER CONTADOR
                </button>
            </div>
        </div>
    );
};

export default StopButton;