import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.scss';
import './ontario-design-system/styles/ds-theme.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './components/homepage/homepage.component';
import AddItem from './components/add/add.component';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main className='main-container'>

            <div className='ontario-row'>
              <div className='ontario-columns ontario-large-12'>
                
                  <Routes>
                    <Route path='/' exact element={<HomePage />} />
                    <Route path='/add' exact element={<AddItem />} />
                  </Routes>
                
              </div>
            </div>

          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
