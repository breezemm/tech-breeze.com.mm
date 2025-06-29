import ProjectSection from '@/app/sections/project-section'
import AboutSection from './sections/about-section'
import ContactSection from './sections/contact-section'
import HomeSection from './sections/home-section'

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}
