import React from "react";

function Screen({ id, currentNumber }) {
  return (
    <div id={id} className='operation'>
      {currentNumber}
    </div>
  );
}

export default Screen;
