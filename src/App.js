import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFount from './NotFount';

function App() {

  return (
   <BrowserRouter>
      <div className="App">
        <Navbar />  
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/blog/:id' element={ <BlogDetails/>} />
            <Route path='*' element={ <NotFount/>} />
          </Routes>
        </div>
      </div>
   </BrowserRouter>
  );
}

export default App;
