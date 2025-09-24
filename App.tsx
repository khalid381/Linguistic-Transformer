
import React, { useState, useCallback } from 'react';
import { Language } from './types';
import { transformPhrase } from './services/geminiService';
import LanguageSelector from './components/LanguageSelector';
import TextInputArea from './components/TextInputArea';
import TransformButton from './components/TransformButton';
import OutputDisplay from './components/OutputDisplay';
import Header from './components/Header';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [phrase, setPhrase] = useState<string>('');
  const [language, setLanguage] = useState<Language>(Language.English);
  const [transformedPhrase, setTransformedPhrase] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleTransform = useCallback(async () => {
    if (!phrase.trim()) {
      setError('Please enter a phrase to transform.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setTransformedPhrase('');

    try {
      const result = await transformPhrase(phrase, language);
      setTransformedPhrase(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [phrase, language]);

  return (
    <div className="min-h-screen bg-stone-950 bg-gradient-to-br from-stone-950 via-indigo-950/20 to-stone-950 text-stone-200 font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <Header />
        
        <main className="bg-stone-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl shadow-2xl shadow-indigo-900/20 p-6 md:p-8 space-y-6">
          <LanguageSelector selectedLanguage={language} onSelectLanguage={setLanguage} />
          
          <TextInputArea 
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            language={language}
          />
          
          <TransformButton isLoading={isLoading} onClick={handleTransform} />
          
          {error && <ErrorDisplay message={error} />}
          
          <OutputDisplay 
            text={transformedPhrase} 
            isLoading={isLoading} 
          />
        </main>

        <footer className="text-center text-xs text-stone-500">
            <p>Powered by Gemini. Crafted for poetic resonance.</p>
            <p>Powered by khalid</p>
        </footer>
      </div>
    </div>
  );
};

export default App;