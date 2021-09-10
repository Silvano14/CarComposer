import React, { useEffect, useState } from 'react';
import './App.css';
import Body from './body/containers/Body';
import Footer from './footer/containers/Footer';
import { Header } from './header/containers/Header';
import BodyMobile from './mobile/body/container/BodyMobile';
import FooterMobile from './mobile/footer/FooterMobile';
import { HeaderMobile } from './mobile/header/container/HeaderMobile';

const App = () => {
  const [isBrowserView, setIfBrowser] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('resize', (size: any) => setIfBrowser(size.target.innerWidth > 770));
  }, [])

  return (
    <div className="App" >
      {isBrowserView
        ? <>
          <Header />
          <Body />
          <Footer />
        </>
        :
        <>
          <HeaderMobile />
          <BodyMobile />
          <FooterMobile />
        </>
      }
    </div>
  )
}
export default App;
