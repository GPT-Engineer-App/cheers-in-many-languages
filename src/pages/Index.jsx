import React, { useState, useEffect } from 'react';

const cheersData = [
  { language: 'Afrikaans', spelling: 'Gesondheid', pronunciation: 'Ge-sund-hate' },
  { language: 'Albanian', spelling: 'Gëzuar', pronunciation: 'Geh-zoo-ah' },
  { language: 'Arabic (Egypt)', spelling: 'فى صحتك', pronunciation: 'Fe sahetek' },
  { language: 'Argentinian', spelling: 'Salud', pronunciation: 'sah-lude' },
  { language: 'Azerbaijani', spelling: 'Nuş olsun', pronunciation: 'Nush ohlsun' },
  { language: 'Australian', spelling: 'Cheers', pronunciation: 'Cheers' },
  { language: 'Bosnian', spelling: 'Živjeli', pronunciation: 'Zhee-vi-lee' },
  { language: 'Bulgarian', spelling: 'Наздраве', pronunciation: 'Naz-dra-vey' },
  { language: 'Burmese', spelling: 'Aung myin par say', pronunciation: 'Au-ng my-in par say' },
  { language: 'Catalan', spelling: 'Salut', pronunciation: 'Sah-lut' },
  { language: 'Chamorro (Guam)', spelling: 'Biba', pronunciation: 'Bih-bah' },
  { language: 'Chinese (Mandarin)', spelling: '干杯 (gān bēi)', pronunciation: 'Gan bay' },
  { language: 'Costa Rican', spelling: 'Pura vida', pronunciation: 'poora veeda' },
  { language: 'Croatian', spelling: 'Živjeli', pronunciation: 'Zhee-ve-lee' },
  { language: 'Czech', spelling: 'Na zdravi', pronunciation: 'Naz-drah vi' },
  { language: 'Danish', spelling: 'Skål', pronunciation: 'Skoal' },
  { language: 'Dutch', spelling: 'Proost', pronunciation: 'Prohst' },
  { language: 'English (England)', spelling: 'Cheers', pronunciation: 'Cheers' },
  { language: 'English (US)', spelling: 'Cheers', pronunciation: 'Cheers' },
  { language: 'Estonian', spelling: 'Terviseks', pronunciation: 'Ter-vih-sex' },
  { language: 'Filipino/Tagalog', spelling: 'Mabuhay', pronunciation: 'Mah-boo-hay' },
  { language: 'Finnish', spelling: 'Kippis', pronunciation: 'Kip-piss' },
  { language: 'French', spelling: 'Santé', pronunciation: 'Sahn-tay' },
  { language: 'Galician', spelling: 'Salud', pronunciation: 'Sa-lood' },
  { language: 'German', spelling: 'Prost', pronunciation: 'Prohst' },
  { language: 'Greek', spelling: 'ΥΓΕΙΑ', pronunciation: 'Yamas' },
  { language: 'Hawaiian', spelling: 'Ā kālā ma luna', pronunciation: 'Okole maluna' },
  { language: 'Hebrew', spelling: 'לחיים (L\'chaim)', pronunciation: 'leh hayem' },
  { language: 'Hungarian', spelling: 'Egészségedre', pronunciation: 'Egg-esh ay-ged-reh' },
  { language: 'Icelandic', spelling: 'Skál', pronunciation: 'Sk-owl' },
  { language: 'Indonesian', spelling: 'Pro', pronunciation: 'prho' },
  { language: 'Irish Gaelic', spelling: 'Sláinte', pronunciation: 'Slawn-cha' },
  { language: 'Italian', spelling: 'Salute', pronunciation: 'Saw-lutay' },
  { language: 'Japanese', spelling: '乾杯 (Kanpai)', pronunciation: 'Kan-pie' },
  { language: 'Korean', spelling: '건배', pronunciation: 'Gun bae' },
  { language: 'Latvian', spelling: 'Priekā', pronunciation: 'Pree-eh-ka' },
  { language: 'Lithuanian', spelling: 'į sveikatą', pronunciation: 'Ee sweh-kata' },
  { language: 'Macedonian', spelling: 'На здравје', pronunciation: 'Na zdravye' },
  { language: 'Mongolian', spelling: 'Эрүүл мэндийн төлөө', pronunciation: 'ErUHl mehdiin toloo' },
  { language: 'Norwegian', spelling: 'Skål', pronunciation: 'Skawl' },
  { language: 'Polish', spelling: 'Na zdrowie', pronunciation: 'Naz-droh-vee-ay' },
  { language: 'Portuguese', spelling: 'Saúde', pronunciation: 'Saw-OO-de' },
  { language: 'Romanian', spelling: 'Noroc', pronunciation: 'No-rock' },
  { language: 'Russian', spelling: 'Будем здоровы', pronunciation: 'Budem zdorovi' },
  { language: 'Serbian', spelling: 'živeli', pronunciation: 'Zhee-ve-lee' },
  { language: 'Slovak', spelling: 'Na zdravie', pronunciation: 'Naz-drah-vee-ay' },
  { language: 'Slovenian', spelling: 'Na zdravje', pronunciation: 'Naz-drah-vee' },
  { language: 'Spanish', spelling: 'Salud', pronunciation: 'Sah-lud' },
  { language: 'Swedish', spelling: 'Skål', pronunciation: 'Skawl' },
  { language: 'Swiss', spelling: 'Proscht', pronunciation: 'pro-skt' },
  { language: 'Thai', spelling: 'Chai yo', pronunciation: 'chay yo' },
  { language: 'Turkish', spelling: 'Şerefe', pronunciation: 'Sher-i-feh' },
  { language: 'Ukranian', spelling: 'будьмо', pronunciation: 'Boodmo' },
  { language: 'Vietnamese', spelling: 'Dô', pronunciation: 'Jou' },
  { language: 'Welsh', spelling: 'Iechyd da', pronunciation: 'Yeh-chid dah' },
  { language: 'Yiddish', spelling: 'Sei gesund', pronunciation: 'Say geh-sun' },
];

const Index = () => {
  const [cheers, setCheers] = useState(cheersData[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cheersData.length);
    setCheers(cheersData[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-8">{cheers.spelling}</h1>
        <p className="text-3xl mb-2">{cheers.language}</p>
        <p className="text-xl italic">{cheers.pronunciation}</p>
      </div>
    </div>
  );
};

export default Index;
