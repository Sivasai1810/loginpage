import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import Signuppage from './signup.jsx'
import Loginpage from './login.jsx'

function App(){
    return(
<BrowserRouter>
 <Routes>
  {/* <Route  path='/main' element={<Loginpage />}/> */}
  <Route path='/signup' element={<Signuppage />}/>
  <Route  path='*' element={<Loginpage />}/>
 </Routes>
</BrowserRouter>
    )
 
}
export default App