import React from 'react';

export type Tabs = 'about' | 'skill' | 'service' | 'contact';

export type MenuContextValue = {
  open: boolean;
  tab: Tabs;
  switchTab: (tab: Tabs) => void;
  toggleMenu: () => void;
};

const MenuContext = React.createContext<MenuContextValue>({
  open: false,
  tab: 'about',
  switchTab: (tab: Tabs) => {},
  toggleMenu: () => {},
});
MenuContext.displayName = 'MenuContext';

type Props = {
  children: React.ReactNode;
};

export function MenuProvider({ children }: Props) {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState<Tabs>('about');

  const toggleMenu = React.useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const switchTab = React.useCallback((tab: Tabs) => {
    setTab(tab);
  }, []);

  const value = React.useMemo(() => ({ open, tab, toggleMenu, switchTab }), [
    open,
    tab,
    toggleMenu,
    switchTab,
  ]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu(): MenuContextValue {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error(`useMenu must be used within a MenuProvider`);
  }
  return context;
}
