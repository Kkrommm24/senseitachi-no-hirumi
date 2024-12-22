import auth from 'api/auth';
import { setToken, setUserId } from 'helper/storage';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await auth.login({ email: username, password: password });
      console.log(t('login_success'), response.data);
      setToken(response.data.token);
      setUserId(response.data.userId);
      navigate('/');
    } catch (err) {
      console.error(t('login_failed'), err.response?.data || err.message);
      setError(err.response?.data?.message || t('login_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-[#fb524f] mb-6">{t('login')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex items-center">
            <label
              htmlFor="username"
              className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right"
            >
              {t('username')}
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder={t('enter_username')}
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <label
              htmlFor="password"
              className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right"
            >
              {t('password')}
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder={t('enter_password')}
              required
            />
          </div>
          <div className="mb-4 text-right">
            <Link to="/forget-password" className="text-sm text-[#fb524f] hover:underline">
              {t('forgot_password')}
            </Link>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className={`w-full py-3 px-4 bg-[#fb524f] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#fb524f] focus:ring-offset-2 ${
              loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#e04846]'
            }`}
            disabled={loading}
          >
            {loading ? t('logging_in') : t('login')}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {t('no_account')}{' '}
            <Link to="/signup" className="text-[#fb524f] hover:underline">
              {t('create_account')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
