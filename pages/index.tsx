import Banner from '@components/event/Banner';
import RootLayout from '@components/layout/RootLayout';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return <RootLayout />;
};

export default Home;
