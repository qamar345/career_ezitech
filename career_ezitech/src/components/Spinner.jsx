import React from "react";

export const Spinner = () => {
  return (
    <>
      <div className="spinner-border text-primary" role="status" style={{color: "#3275db"}}>
        <span className="visually-hidden"></span>
      </div>
    </>
  );
};
