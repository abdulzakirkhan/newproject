import { UserRole } from '@config/constants';
import { LANGUAGES } from '@modules/Shared/constants';
import { createSlice } from '@reduxjs/toolkit';
import { OneSignal } from 'react-native-onesignal';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    referralUserId: null,
    isLockEnable: false,
    language: LANGUAGES.find((e) => e.code == 'en'),
    isShowOnboarding: true,
    isDisableSignup:false,
  },
  reducers: {
    ChangeUser: (state, action) => {
      if (!action.payload) state.user = action.payload;
      else
        state.user = {
          role: [UserRole.client, UserRole.agent],
          // role: [UserRole.client],
          activeRole: UserRole.client,
          ...action.payload,
        };
      if (action?.payload?.userid) {
        try {
          OneSignal.User.addTag('userId', action?.payload?.userid);
        } catch (error) {}
      }
    },
    changeReferralUserId: (state, action) => {
      state.referralUserId = action.payload;
    },
    changeIsLockEnable: (state, action) => {
      state.isLockEnable = action.payload;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeIsShowOnboarding: (state, action) => {
      state.isShowOnboarding = action.payload;
    },
    changeIsDisableSignup:(state, action) => {
      state.isDisableSignup = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     authApi.endpoints.login.matchFulfilled,
  //     (state, { payload }) => {
  //       state.user = payload?.data;
  //     }
  //   );
  // },
});

export const {
  ChangeUser,
  changeReferralUserId,
  changeIsLockEnable,
  changeLanguage,
  changeIsShowOnboarding,
  changeIsDisableSignup,
} = authSlice.actions;

export default authSlice.reducer;
