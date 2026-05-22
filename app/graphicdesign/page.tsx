import { GdHeadings } from "../components/gdProjects/GdHeadings";

export default function GraphicDesign({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="h-full flex justify-center items-center">
      <GdHeadings />
      {children}
    </section>
  );
}
