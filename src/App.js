import { useContext } from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import { AppContext } from './context/AppContext';
import AllRoutes from './Page/AllRoutes';
function App() {
  const { toggleDark, isDark } = useContext(AppContext);
  if(isDark){
    document.body.style.backgroundColor = '#0f1624';
  }else{
    document.body.style.backgroundColor = '#edf2f8';
  }
  return (
    <div className="App" >
        <Navbar/>
        <AllRoutes/>

    </div>
  );
}

export default App;
