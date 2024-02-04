import React from "react";

function Footer() {
  function myFunction() {}
  function myFunction2() {}
  return (
    <div>
      <button onClick={myFunction}>hai</button>
      <button
        onClick={() => {
          myFunction2();
        }}
      >
        hallo
      </button>
    </div>
  );
}

export default Footer;
