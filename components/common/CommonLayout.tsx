import { PropsWithChildren } from 'react';
import Nav from '@components/common/nav';
import Banner from 'components/event/Banner';
import Footer from '@components/common/footer/Footer';
import MenuBar from '@components/common/menubar';
import { useRouter } from 'next/router';
import SalonCard from '@components/salonComponent/SalonCard';

const CommonLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;

  //data 단방향 ->
  const cardData = [
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'haum Bangkok',
      description: 'haum bangkok',
      productId: 'haumBangkok',
    },
  ];

  return (
    <div className="max-w-screen-sm min-h-screen m-auto border-solid border-2 border-gray pr-2 pl-2">
      <Nav />
      <MenuBar />
      {pathname === '/' && <Banner />}
      {pathname === '/' && <SalonCard data={cardData} />}
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
