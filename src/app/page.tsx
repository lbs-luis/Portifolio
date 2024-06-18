import ContactSection from '@/components/ContactSection'
import DemonstrationSection from '@/components/DemonstrationSection'
import HeroSection from '@/components/HeroSection'
import ScopeSection from '@/components/ScopeSection'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <div className="w-full h-fit flex flex-col relative bg-body-gradient">
        <DemonstrationSection />
        <ScopeSection />
        <ContactSection />
      </div>
    </main>
  )
}
