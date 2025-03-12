import React from "react";

const ResumeButton = ({ onResume }) => {
    return (
        <div className="col-12 col-sm-4 col-md-3 my-3 my-sm-0">
            <div className="d-flex justify-content-center">
                <button className="btn btn-success shadow" onClick={onResume}>
                    REANUDAR CONTADOR
                </button>
            </div>
        </div>
    );
};

export default ResumeButton;