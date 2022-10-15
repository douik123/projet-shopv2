import './App.css';
import Navbar from './layout/NavBar.js'
import NavBar2 from './layout/NavBar2.js'
function App() {
  return (
    <div>
    <Navbar/>
    <NavBar2/>
    {/* <Routes>
    <Route exact path='/' element={<Home/>}/> */}
    {/* <Route  path='destination/:link' element={<Region paysinfo={paysinfo}/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/AboutUs' element={<AboutUs/>}/>
    <Route  path='destination/:region/:link' element={<Pays paystours={paystours} activities={activities} images={image} infopays={infopays} hotels={hotels} thingstodo={thingstodo} />}/> */}
    {/* </Routes> */}
    </div>
  );
}

export default App;
