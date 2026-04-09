import { useState } from "react"

function App() {
  const [text, setText] = useState("Ibrahim");

  function gantiNama() {
    if (text === "Ibrahim") {
      setText("Dunia");
    } else {
      setText("Ibrahim");
    }
  }

  return (
    <div>
      <h1>Hello {text}</h1>
      <button onClick={gantiNama}>
        Klik aku
      </button>
     <br />
      <button onClick={() => setText("Keren!")}>
        Jadi keren
      </button>
    </div>
  );
}

export default App;