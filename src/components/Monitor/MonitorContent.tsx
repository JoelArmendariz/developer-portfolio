import { useState } from "react";
import { Objects } from "../../types/constants";
import LandingPage, { MonitorPages } from "./pages/LandingPage/LandingPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Portfolio/Resume/Resume";

interface MonitorContentProps {
  activeObject: Objects;
  handleZoom: (obj: Objects, shouldRotate?: boolean) => void;
}

export default function MonitorContent({
  activeObject,
  handleZoom,
}: MonitorContentProps) {
  const [currentPage, setCurrentPage] = useState(MonitorPages.portfolio);
  const handleScreenClick = (e: any) => {
    e.stopPropagation();
    if (activeObject !== Objects.MONITOR_FULLSCREEN) {
      handleZoom(Objects.MONITOR);
    }
  };

  const handleChangePage = (newPage: MonitorPages) => setCurrentPage(newPage);

  const renderPage = () => {
    switch (currentPage) {
      case MonitorPages.landingPage:
        return <LandingPage handleChangePage={handleChangePage} />;
      case MonitorPages.portfolio:
        return <Portfolio />;
      case MonitorPages.resume:
        return <Resume />;
      case MonitorPages.typingTest:
      case MonitorPages.other:
      default:
        return <></>;
    }
  };

  return (
    <div
      onClick={handleScreenClick}
      style={{
        top: 0,
        left: 0,
        width: "74rem",
        height: "38rem",
        backgroundColor: "#e1e3ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {renderPage()}
    </div>
  );
}
