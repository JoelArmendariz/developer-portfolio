const ABOUT_CONTENT = [
  "My name is Joel Armendariz. I am a musician turned software engineer.",
  "I am an obsessive learner who is constantly challenging myself to expand my knowledge, and dive head-first into the newest technologies.",
  "Experienced in Agile environments, I thrive on teams to accomplish complex goals in a precise and timely manner.",
  "I am passionate about producing unforgettable user experiences.",
];

export default function About() {
  return (
    <>
      {ABOUT_CONTENT.map((line) => (
        <p style={{ color: "#cccccf" }}>{line}</p>
      ))}
    </>
  );
}
