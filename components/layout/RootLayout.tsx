import { PropsWithChildren } from 'react';
import Nav from 'components/root/nav';
import Banner from 'components/event/Banner';
import Footer from 'components/root/footer/Footer';
import MenuBar from 'components/root/menubar';
import { useRouter } from 'next/router';

const RootLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="max-w-screen-sm min-h-screen m-auto border-solid border-2 border-gray pr-2 pl-2">
      <Nav />
      <MenuBar />
      {pathname === '/' && <Banner />}
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
