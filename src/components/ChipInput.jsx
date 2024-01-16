import React, { useState, useEffect, useRef } from "react";
import Chip from "./Chip";
import { itemsArray } from "../data";

const ChipInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedChips, setSelectedChips] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [allItems, setAllItems] = useState(itemsArray);
  const [chipsWidth, setChipsWidth] = useState(0);

  const inputRef = useRef(null);
  const measureRef = useRef(null);
  const itemsRef = useRef(null);

  useEffect(() => {
    setChipsWidth(measureRef.current.offsetWidth);
  }, [selectedChips]);

  useEffect(() => {
    inputRef.current.style.paddingLeft = `${chipsWidth + 13}px`;
    itemsRef.current.style.left = `${chipsWidth + 13}px`;
  }, [chipsWidth]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChipClick = (item) => {
    setSelectedChips((chips) => [...chips, item]);
    setAllItems((items) => items.filter((i) => i.name !== item.name));
    setInputValue("");
  };

  const handleChipRemove = (removedItem) => {
    setSelectedChips((chips) => chips.filter((item) => item !== removedItem));
    setAllItems((items) => [...items, removedItem]);
  };

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-4 mr-72">
      <div className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsClicked(true)}
            onBlur={() => {
              setTimeout(() => setIsClicked(false), 200);
            }}
            placeholder="Add people"
            className="w-full p-2 border-b-2 border-blue-300 focus:text-black outline-none flex flex-wrap"
          />
          <div className="absolute -top-2 flex flex-wrap" ref={measureRef}>
            {selectedChips.map((chip) => (
              <Chip
                key={chip}
                chip={chip}
                onRemove={() => handleChipRemove(chip)}
              />
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-sm" ref={itemsRef}>
          {isClicked &&
            filteredItems.map((item) => (
              <div
                key={item.email}
                onClick={() => handleChipClick(item)}
                className="p-2 w-[450px] cursor-pointer hover:bg-gray-200"
              >
                <img src={item.avatar} alt="avatar" height={30} width={30} className="rounded-full inline-block mr-2" />
                <span className="mr-2">{item.name}</span>
                <span className="font-light text-gray-500">{item.email}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChipInput;
