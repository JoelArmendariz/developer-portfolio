import ResumeSection from "./ResumeSections";

const sections = [
  {
    title: "Data Requiem - Full Stack Engineer - Tech Lead",
    date: "May 2021 - PRESENT",
    bullets: [
      "- Own and develop React/Typescript/Next.js UI codebase, designing and implementing new features to meet project requirements",
      "- Own and develop RESTful API development using a Data Access Object pattern with Python3/FastAPI to query data scraped from the Edgar database for company filings and public financial data",
      "- Roll up large amounts of organized data in UI data tables in a concise, user-friendly manner",
      "- Mentor junior developers with pair programming, code reviews, and weekly syncs to encourage growth and best practices",
    ],
  },
  {
    title: "Evernote - Software Engineer II",
    date: "March 2022 - PRESENT",
    bullets: [
      "- Implement Onboarding experiences for mobile, desktop, and web clients that navigate",
      "- Work with QA to make sure features work as intended across different mobile devices such as iOS vs Android and phone vs tablet/chromebook",
      "- Mentor junior engineer in his first professional development role by scheduling weekly check ins, performing thorough code reviews, and pairing on tricky issues",
      "- Work directly with feature flags to control experiences in live production",
    ],
  },
  {
    title: "IBM - Front-End Engineer",
    date: "Feburary 2020 - March 2022",
    bullets: [
      "- Lead a team of four UI developers to deliver a large feature set for the Maximo Asset Monitor product",
      "- Conduct architecture planning meetings to ensure technical success end to end",
      "- Advocate for a migration to Typescript across React/Redux code base",
      "- Delegate and assign user stories to ensure rapid execution of new customer requirements",
      "- Perform code reviews to ensure that only high quality/well-tested code is delivered",
      "- Resolve issues/bug reports quickly and with high quality code",
      "- Utilize TDD concentrating on Jest and React Testing Library, resulting in an increase from 30% to 70% test coverage",
      "- Develop and maintain test automation with Cypress for end to end test coverage",
      "- Contribute heavily to the open-source library Carbon Addons IoT React as our main component library, developing stable, reusable components in Storybook",
    ],
  },
];

export default function Resume() {
  return (
    <div
      style={{
        textAlign: "start",
        height: "100%",
        width: "100%",
        backgroundColor: "#e1e3ee",
        padding: "0 2rem",
        overflow: "scroll",
      }}
    >
      <h1>Joel Armendariz</h1>
      <h5>EXPERIENCE</h5>
      {sections.map((section) => (
        <ResumeSection {...section} />
      ))}
    </div>
  );
}
