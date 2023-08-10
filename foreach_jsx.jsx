import React from "react";

function ForEachJSX() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      ForEachJSX
      <div>
        {arr.forEach((e) => {
          return <>{e}</>;
        })}
      </div>
    </div>
  );
}

export default ForEachJSX;
