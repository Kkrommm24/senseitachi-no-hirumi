import { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../api/auth';

const ForgetPassword = () => {
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
      setError('有効なメールアドレスを入力してください。');
      setLoading(false);
      return;
    }

    try {
      await auth.forgotPassword({ email });
      setSuccess(true);
    } catch (err) {
      if (err.response?.status === 400) {
        setError('このメールアドレスは登録されていません。');
      } else {
        setError('メールの送信に失敗しました。もう一度お試しください。');
        console.error('メールの送信に失敗しました:', err.response?.data || err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#fb524f] mb-4">メールを送信しました</h2>
          <p className="text-gray-600 mb-6">
            パスワードをリセットするためのリンクをメールで送信しました。メールをご確認ください。
          </p>
          <Link
            to="/login"
            className="text-[#fb524f] hover:underline"
          >
            ログインページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#fb524f] mb-4 whitespace-nowrap">
          パスワードをお忘れですか？
        </h2>
        <p className="text-gray-600 text-center text-sm md:text-base max-w-sm mx-auto whitespace-nowrap">
          登録したメールアドレスを入力してください。
        </p>
        <p className="text-gray-600 mb-8 text-center text-sm md:text-base max-w-sm mx-auto whitespace-nowrap">
          パスワードをリセットするためのリンクを送信します。
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm transition duration-150 ease-in-out"
              placeholder="メールアドレスを入力してください"
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
            {loading ? '送信中...' : 'リセットリンクを送信'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-[#fb524f] hover:underline text-sm">
            ログインページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
