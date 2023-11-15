const authInitialState = {
  user: {
    email: '',
    password: '',
    userName: '',
    id: null,
    sid: null,
  },
  isLoggedIn: false,
  isSideBarOpen: false,
  isLoading: false,
  token: '',
  refreshToken: '',
  prevToken: '',
  error: '',
};

export default authInitialState;