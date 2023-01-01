import ResumeSection from "./ResumeSections";
import MouseIcon from "@mui/icons-material/Mouse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Timeline from "./Timeline";

export default function Resume() {
  return (
    <div
      style={{
        textAlign: "start",
        height: "100%",
        width: "100%",
        backgroundColor: "#26262d",
        padding: "0 2rem",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginTop: "6rem",
            fontFamily: "Roboto Mono",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            fontSize: "68px",
            color: "#f0f0f0",
            userSelect: "none",
          }}
        >
          Resume
        </span>
        <div
          style={{
            marginTop: "6rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MouseIcon style={{ color: "#a2a2a6" }} />
          <ArrowDropDownIcon style={{ color: "#a2a2a6" }} />
        </div>
      </div>
      <h5
        style={{
          color: "#cccccf",
        }}
      >
        EXPERIENCE
      </h5>
      <Timeline />
      {/* {sections.map((section) => (
        <ResumeSection {...section} />
      ))} */}
    </div>
  );
}
