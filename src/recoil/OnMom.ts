import { atom } from 'recoil';

const Tab_KEY = 'tab';

export interface TabState {
  id: number;
  name: string;
}
const useTabState = atom({
  key: Tab_KEY,
  default: [] as TabState[],
});

export { useTabState };
