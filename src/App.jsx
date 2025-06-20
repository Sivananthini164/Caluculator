import React, { useState } from 'react';
import { FaBackspace, FaDivide, FaEquals, FaMinus, FaPlus } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import {
  PiNumberEightBold, PiNumberFiveBold, PiNumberFourBold,
  PiNumberNineBold, PiNumberOneBold, PiNumberSevenBold,
  PiNumberSixBold, PiNumberThreeBold, PiNumberTwoBold, PiNumberZeroBold
} from 'react-icons/pi';
import { TbCircleLetterCFilled, TbLetterX } from "react-icons/tb";

function App() {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = eval(input.replace('×', '*').replace('÷', '/'));
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttonData = [
    { label: <TbCircleLetterCFilled />, value: 'C' },
    { label: <FaMinus />, value: '-' },
    { label: <FaDivide />, value: '÷' },
    { label: <FaBackspace />, value: '←' },

    { label: <PiNumberSevenBold />, value: '7' },
    { label: <PiNumberEightBold />, value: '8' },
    { label: <PiNumberNineBold />, value: '9' },
    { label: <TbLetterX />, value: '×' },

    { label: <PiNumberFourBold />, value: '4' },
    { label: <PiNumberFiveBold />, value: '5' },
    { label: <PiNumberSixBold />, value: '6' },
    { label: <FaPlus />, value: '+' },

    { label: <PiNumberOneBold />, value: '1' },
    { label: <PiNumberTwoBold />, value: '2' },
    { label: <PiNumberThreeBold />, value: '3' },
    { label: <FaEquals />, value: '=' },

    { label: <PiNumberZeroBold />, value: '0', colSpan: 2 },
    { label: <GoDotFill />, value: '.' },
  ];

  return (
    <div className='w-full h-screen bg-red-900 flex justify-center items-center p-4'>
      <div className='p-4 bg-[#171314] rounded-xl w-full max-w-md'>
        <div className='w-full p-6 text-white text-4xl bg-[#171314] rounded-xl mb-4 text-right break-words min-h-[64px]'>
          {input || '0'}
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {buttonData.map((btn, i) => (
            <div
              key={i}
              onClick={() => handleInput(btn.value)}
              className={`text-white text-3xl bg-[#bf0000] rounded-2xl p-6 inset-shadow-lg inset-shadow-zinc-100 hover:scale-105 transition-all duration-150 cursor-pointer flex justify-center items-center ${
                btn.colSpan === 2 ? 'col-span-2' : ''
              } ${btn.value === '=' ? 'row-span-2' : ''}`}
            >
              {btn.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
