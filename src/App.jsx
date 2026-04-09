import { useState } from "react";

function App() {
  const [text, setText] = useState("Halo");

  function ganti() {
    if (text=== "Halo") {
      setText("Hai");
    } else {
      setText("Halo")
    }
  }

  return (
    <div>
    <h1>{text}</h1>
    <button onClick={ganti}>
      ubah
    </button>
    </div>
  )
}

export default App;