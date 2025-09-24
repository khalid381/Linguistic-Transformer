
import React from 'react';

interface OutputDisplayProps {
  text: string;
  isLoading: boolean;
}

const LoadingSkeleton: React.FC = () => (
    <div className="space-y-3 animate-pulse">
        <div className="h-4 bg-stone-700 rounded w-3/4"></div>
        <div className="h-4 bg-stone-700 rounded w-full"></div>
        <div className="h-4 bg-stone-700 rounded w-5/6"></div>
    </div>
);


const OutputDisplay: React.FC<OutputDisplayProps> = ({ text, isLoading }) => {
  return (
    <div>
        <label className="block text-sm font-medium text-indigo-300 mb-2">
            Transformed Essence
        </label>
        <div className="min-h-[120px] bg-stone-800/30 border border-dashed border-stone-700 rounded-lg p-4 transition-all duration-300">
        {isLoading ? (
            <LoadingSkeleton />
        ) : text ? (
            <p className="text-stone-100 font-serif italic text-lg leading-relaxed">{text}</p>
        ) : (
            <div className="flex items-center justify-center h-full">
            <p className="text-stone-500">Your transformed phrase will appear here...</p>
            </div>
        )}
        </div>
    </div>
  );
};

export default OutputDisplay;
