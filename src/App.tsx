import React from 'react';
import "./styles/App.scss";
import { HeaderComponent } from './components/Header/HeaderComponent';
import { HowWeWorkComponent } from './components/HowWeWork/HowWeWorkComponent';
import { BannerComponent } from './components/Banner/BannerComponent';
import { AdvantagesComponent } from './components/Advantages/AdvantagesComponent';
import { StatisticComponent } from './components/Statistic/StatisticComponent';
import { TechnologiesComponent } from './components/Technologies/TechnologiesComponent';
import { AIComponent } from './components/AI/AIComponent';
import { HowWeEarning } from './components/HowWeEarning/HowWeEarn';
import { QA } from './components/QA/QA';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
      <header>
        <section>
          <HeaderComponent />
        </section>
      </header>
      <main>
        <section className='container'>
          <HowWeWorkComponent />
        </section>
        <section>
          <BannerComponent />
        </section>
        <section className='container'>
          <AdvantagesComponent />
        </section>
        <section>
          <StatisticComponent />
        </section>
        <section className="container">
          <TechnologiesComponent />
          <AIComponent />
          <HowWeEarning />
        </section>
        <section className="container">
          <QA />
        </section>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
