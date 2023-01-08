import logo from "../assets/logo.png";

import React, { useState, useEffect } from "react";

function Jajal() {
  const [itung, aturItungan] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${itung} times`;

  });


  return (
    <div>
      <p>You clicked {itung} times</p>
      <button onClick={() => aturItungan(itung + 1)}>Click me</button>
    </div>
  );
}
