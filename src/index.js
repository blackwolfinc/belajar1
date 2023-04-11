import React from 'react';
import ReactDOM from 'react-dom/client';
import { LadingPage } from './page/LadingPage';
import { SettingBuku } from './page/SettingBuku';
import "../src/assets/css/global.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LadingPage/> */}
    <SettingBuku/>
  </React.StrictMode>
);

