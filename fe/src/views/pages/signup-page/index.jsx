import auth from 'api/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
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
      setError('パスワードが一致しません');
      setLoading(false);
      return;
    }

    try {
      const response = await auth.register({
        email: formData.email,
        password: formData.password,
        name: formData.name
      });
      console.log('登録成功:', response.data);
      navigate('/login');
    } catch (err) {
      console.error('登録失敗:', err.response?.data || err.message);
      setError(err.response?.data?.error || '登録に失敗しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-[#fb524f] mb-6">新規登録</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              お名前
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder="お名前を入力してください"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              メール
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder="メールアドレスを入力してください"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              パスワード
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder="パスワードを入力してください"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <label className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right">
              確認用
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder="パスワードを再入力してください"
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
            {loading ? '登録中...' : '登録'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            すでにアカウントをお持ちですか？{' '}
            <Link to="/login" className="text-[#fb524f] hover:underline">
              ログイン
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
