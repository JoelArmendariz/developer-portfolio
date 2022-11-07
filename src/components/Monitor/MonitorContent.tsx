import { useState } from "react";
import { Objects } from "../../context/Zoom/ZoomContext";
import LandingPage, { MonitorPages } from "./pages/LandingPage/LandingPage";
import Resume from "./pages/Resume/Resume";

interface MonitorContentProps {
  handleZoom: (obj: Objects, shouldRotate?: boolean) => void;
}

export default function MonitorContent({ handleZoom }: MonitorContentProps) {
  const [currentPage, setCurrentPage] = useState(MonitorPages.landingPage);
  const handleScreenClick = (e: any) => {
    e.stopPropagation();
    handleZoom(Objects.MONITOR);
  };

  const handleChangePage = (newPage: MonitorPages) => setCurrentPage(newPage);

  const renderPage = () => {
    switch (currentPage) {
      case MonitorPages.landingPage:
        return <LandingPage handleChangePage={handleChangePage} />;
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
