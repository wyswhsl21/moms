import { serviceUser } from './../constants/constans';
import { atom } from 'recoil';

const Tab_KEY = 'tab';
const Close_KEY = 'close';
const User_KEy = 'user';

export interface TabState {
  id: number;
  name: string;
  src: string;
}
export interface CloseState {
  close: any;
}
export interface UserState {
  번호: number;
  프로필: any;
  임직원명: string;
  생년월일: string;
  성별: string;
  연락처: string;
  와우인가입요청: boolean;
  임직원접속여부: boolean;
  부서: string;
  직책: string;
  직위: string;
}
const useTabState = atom({
  key: Tab_KEY,
  default: [] as TabState[],
});
const useCloseState = atom({
  key: Close_KEY,
  default: [] as any,
});
const useUserState = atom({
  key: User_KEy,
  default: serviceUser as UserState[],
});

export { useTabState, useCloseState, useUserState };
