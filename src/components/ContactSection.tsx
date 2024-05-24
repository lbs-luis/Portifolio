'use client'
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import email_animation from '@/assets/email-animation.json'
import party_animation from '@/assets/party-animation.json'
import { useRef } from 'react'
import copyToClipboardAndroid from '@/utils/copyToClipboardAndroid'

export default function ContactSection() {
  const emailCopyAnimation = () => {
    const button = document.querySelector(
      '.copyEmailButton'
    ) as HTMLElement | null

    if (button) {
      const email = 'luis.felipe.lbs@gmail.com'
      try {
        navigator.clipboard.writeText(email)
      } catch (e) {
        copyToClipboardAndroid(email)
      }

      button.style.background = '#ffffff'
      button.style.color = '#4ade80'
      button.innerText = '🎉 Copiado! 🎉'
      play_party()

      setTimeout(() => {
        button.style.background = '#FF8E3A'
        button.style.color = '#ffffff'
        button.innerText = 'copiar e-mail'
      }, 1000)
    }
  }

  const left_party: any = useRef(null)
  const right_party: any = useRef(null)

  const play_party = () => {
    left_party.current!.animationContainerRef.current.style.opacity = '1'
    right_party.current!.animationContainerRef.current.style.opacity = '1'

    left_party.current.play()
    right_party.current.play()
  }

  const pause_party = () => {
    left_party.current!.animationContainerRef.current.style.opacity = '0'
    right_party.current!.animationContainerRef.current.style.opacity = '0'

    left_party.current.pause()
    right_party.current.pause()
  }

  return (
    <section className="flex flex-col  w-full h-screen bg-gradient-to-b from-purple-100 to-[#fdba74] pb-[100px]  gap-[5rem] xl:gap-[14rem] items-center justify-center">
      <div className="flex flex-col md:flex-row w-fit h-fit gap-8">
        <Lottie
          className="w-full max-w-[300px]"
          animationData={email_animation}
          loop={true}
        />
        <div className="flex flex-col w-fit h-fit self-center gap-2">
          <a href="mailto:luis.felipe.lbs@gmail.com">
            <h2 className="text-white font-semibold text-xl  underline">
              luis.felipe.lbs@gmail.com
            </h2>
          </a>
          <button
            onClick={emailCopyAnimation}
            className="copyEmailButton bg-[#FF8E3A] text-white p-2 text-base rounded-sm transition-all duration-75 hover:animate-scale-up-down"
          >
            copiar e-mail
          </button>
        </div>
      </div>
      <div className="w-full h-fit flex flex-row justify-between absolute bottom-0">
        <Lottie
          lottieRef={left_party}
          className="w-full max-w-[400px] opacity-0"
          animationData={party_animation}
          loop={true}
          onLoopComplete={pause_party}
          autoplay={false}
        />
        <Lottie
          lottieRef={right_party}
          className="w-full max-w-[400px] scale-x-[-1] opacity-0"
          animationData={party_animation}
          loop={true}
          autoplay={false}
        />
      </div>
    </section>
  )
}
