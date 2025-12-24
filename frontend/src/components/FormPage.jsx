import Navbar from './Navbar'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FormPage() {

  const url = "http://localhost:5000"

  const navigate = useNavigate()
  const location = useLocation()
  const {user} = location.state || {}


  const [submitError, setSubmitError] = useState()
  const [formData, setFormData] = useState({
    name: user?user.name:'',
    email: user?user.email: '',
    phoneNo: user?user.phoneNo:'',
    companyName: user?user.companyName: '',
    address: {
      street: user?user.address.street:'', 
      city: user?user.address.city:'',
      zipcode: user?user.address.zipcode:'',
      latitude: user?user.address.latitude:'',
      longitude: user?user.address.longitude:''
    }
  });
  
  
  function handleChange(event){
    setFormData(prevData => ({...prevData,
      [event.target.id] : event.target.value
    }))
  }
  function handleChangeAddress(event){
    setFormData(prevData => ({...prevData,
      address:{
        ...prevData.address,
        [event.target.id]:event.target.value
      }
    }))
  }

  const requestBody = {
        name: formData.name,
        email: formData.email,
        phoneNo: formData.phoneNo,
        companyName: formData.companyName,
        address: 
          {
            street: formData.address.street,
            city: formData.address.city,
            zipcode: formData.address.zipcode,
            latitude: formData.address.latitude,
            longitude: formData.address.longitude
          }
    }
  
  async function createUser(event){
    event.preventDefault();
    
    const opt = {
      method : "POST",
      headers:{
        "Content-type": "application/json",
        Accept:"application/json"
      },
      body: JSON.stringify(requestBody)
    }
     console.log(requestBody)
    const response = await fetch(`${url}/users/createUser`, opt)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    if (response.ok){
      navigate("/successful")
    }
    else{
      setSubmitError(jsonResponse.error)
    }
    
  }

  async function updateUser(event){
    event.preventDefault();
    
    const opt = {
      method : "PUT",
      headers:{
        "Content-type": "application/json",
        Accept:"application/json"
      },
      body: JSON.stringify(requestBody)
    }
     console.log(requestBody)
    const response = await fetch(`${url}/users/update/${user._id}`, opt)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    if (response.ok){
      navigate("/successful", {state:{user:user}})
    }
    
  }
 

  return (
    <div className="min-h-screen bg-[#FEF7E3]">
      <Navbar />
      <div className="max-w-2xl mx-auto py-8 px-4">
        <form onSubmit={user?updateUser:createUser} className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
          <h2 className="text-center text-3xl font-bold mb-8 text-[#DB2777]">
            {user?"Update User":"Create User"}
          </h2>
          
          <div className="mb-5">  
            <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="name">Name</label>
            <input
              className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
              id="name"
              type="text"
              placeholder="Enter name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          <div className="mb-5">  
            <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="email">Email</label>
            <input
              className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
              id="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={formData.email}
              required

            />
          </div>

          <div className="mb-5">  
            <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="phoneNo">Phone Number</label>
            <input
              className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
              id="phoneNo"
              type="text"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={formData.phoneNo}
              required

            />
          </div>

          <div className="mb-5">  
            <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="companyName">Company Name</label>
            <input
              className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
              id="companyName"
              type="text"
              onChange={handleChange}
              placeholder="Enter company name"
              value={formData.companyName}
              required
            />
          </div>
          
          <div className="border-t border-purple-100 my-6 pt-6">
            <h1 className='text-xl font-bold mb-6 text-[#E85AAE]'>Address</h1>
            
            <div className="mb-5">  
              <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="street">Street Name</label>
              <input
                className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
                id="street"
                type="text"
                placeholder="Enter street name"
                onChange={handleChangeAddress}
                value={formData.address.street}
                required
              />
            </div>

            <div className="mb-5">  
              <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="city">City Name</label>
              <input
                className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
                id="city"
                type="text"
                placeholder="Enter city name"
                onChange={handleChangeAddress}
                value={formData.address.city}
                required
              />
            </div>

            <div className="mb-5">  
              <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="zipcode">Zipcode</label>
              <input
                className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
                id="zipcode"
                type="text"
                placeholder="Enter Zipcode"
                onChange={handleChangeAddress}
                value={formData.address.zipcode}
                required
              />
            </div>
          </div>

          

          <div className="mb-5">  
            <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="Longitude">Longitude</label>
            <input
              className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
              id="longitude"
              type="text"
              placeholder='Enter Longitude value'
              onChange={handleChangeAddress}
              value={formData.address.longitude}
              required
            />
          </div>

          <div className="mb-5">  
            <label className="block text-[#0F4C5C] font-semibold mb-2 text-sm" htmlFor="Latitude">Latitude</label>
            <input
              className="w-full py-2.5 px-4 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-300 text-gray-700"
              id="latitude"
              type="text"
              placeholder='Enter Latitude value'
              onChange={handleChangeAddress}
              value = {formData.address.latitude}
              required
            />
          </div>

          <div className='flex flex-col items-center'>
            <button 
              type='submit' 
              className="bg-gradient-to-r from-[#E85AAE] to-[#7C6CF2] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 w-full max-w-xs"
            >
              Submit    
            </button>
          </div>
          {submitError&&<p className='font-semibold text-red-500 text-center my-6'>Please Enter correct values in the fields provided.</p>}
        </form>
      </div>
    </div>
  )
}

export default FormPage
