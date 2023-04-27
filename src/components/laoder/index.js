import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = ({ isLoad }) => {
  return (
    <>
      {isLoad && (
        <div
          style={{
            textAlign: "center",
            width: "100vw",
            height: "80vh",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FontAwesomeIcon icon={faSpinner} color="#000020" size="2x" spin />
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
