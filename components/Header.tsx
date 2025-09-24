
import React from 'react';

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C11.1 2 10.5 3.1 11 3.5L12 2ZM13 3.5C13.5 3.1 12.9 2 12 2L13 3.5ZM11 20.5C10.5 20.9 11.1 22 12 22L11 20.5ZM12 22C12.9 22 13.5 20.9 13 20.5L12 22ZM3.5 11C3.1 10.5 2 11.1 2 12L3.5 11ZM2 12C2 12.9 3.1 13.5 3.5 13L2 12ZM20.5 13C20.9 13.5 22 12.9 22 12L20.5 13ZM22 12C22 11.1 20.9 10.5 20.5 11L22 12ZM12 5C11.4 5 11 5.4 11 6C11 6.6 11.4 7 12 7C12.6 7 13 6.6 13 6C13 5.4 12.6 5 12 5ZM12 17C11.4 17 11 17.4 11 18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18C13 17.4 12.6 17 12 17ZM6 11C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13C6.6 13 7 12.6 7 12C7 11.4 6.6 11 6 11ZM18 11C17.4 11 17 11.4 17 12C17 12.6 17.4 13 18 13C18.6 13 19 12.6 19 12C19 11.4 18.6 11 18 11Z" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="text-center space-y-2 relative">
      <SparkleIcon className="w-6 h-6 text-indigo-400 absolute -top-2 left-1/2 -translate-x-12 opacity-70 animate-pulse" />
      <SparkleIcon className="w-4 h-4 text-amber-300 absolute top-0 left-1/2 translate-x-16 opacity-80 animate-pulse delay-300" />
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-indigo-300">
        Linguistic Transformer
      </h1>
      <p className="text-indigo-300/80 text-sm md:text-base">
        Translate meaning into metaphor, phrase into poetry.
      </p>
    </header>
  );
};

export default Header;
