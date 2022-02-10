import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ToyStore } from './pages/ToyStore';





export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ToyStore />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
