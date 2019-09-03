import React from 'react';
import ScreenView from './screen/view/screen-view';
import 'antd/dist/antd.css';
import ScreenHeader from './common/header';
import SideTab from './common/sideTab';

function App() {
  return (
    <>
      <SideTab />
      <ScreenHeader />
      <ScreenView />
    </>
  );
}

export default App;
