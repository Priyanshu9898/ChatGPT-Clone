import React from "react";
import HomeBox from "./HomeBox";

const RightComponent = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1 className="text-center text-4xl font-bold">ChatGPT</h1>
      <div className="flex justify-around w-[50vw] mt-10">
        <HomeBox
          title={"Examples"}
          data1={"Explain quantum computing in simple terms"}
          data2={"Got any creative ideas for a 10 year old’s birthday?"}
          data3={"How do I make an HTTP request in Javascript?"}
        />
        <HomeBox
          title={"Capabilities"}
          data1={"Remembers what user said earlier in the conversation"}
          data2={"Allows user to provide follow-up corrections"}
          data3={"Trained to decline inappropriate requests"}
        />
        <HomeBox
          title={"Limitations"}
          data1={"May occasionally generate incorrect information"}
          data2={
            "May occasionally produce harmful instructions or biased content"
          }
          data3={"Limited knowledge of world and events after 2021"}
        />
      </div>
    </div>
  );
};

export default RightComponent;
