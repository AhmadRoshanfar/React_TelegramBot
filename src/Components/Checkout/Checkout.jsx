import React from "react";

const Checkout = () => {
  const inputRef = React.createRef();

  return (
    <div>
      <h1>Checkout</h1>
      <input type="text" name="" id="" ref={inputRef} />
      <div className="btn-container">
        <button
          style={{
            width: "100px", // Set desired width
            height: "50px", // Set desired height
            fontSize: "16px", // Adjust font size if needed
          }}
          onClick={() => console.log(inputRef.current.value)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
