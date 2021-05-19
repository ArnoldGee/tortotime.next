import { useState } from "react";

export default function CommandInput(): JSX.Element {
  const [text, setText] = useState<string>("");

  function handleEnterPress(){
    // Do Recoil things!!

    setText("")
  }

  return (
    <div className="py-4">
      <input
        autoFocus
        type="text"
        placeholder="Type ? for help"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e?.charCode === 13 && handleEnterPress()}
        className="w-full py-3 px-2 bg-transparent border-b-2 border-stone focus:border-black placeholder-black-2 outline-none"
      />
    </div>
  );
}
