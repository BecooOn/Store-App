import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
      <main>
          <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
              <div className="max-w-lg mx-auto space-y-3 text-center">
                  <h3 className="text-indigo-600 font-semibold">
                      404 Error
                  </h3>
                  <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                      Page not found
                  </p>
                  <p className="text-gray-600">
                      Sorry, the page you are looking for could not be found or has been removed.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                      <button className="block py-2 px-4 text-white font-medium bg-yellow-600 duration-150 hover:bg-yellow-500 active:bg-yellow-700 rounded-lg"
                      onClick = {() => navigate(-1)}>
                          Go back
                      </button>
                      <button className="block py-2 px-4 text-white font-medium bg-yellow-600 duration-150 hover:bg-yellow-500 active:bg-yellow-700 rounded-lg"
                      onClick = {() => navigate("/dashboard")}>
                          Home
                      </button>
                  </div>
              </div>
          </div>
      </main>
  )
}
export default NotFound;