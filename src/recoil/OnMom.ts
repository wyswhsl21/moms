import { atom } from 'recoil';

const Tab_KEY = 'tab';
const Close_KEY = 'close';

export interface TabState {
  id: number;
  name: string;
  src: string;
}
export interface CloseState {
  close: any;
}
const useTabState = atom({
  key: Tab_KEY,
  default: [] as TabState[],
});
const useCloseState = atom({
  key: Close_KEY,
  default: [] as any,
});

export { useTabState, useCloseState };
