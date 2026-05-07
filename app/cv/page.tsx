import Image from "next/image";

export default function Cv() {
  return (
    <section className="h-full flex flex-1 flex-col">
      <iframe
        src="/cv/cv_jesper_ringhog_2026.pdf"
        className="w-full h-full"
      ></iframe>
    </section>
  );
}
