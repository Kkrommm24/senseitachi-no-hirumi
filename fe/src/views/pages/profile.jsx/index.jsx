import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import userApi from '../../../api/user';

const Profile = () => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [passwordError, setPasswordError] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '/assets/images/chef/author/08.jpg'
  });
  const [editData, setEditData] = useState({
    ...userData,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageError, setImageError] = useState(null);

  const inputStyles = "w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300";
  const inputErrorStyles = "w-full h-12 px-4 border border-red-500 ring-1 ring-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300";
  const readOnlyStyles = "text-lg text-gray-600 h-12 px-4 flex items-center bg-gray-50 rounded-lg";

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await userApi.getProfile();
      setUserData({
        name: response.data.name,
        email: response.data.email,
        password: '********',
        avatar: response.data.avatar || '/assets/images/chef/author/08.jpg'
      });
      setEditData({
        name: response.data.name,
        email: response.data.email,
        password: '',
        avatar: response.data.avatar || '/assets/images/chef/author/08.jpg',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.match(/^image\/(jpeg|png|jpg)$/)) {
        setImageError(t('invalid_image_type'));
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImageError(t('image_too_large'));
        return;
      }

      setSelectedFile(file);
      setImageError(null);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      setPasswordError(null);

      let avatarUrl = userData.avatar;

      if (selectedFile) {
        const uploadResponse = await userApi.uploadImage(selectedFile);
        avatarUrl = uploadResponse.data.imageUrl;
      }

      const updateData = {
        name: editData.name,
        email: editData.email,
        avatar: avatarUrl,
      };

      if (editData.currentPassword && editData.newPassword) {
        if (editData.newPassword !== editData.confirmPassword) {
          setPasswordError('New password and confirm password do not match');
          setIsLoading(false);
          return;
        }
        updateData.currentPassword = editData.currentPassword;
        updateData.newPassword = editData.newPassword;
      }
      
      setUserData({
        ...editData,
        password: editData.newPassword ? '********' : userData.password,
        avatar: avatarUrl // Use the avatar URL from response
      });
      
      setIsEditing(false);
      setSelectedFile(null);
      setPreviewUrl(null);
      setImageError(null);
    } catch (err) {
      if (err.response?.data?.message === 'Current password is incorrect') {
        setPasswordError('Current password is incorrect');
      } else {
        setPasswordError('Failed to update profile');
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setIsEditing(false);
    setSelectedFile(null);
    setPreviewUrl(null);
    setImageError(null);
  };

  if (isLoading && !isEditing) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-custom-red mb-8 text-center">{t('profile')}</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-white">
              <img
                src={previewUrl || userData.avatar}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {isEditing && (
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  {t('change_profile_picture')}
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-500 hover:file:bg-red-100 transition-all duration-300 cursor-pointer"
                />
                {imageError && (
                  <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded-lg">
                    <i className="icofont-warning-alt mr-2"></i>
                    {imageError}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Right Side - User Info */}
          <div className="w-full md:w-2/3">
            <div className="space-y-8">
              {/* Input fields */}
              <div className="space-y-6">
                {/* Name field */}
                <div className="transition-all duration-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('name')}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className={inputStyles}
                    />
                  ) : (
                    <p className={readOnlyStyles}>{userData.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div className="transition-all duration-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('email')}
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className={inputStyles}
                    />
                  ) : (
                    <p className={readOnlyStyles}>{userData.email}</p>
                  )}
                </div>

                {/* Password Fields with improved styling */}
                <div className="transition-all duration-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isEditing ? t('current_password') : t('password')}
                  </label>
                  {isEditing ? (
                    <div className="space-y-2">
                      <div className="relative">
                        <input
                          type="password"
                          value={editData.currentPassword}
                          onChange={(e) => {
                            setEditData({ ...editData, currentPassword: e.target.value });
                            setPasswordError(null);
                          }}
                          className={passwordError ? inputErrorStyles : inputStyles}
                          placeholder={t('enter_current_password')}
                        />
                      </div>
                      {passwordError && (
                        <p className="text-red-500 text-sm mt-2 bg-red-50 p-2 rounded-lg">
                          <i className="icofont-warning-alt mr-2"></i>
                          {passwordError}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className={readOnlyStyles}>********</p>
                  )}
                </div>

                {/* New password fields styling */}
                {isEditing && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('new_password')}
                      </label>
                      <div className="relative">
                        <input
                          type={"password"}
                          value={editData.newPassword}
                          onChange={(e) => {
                            setEditData({ ...editData, newPassword: e.target.value });
                            setPasswordError(null); // Clear error when user types
                          }}
                          className={passwordError ? inputErrorStyles : inputStyles}
                          placeholder={t('enter_new_password')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('confirm_password')}
                      </label>
                      <div className="space-y-2">
                        <div className="relative">
                          <input
                            type={"password"}
                            value={editData.confirmPassword}
                            onChange={(e) => {
                              setEditData({ ...editData, confirmPassword: e.target.value });
                              setPasswordError(null); // Clear error when user types
                            }}
                            className={passwordError ? inputErrorStyles : inputStyles}
                            placeholder={t('confirm_new_password')}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-100">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                    >
                      {t('cancel')}
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                    >
                      <i className="icofont-save mr-2"></i>
                      {t('save')}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
                  >
                    <i className="icofont-edit mr-2"></i>
                    {t('edit')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;