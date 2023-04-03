module.exports = {
  error: require('./errors'),
  auth: require('./auth'),
  recipe: require('./recipe'),
  upload: require('./uploadRecipeImage'),
  googleAuth: require('./google-auth'),
  search: require('./search'),
  ingredients: require('./ingredients'),
  pagination: require('./pagination'),
  user: require('./user'),
  uploadAvatar: require('./uploadAvatar'),
  isReqDataMissing: require('./isReqDataMissing'),
  isUploadAvatarError: require('./handleUploadAvatarError'),
};
