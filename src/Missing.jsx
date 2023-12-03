import { NavLink } from "react-router-dom";

const Missing = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen">
        <h1 className="text-4xl font-palanquin text-gray-600">
          Sorry! Page Not Found
        </h1>

        <div className="mt-10 flex items-center justify-center">
          <NavLink to='/' 
          className="text-lg font-montserrat text-coral-red font-semibold hover:underline">
          Back to Home Page 🔙
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Missing;
