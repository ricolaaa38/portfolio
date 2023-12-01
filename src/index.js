import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import OnlineSchemaOrg from './components/schema';
import Projets from './components/projets';
import Contact from './components/contact';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import ReactModal from 'react-modal';
import '@fontsource/roboto';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactModal.setAppElement('#root');
root.render(
  <React.StrictMode>
    <OnlineSchemaOrg />
    <div className="body-body">
      <Header />
      <Banner />
      <About />

      <Projets />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
