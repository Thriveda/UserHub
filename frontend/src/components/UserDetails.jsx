import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function UserDetails() {

  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  function handleBack() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-[#FEF7E3] ">
     <Navbar />
      <div className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <button onClick={handleBack} className="mb-4 flex items-center text-[#0F4C5C] font-semibold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Users List
          </button>
          </div>
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl px-8 py-8 border border-purple-100">

          <h1 className="text-3xl font-bold text-center mb-8 text-[#DB2777]">User Details</h1>

          {/* Basic Information */}
          <Section title="Basic Information">
            <Line label="Name" value={user?.name} />
            <Line label="Email" value={user?.email} />
            <Line label="Phone Number" value={user?.phoneNo} />
            <Line label="Company Name" value={user?.companyName} />
          </Section>

          {/* Address */}
          <Section title="Address">
            <Line label="Street" value={user?.address?.street} />
            <Line label="City" value={user?.address?.city} />
            <Line label="Zip Code" value={user?.address?.zipcode} />
          </Section>

          {/* Geo Location */}
          <Section title="Geo Location">
            <Line label="Latitude" value={user?.address?.latitude} />
            <Line label="Longitude" value={user?.address?.longitude} />
          </Section>
        </div>
      </div>
    </div>
  );
}

/* Section Heading */
function Section({ title, children }) {
  return (
    <div className="mb-8 pb-6 border-b border-purple-100 last:border-b-0">
      <h2 className="text-xl font-bold text-[#E85AAE] mb-4">
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

/* Label : Value Line */
function Line({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-2 px-4 bg-purple-50 rounded-lg">
      <span className="font-semibold text-[#0F4C5C] text-sm mb-1 sm:mb-0 sm:mr-3 sm:w-32">
        {label}:
      </span>
      <span className="font-medium text-gray-800">
        {value || "-"}
      </span>
    </div>
    

  
  );
}

export default UserDetails;

