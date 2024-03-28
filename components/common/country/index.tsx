import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchTranslations = async (language) => {
  const response = await fetch(`https://api.example.com/translations?language=${language}`);
  const data = await response.json();
  return data;
};

const LanguageSelector = ({ setLanguage }) => {
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
    </select>
  );
};

const TranslatedText = ({ language }) => {
  const {
    data: translations,
    isLoading,
    isError,
  } = useQuery(['translations', language], () => fetchTranslations(language));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching translations.</div>;
  }

  return <div>{translations.text}</div>;
};

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <div>
      <h1>Multi-language App</h1>
      <LanguageSelector setLanguage={setLanguage} />
      <TranslatedText language={language} />
    </div>
  );
};

export default App;
