import React from "react";

const RestartButton = ({ onRestart }) => {
    return (
        <div className="col-12 col-sm-4 col-md-3">
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary shadow" onClick={onRestart}>
                    REINICIAR CONTADOR
                </button>
            </div>
        </div>
    );
};

export default RestartButton;