import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import auth from '../../../api/auth';

function ResetPassword() {
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { token } = useParams();
    console.log(token);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError(t('password_mismatch'));
            return;
        }
        if (!token) {
            setError(t('invalid_reset_link'));
            return;
        }

        setLoading(true);
        try {
            await auth.resetPassword({ newPassword: password, token });
            navigate('/login');
        } catch (error) {
            setError(error.response?.data?.message || t('reset_error'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-extrabold text-center text-[#fb524f] mb-6">
                    {t('reset_password')}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 flex items-center">
                        <label
                            htmlFor="password"
                            className="flex-shrink-0 w-32 text-sm font-medium text-gray-700 text-right"
                        >
                            {t('new_password')}
                        </label>
                        <div className="mx-3 h-6 w-px bg-gray-300"></div>
                        <input
                            id="password"
                            type="password"
                            required
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
                            placeholder={t('enter_new_password')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6 flex items-center">
                        <label
                            htmlFor="confirmPassword"
                            className="flex-shrink-0 w-32 text-sm font-medium text-gray-700 text-right"
                        >
                            {t('confirm_password')}
                        </label>
                        <div className="mx-3 h-6 w-px bg-gray-300"></div>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
                            placeholder={t('reenter_password')}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                    <button
                        type="submit"
                        className={`w-full py-3 px-4 bg-[#fb524f] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#fb524f] focus:ring-offset-2 ${
                            loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#e04846]'
                        }`}
                        disabled={loading}
                    >
                        {loading ? t('resetting') : t('reset_password')}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
