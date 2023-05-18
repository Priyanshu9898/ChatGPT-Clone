import React, { useState } from "react";

const InputBox = () => {
  const [data, setData] = useState();
  const [inputFocus, setInputFocus] = useState(false);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <div className="input w-full text-center mt-20">
        <div className="input w-full text-center ">
          <input
            className={`rounded-md outline-none overflow-hidden bg-gray-600 py-3 w-[60%] px-3 text-white shadow-md border-none ${
              inputFocus ? "border-none" : ""
            }`}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            type="text"
            name="text"
            value={data}
            onChange={handleChange}
            placeholder="Send a message."
          />
          <button className="relative -left-10">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 mr-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center mt-2 opacity-70">
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts. ChatGPT May 12 Version
        </p>
      </div>
    </>
  );
};

export default InputBox;
