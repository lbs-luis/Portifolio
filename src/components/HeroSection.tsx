import React from 'react'
import Image from 'next/image'
import linkedin_logo from '/public/icons/linkedin-logo.svg'
import github_logo from '/public/icons/github-logo.svg'
import document_icon from '/public/icons/document-icon.svg'

const HeroSection = () => {
  const icons = [linkedin_logo, github_logo, document_icon]
  const links = [
    'https://www.linkedin.com/in/lbs-luis',
    'https://github.com/lbs-luis',
    process.env.CV_URL,
  ]
  const cacauShowLinkedInUrl = 'https://www.linkedin.com/company/cacau-show/'
  return (
    <section className="section w-full h-screen flex items-center justify-center text-white text-center bg-circle-gradient from-blue-400 to-blue-800 ">
      <div className="flex flex-col w-fit h-fit">
        <p className="w-[351.38px] md:w-fit text-start text-lg md:text-2xl font-bold text-white/80 mx-auto md:mr-0 md:ml-2 mb-2 relative top-[2rem] md:top-[3rem]">
          OI 👋 EU SOU O{' '}
          <a href={links[0]} target="_blank">
            @LUIS
          </a>
        </p>
        <div className="flex gap-[6px] md:gap-3 w-fit h-fit relative top-[-0.75rem] md:top-[-0.5rem] left-[13.5rem] md:left-[31rem]">
          {icons.map((icon, i) => (
            <a href={links[i]} target="_blank" key={`icon_${i}`}>
              <Image
                className="hover:scale-110 transition-transform duration-200 cursor-pointer  w-[32px] h-[32px] md:w-full md:h-full"
                src={icon.src}
                width={55}
                height={55}
                alt="icone de rede social"
              />
            </a>
          ))}
        </div>
        <h1 className="text-[4rem] mx-auto leading-[3.9rem] md:text-9xl text-justify font-extrabold md:leading-[6.4rem]">
          FRONT-END
          <br />
          DEVELOPER
        </h1>
        <p className="w-[351.38px] md:w-fit text-end self-end text-lg md:text-2xl font-bold text-white/80 md:mr-2 mt-2 uppercase">
          na{' '}
          <a href={cacauShowLinkedInUrl} target="_blank">
            @CACAU-SHOW
          </a>{' '}
          com 5 anos de experiência
        </p>
      </div>
    </section>
  )
}

export default HeroSection
