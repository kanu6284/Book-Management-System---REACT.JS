import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

const Login = () => {
  const { loginUser, loginwithGoogle, login } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
    try {
      await login(email, password);
      // Login successful
      alert("Login successful");
      navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  

  // Login with Google account
  const handleLoginWithGoogle = () => {
    loginwithGoogle()
      .then(() => {
        alert("Login with Google successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                </div>
                <div className="relative">
                  <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                </div>
                
                {error ? <p className='text-red-600 text-base'> "email and password is not correct:</p> : ""}

                <p>If you haven't an account, please <Link to="/sign-up" className='text-blue-600'>Sign Up</Link> here</p>
                <div className="relative">
                  <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
                </div>
              </form>
            </div>

            <hr></hr>
            <div className='flex w-full item-center flex-col mt-5 gap-3'>
              <button onClick={handleLogin} className='block'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAACPVBMVEX////08vT///0XTPIAbwAAlRDNy808dT4AggwVSvEApRUaUvgAohQAlgAAnxIYTvT7+/08ez4POtsUROgAPu0SP+MAcwAAkgAQth8AewAAowA8eD7dFC4POdj/pADo7PqlqcIuXDEAqwAFjxBEgv4AL9Ls7OoAN+b/uxv/wi4ARvEBhg4pZvz/twAkX/v/xjb5rxPtJzIAJeHjegAdU/EAUgDa2dUxc/cuaPVJiP7Ozcf99+r75uU0cv31PDmTs/n1RUP3Vkr3ZVrsPknmABv4bGE/ff30ODbTFSzDECnWABLyjgDwmAbljAAANvD4nQCGiJIjV+mvBiPfdADVYgCUAAsAIM4KKb0AM90/Ta6rqqHU8NZv1nc/z04axDnE68VVz1uzrbPC0vt1nPtgjvew4rGFqfuqv/i11bWMp4x7k3yWmpbU4PwAYQA4VMtWZrVud6eDh6AtTM9+hq8gSdyioZhfbbqEjsVGXtxsmvwtRLtsd7X5x8b4r632mJb96L792In+zFb2eXP3iYP3nJf85K/dmSHKkjqEjLTJO0GqX2KcfX7ytLf+zUynimWunYmwa266TFCwgYTXkjhUas/BWGD6tTneio/91nafjXn2xXzHAADidn7aqnz05M7Oi5Dqzqt/jt2RO0S3vNTDiEqaFCeNWV27qarPS1fep23CmHG5AALoAAD2y5XBhmDvsVjRTgCxYDiMgYLOt6esKzlwsnVNplMxqUCcAADFcyx9g31OV56+eD2NaWwZNrze0MWjAAAUKklEQVR4nO2c+0NT15bHkxNNG2NJmofa3mAcS070GCOBc5MYCA/BECCAIEJIp51LoOTOgLx8VkBr6YuCbW2p9uFYy60tHfu0vXfoOPC3zVr7nECS80gcY+WW/f2hj3BO9jqfvfbaa6+9TzQaKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqqk2vF//1JaKXX96z//ntLz62dhjG7CTSMsxja6To+re/vPzSS38RAO3f/ad+7eNohHEmaweOBoKiApHBodqkc/NTYl7Zs3///j17XkY6e3a88FS/ufiNmJNDZUGPx+vleSOI571eTzAcCAQiA6lNzujFv/77f4B2AKE9e3Ye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' alt='' className='w-12 h-12 inline-block' />Login With google</button>
            </div>

        </div>
      </div>
    </div>
  </div>

  )
}

export default Login