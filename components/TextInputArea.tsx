
import React from 'react';
import { Language } from '../types';

interface TextInputAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  language: Language;
}

const placeholderMap: Record<Language, string> = {
  [Language.English]: 'The sun sets over the ocean...',
  [Language.French]: 'Le soleil se couche sur l\'océan...',
  [Language.Arabic]: 'تغرب الشمس فوق المحيط...',
};

const TextInputArea: React.FC<TextInputAreaProps> = ({ value, onChange, language }) => {
  return (
    <div>
        <label htmlFor="phrase-input" className="block text-sm font-medium text-indigo-300 mb-2">
            Phrase to Transform
        </label>
        <textarea
            id="phrase-input"
            value={value}
            onChange={onChange}
            placeholder={placeholderMap[language]}
            rows={4}
            className="w-full bg-stone-800/50 border border-stone-700 rounded-lg p-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
        />
    </div>
  );
};

export default TextInputArea;
