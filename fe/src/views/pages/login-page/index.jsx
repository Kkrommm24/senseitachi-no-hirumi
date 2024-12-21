import auth from 'api/auth';
import { setToken, setUserId } from 'helper/storage';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
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
      console.log('Đăng nhập thành công:', response.data);
      setToken(response.data.token);
      setUserId(response.data.userId);
      navigate('/');
    } catch (err) {
      console.error('Đăng nhập thất bại:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'ログインに失敗しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-[#fb524f] mb-6">ログイン</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex items-center">
            <label
              htmlFor="username"
              className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right"
            >
              ユーザー名
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder="ユーザー名を入力してください"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <label
              htmlFor="password"
              className="flex-shrink-0 w-24 text-sm font-medium text-gray-700 text-right"
            >
              パスワード
            </label>
            <div className="mx-3 h-6 w-px bg-gray-300"></div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fb524f] focus:border-[#fb524f] shadow-sm"
              placeholder="パスワードを入力してください"
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
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>

        {/* Thêm link đăng ký tài khoản dưới form đăng nhập */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            アカウントをお持ちでないですか？{' '}
            <Link to="/signup" className="text-[#fb524f] hover:underline">
              新しいアカウントを作成
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
