import useTypingAnimation from "../../../../hooks/portfolio/useTypingAnimation";

export default function Name() {
  const subTitle = useTypingAnimation("Full stack developer");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontFamily: "Roboto Mono",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontSize: "68px",
          color: "#f0f0f0",
          userSelect: "none",
        }}
      >
        I'm Joel Armendariz
      </span>
      <span
        style={{
          fontFamily: "Roboto Mono",
          letterSpacing: "0.04em",
          fontSize: "13px",
          color: "#a2a2a6",
          userSelect: "none",
        }}
      >
        {subTitle}
      </span>
    </div>
  );
}
