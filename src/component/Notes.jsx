import React, { useState, useEffect } from "react";

function Notes() {
const [note, setNote] = useState("");

useEffect(() => {
const savedNote = localStorage.getItem("myNote");


if (savedNote) {
  setNote(savedNote);
}

}, []);

const saveNote = () => {
localStorage.setItem("myNote", note);
alert("Note saved successfully!");
};

const clearNote = () => {
localStorage.removeItem("myNote");
setNote("");
};

return ( <div className="card"> <h2>localStorage Notes Demo</h2>

  <textarea
    rows="8"
    placeholder="Write your note here..."
    value={note}
    onChange={(e) => setNote(e.target.value)}
  />

  <div className="button-group">
    <button onClick={saveNote}>
      Save Note
    </button>

    <button onClick={clearNote}>
      Clear Note
    </button>
  </div>

  <p>
    This component demonstrates localStorage.
    Your note remains saved even after
    refreshing the page.
  </p>
</div>

);
}

export default Notes;
