import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import 'typeface-dm-sans';


function App() {
  return (
    <div className="max-w-screen-xl mx-auto"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
