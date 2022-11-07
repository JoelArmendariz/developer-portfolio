interface ResumeSectionProps {
  title: string;
  date: string;
  bullets: string[];
}

export default function ResumeSection({
  title,
  date,
  bullets,
}: ResumeSectionProps) {
  return (
    <div>
      <h4>{title}</h4>
      <span>{date}</span>
      {bullets.map((bullet) => (
        <p>{bullet}</p>
      ))}
    </div>
  );
}
