import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Blog from './pages/blog/Blog';
import AboutUs from './pages/about/AboutUs';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Blog" element={<Blog />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
