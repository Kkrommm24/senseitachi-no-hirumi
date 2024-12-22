import auth from 'api/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Signup = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError(t('password_mismatch'));
      setLoading(false);
      return;
    }

    try {
      const response = await auth.register({
        email: formData.email,
        password: formData.password,
        name: formData.name
      });
      console.log(t('registration_success'), response.data);
      navigate('/login');
    } catch (err) {
      console.error(t('registration_failed'), err.response?.data || err.message);
      setError(err.response?.data?.error || t('registration_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-[#fb524f] mb-6">{t('signup')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              {t('name')}
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder={t('enter_name')}
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              {t('email')}
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder={t('enter_email')}
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              {t('password')}
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder={t('enter_password')}
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              {t('confirm_password')}
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder={t('reenter_password')}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className={`w-full py-3 px-4 bg-[#fb524f] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#fb524f] focus:ring-offset-2 ${
              loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#e04846]'
            }`}
            disabled={loading}
          >
            {loading ? t('registering') : t('register')}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {t('already_have_account')}{' '}
            <Link to="/login" className="text-[#fb524f] hover:underline">
              {t('login')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
