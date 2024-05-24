import ContactSection from '@/components/ContactSection'
import DemonstrationSection from '@/components/DemonstrationSection'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <DemonstrationSection />
      <ContactSection />
    </main>
  )
}
