import RootLayout from '@/app/layout';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import CursorFollower from '@/components/CursorFollower';
// import ExperienceSection from '../components/ExperienceSection';
// import ProjectsSection from '../components/ProjectsSection';

export default function Home () {
  return (
      <main className="flex flex-col items-center px-4">
        <AboutSection />
        {/* <ExperienceSection />
        <ProjectsSection /> */}
        {/* Add more sections as needed */}
      </main>
  );
}

