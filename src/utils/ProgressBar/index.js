import React from "react";

export function ProgressBar({progress}) {
    return (
        <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={progress * 100} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: progress * 100 + "%" }} // TODO: Increase width % as elapsed time increases
                  />
                </div>
              </div>
        </div>
    )
}