import { useState } from "react";

const AccordionCard = ({question, answer}) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div className="mx-3 my-4 w-full">
      <div
        className="flex flex-row justify-between items-center mb-5"
        onClick={() => setIsClicked(isClicked ? false : true)}
      >

        <h2
          className={`${
            isClicked
              ? "font-montserrat leading-normal text-lg text-slate-gray-600 cursor-pointer"
              : "text-sm text-gray-700 cursor-pointer"
          }`}
        >
          {question}
        </h2>
        <h3 className="text-xl font-semibold text-gray-500 cursor-pointer transition-all">
          {isClicked ? "+" : "-"}
        </h3>
      </div>
      <hr className="text-gray-700 border-solid my-3 text-lg" />

      <p
        className={`${
          isClicked
            ? "h-0 overflow-hidden"
            : "leading-normal text-lg text-slate-gray font-montserrat h-auto mb-4 transition-all duration-300 ease-in-out"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default AccordionCard;
