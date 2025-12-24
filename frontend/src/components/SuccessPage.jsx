import { useNavigate, useLocation } from "react-router-dom"

function SuccessPage() {

  const navigate = useNavigate()
  const location = useLocation()
  const {user} = location.state || {}
  
  function ViewList(){
    navigate("/")
  }
  return (
    <div className='min-h-screen bg-[#FEF7E3] flex flex-col justify-center items-center px-4'>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center border border-indigo-100">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-[#E85AAE] to-[#7C6CF2] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className='font-bold text-2xl mb-6 text-[#DB2777]'>
          {user?"User Updated Successfully":"User Created Successfully"}
        </h1>
        <button 
          className="bg-gradient-to-r from-[#E85AAE] to-[#7C6CF2] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105" 
          onClick={ViewList}
        >
          View Users List
        </button>
      </div>
    </div>
  )
}

export default SuccessPage
