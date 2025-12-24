import './App.css'
import { Routes, Route} from 'react-router-dom'
import FormPage from './components/FormPage'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import SuccessPage from './components/SuccessPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/create-user" element={<FormPage />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/successful" element={<SuccessPage />} />
    </Routes>
    </>
  )
}

export default App
