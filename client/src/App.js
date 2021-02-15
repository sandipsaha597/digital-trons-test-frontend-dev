import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './Components/DetailsPage';
import Main from './Components/Main';
import { useSelector } from 'react-redux'
import './App.scss';

function App() {
  const slotsAndDetails = useSelector(state => state.slotsAndDetails)
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          {slotsAndDetails.map(v => (
            <Route key={v.id} path={'/:timeSlot'} element={<DetailsPage />} />
          ))}
          <Route path='/*' element={<div>404 page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
