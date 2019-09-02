import React from 'react';
import ScreenView from './screen/view/screen-view';
import 'antd/dist/antd.css';
import ScreenHeader from './common/header';

function App() {
  return (
    <>
      <ScreenHeader />
      <ScreenView />
    </>
  );
}

export default App;
