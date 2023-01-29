import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const MainSearchPage = lazy(() => import('./containers/MainSearchPage'));

  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainSearchPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>       
  </>
  );
}

export default App;
