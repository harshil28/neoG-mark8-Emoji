import "./styles.css";
import { useState } from "react";

var list = ["harshil", "kasak", "smit", "falak"];

export default function App() {
  const emojiDictionary = {
    "😊": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target.value);
    // setUserInput(event.target.value);

    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont know";
    }

    setMeaning(meaning);
  }

  function showEmojiMeaningHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hello Namaste</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>It means {meaning}</h2>
      <h4>Emojis We Know</h4>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => showEmojiMeaningHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
