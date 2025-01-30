import Layout from "./component/Layout"
import HomeSection from "./component/HomeSection"
import AboutSection from "./component/AboutSection"
import SkillsSection from "./component/SkillsSection"
import EducationSection from "./component/EducationSection"
import ExperienceSection from "./component/ExperienceSection"
import ProjectsSection from "./component/ProjectsSection"
import ContactSection from "./component/ContactSection"

export default function Portfolio() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

