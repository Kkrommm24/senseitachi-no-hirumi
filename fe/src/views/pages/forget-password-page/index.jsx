import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import auth from '../../../api/auth';

const ForgetPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t('invalid_email'));
      setLoading(false);
      return;
    }

    try {
      await auth.forgotPassword({ email });
      setSuccess(true);
    } catch (err) {
      if (err.response?.status === 400) {
        setError(t('email_not_registered'));
      } else {
        setError(t('email_send_failed'));
        console.error(t('email_send_failed'), err.response?.data || err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#fb524f] mb-4">{t('email_sent')}</h2>
          <p className="text-gray-600 mb-6">
            {t('check_email')}
          </p>
          <Link
            to="/login"
            className="text-[#fb524f] hover:underline"
          >
            {t('back_to_login')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#fb524f] mb-4 whitespace-nowrap">
          {t('forgot_password')}
        </h2>
        <p className="text-gray-600 text-center text-sm md:text-base max-w-sm mx-auto whitespace-nowrap">
          {t('enter_registered_email')}
        </p>
        <p className="text-gray-600 mb-8 text-center text-sm md:text-base max-w-sm mx-auto whitespace-nowrap">
          {t('send_reset_link')}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm transition duration-150 ease-in-out"
              placeholder={t('enter_email')}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className={`w-full py-3 px-4 bg-[#fb524f] text-white text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#fb524f] focus:ring-offset-2 transition duration-150 ease-in-out ${
              loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#e04846] hover:shadow-lg'
            }`}
            disabled={loading}
          >
            {loading ? t('sending') : t('send_reset_link')}
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-[#fb524f] hover:underline text-sm">
            {t('back_to_login')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
