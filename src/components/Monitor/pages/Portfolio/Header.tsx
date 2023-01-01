import { useState } from "react";

export enum Tabs {
  home,
  resume,
  about,
  contact,
}

export default function Header({
  selectTab,
}: {
  selectTab: (tab: Tabs) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "4rem",
        paddingRight: "1rem",
        alignItems: "center",
      }}
    >
      <HeaderButton onClick={() => selectTab(Tabs.home)} label="Home" />
      <HeaderButton onClick={() => selectTab(Tabs.resume)} label="Resume" />
      <HeaderButton onClick={() => selectTab(Tabs.about)} label="About" />
    </div>
  );
}

function HeaderButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "Roboto Mono",
        height: "2rem",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        margin: "0 1rem",
        color: hover ? "#a2a2a6" : "#f0f0f0",
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </span>
  );
}
