
import React from 'react';
import { Language } from '../types';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onSelectLanguage: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onSelectLanguage }) => {
  const languages = [Language.English, Language.French, Language.Arabic];
  
  return (
    <div>
      <label className="block text-sm font-medium text-indigo-300 mb-2">
        Original Language
      </label>
      <div className="flex items-center space-x-2 bg-stone-800/50 p-1 rounded-lg">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => onSelectLanguage(lang)}
            className={`w-full px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-stone-900
            ${selectedLanguage === lang 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'text-stone-300 hover:bg-stone-700/50'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
