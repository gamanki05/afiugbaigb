import React from "react";

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.2s",
        cursor: "pointer"
      }}
    >
      {/* IMAGE */}
      <div style={{ width: "100%", background: "#f7f7f7" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "contain",
            display: "block",
            padding: "10px"
          }}
        />
      </div>

      {/* BOTTOM BAR (info + price) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 15px",
          borderTop: "1px solid #eee",
          background: "#fff"
        }}
      >
        {/* LEFT - title */}
        <div style={{ width: "70%", textAlign: "left" }}>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: "bold",
              color: "#333"
            }}
          >
            {product.title}
          </p>
        </div>

        {/* RIGHT - price */}
        <div
          style={{
            width: "30%",
            textAlign: "right",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#2a7"
          }}
        >
          ${product.price}
        </div>
      </div>
    </div>
  );
}