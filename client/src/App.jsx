import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import Signuppage from './signup.jsx'
import Loginpage from './login.jsx'

function App(){
    return(
<BrowserRouter>
 <Routes>
  <Route  path='/main' element={<Loginpage />}/>
  <Route path='/signup' element={<Signuppage />}/>
 </Routes>
</BrowserRouter>
    )
 
}
export default App