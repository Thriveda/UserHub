import Navbar from "./Navbar"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


function UserList() {

  const url = "http://localhost:5000"

  const [users, setusers] = useState([])
  const navigate = useNavigate()


  function getAllUsers(){
    async function fn(){
      const response = await fetch(`${url}/users/all`)
      const jsonResponse = await response.json()
      console.log(jsonResponse.users)
      if (response.ok){
        setusers(jsonResponse.users)
      }
    }
    fn()
  }
  useEffect(getAllUsers, [])

  async function deleteUser(id){
    const opt = {
      method:"DELETE",
      headers:{
        "Content-type": "application/json",
        Accept: "application/json"
      }
    }
    const response = await fetch(`${url}/users/delete/${id}`, opt)
    const jsonResponse = await response.json()
    console.log(jsonResponse) 
    setusers(jsonResponse.users)
  }

  async function editUser(user){
    navigate("/create-user", {state:{user:user}})
  }

  function viewDetails(id, user){
    console.log("clicked")
    navigate(`/user/${id}`, {state:{user:user}})
  }
  
  return (
  <div className="min-h-screen bg-[#FEF7E3]">
    <Navbar />
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#DB2777]">
        Users List
      </h2>

      {users.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div key={user._id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-6 transform hover:scale-105">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-[#0F4C5C] font-bold text-lg mr-3">
                    {user.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
                    <p className="text-sm text-gray-500">#{index + 1}</p>
                  </div>
                </div>
              </div>

              {user.email && (
                <div className="mb-3">
                  <p className="text-sm text-gray-700 truncate">
                    <span className="font-semibold text-[#0F4C5C]">Email:</span> {user.email}
                  </p>
                </div>
              )}

              {user.companyName && (
                <div className="mb-4">
                  <p className="text-sm text-gray-700 truncate">
                    <span className="font-semibold text-[#0F4C5C]">Company:</span> {user.companyName}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-pink-100">
                <button onClick={() => viewDetails(user._id, user)}
                  className="text-sm bg-[#EC4899] hover:bg-[#DB2777] text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md">
                  View
                </button>
                
                <div className="flex gap-3">
                  <button onClick={() => editUser(user)} className="p-2 bg-purple-100 hover:bg-purple-200 text-[#7C6CF2] rounded-lg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>

                  <button onClick={() => deleteUser(user._id)}
                    className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"> 
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /> 
                      </svg>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center border border-purple-100">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-[#0F4C5C] text-lg font-medium">No users are available</p>
        </div>
      )}
    </div>
  </div>
);
}

export default UserList
