import { useState } from "react";
import Resume from "./Resume/Resume";
import About from "./About";
import Header, { Tabs } from "./Header";
import Name from "./Name";

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState(Tabs.home);
  const handleSelectTab = (tab: Tabs) => {
    setCurrentTab(tab);
  };

  const renderTab = () => {
    switch (currentTab) {
      case Tabs.home:
        return <Name />;
      case Tabs.resume:
        return <Resume />;
      case Tabs.about:
        return <About />;
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header selectTab={handleSelectTab} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "#26262d",
        }}
      >
        {renderTab()}
      </div>
    </div>
  );
}
