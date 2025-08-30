import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";
import Resumecard from "~/components/Resumecard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return (
    <main>
      <section className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar></Navbar>
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submission and check AI-powered feedback</h2>
        </div>
      
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <Resumecard  key={resume.id} resume={resume}></Resumecard>
          ))}
        </div>
      )}
      </section>
    </main>
  );
}
