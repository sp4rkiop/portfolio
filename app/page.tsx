import RootLayout from '@/app/layout';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import CursorFollower from '@/components/CursorFollower';
import ExperienceSection from '../components/Experience';
// import ProjectsSection from '../components/ProjectsSection';

export default function Home () {
  return (
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <AboutSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        {/* Add more sections as needed */}
      </main>
  );
}

