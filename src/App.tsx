import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const App = () => {
  return (
    <BrowserRouter>
      <header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<>Works!</>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
