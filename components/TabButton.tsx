import React from 'react';
import { NextPage } from 'next';
import { Tabs, useMenu } from '../context/menu';

interface Props {
  id: Tabs;
  title: string;
  inactiveColor: string;
  activeColor: string;
}

const TabButton: NextPage<Props> = ({
  id,
  title,
  inactiveColor,
  activeColor,
}) => {
  const { switchTab, tab } = useMenu();
  const active = tab === id;

  return (
    <button
      className="focus:outline-none overflow-hidden tab-btn"
      id={id}
      onClick={() => {
        switchTab(id);
      }}
      style={{ color: active ? activeColor : inactiveColor }}
    >
      <div className="font-heading tracking-wider uppercase font-light">
        {title}
      </div>
      <div
        className="tab-btn-border"
        style={{
          height: '2px',
          backgroundColor: active ? activeColor : inactiveColor,
        }}
      >
        >
      </div>
      <style jsx>
        {`
          .tab-btn-border {
            transition: transform 0.3s;
            transform: ${active ? 'translateX(0%)' : 'translateX(-100%)'};
          }
          .tab-btn:hover > .tab-btn-border,
          .tab-btn:focus > .tab-btn-border {
            transform: translateX(0%);
          }
        `}
      </style>
    </button>
  );
};

export default TabButton;
