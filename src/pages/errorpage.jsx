import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Page doesn&apos;t exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "30px",
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
}

export default ErrorPage;
