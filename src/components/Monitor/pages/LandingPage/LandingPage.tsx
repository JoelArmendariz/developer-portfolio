export enum MonitorPages {
  landingPage,
  resume,
  portfolio,
  typingTest,
  other,
}

interface LandingPageProps {
  handleChangePage: (newPage: MonitorPages) => void;
}

export default function LandingPage({ handleChangePage }: LandingPageProps) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <button onClick={() => handleChangePage(MonitorPages.resume)}>
        resume
      </button>
      <button onClick={() => handleChangePage(MonitorPages.typingTest)}>
        typing test
      </button>
      <button onClick={() => handleChangePage(MonitorPages.other)}>
        other
      </button>
    </div>
  );
}
