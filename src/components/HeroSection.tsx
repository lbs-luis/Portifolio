import React from 'react'
import Image from 'next/image'
import linkedin_logo from '/public/icons/linkedin-logo.svg'
import github_logo from '/public/icons/github-logo.svg'
import document_icon from '/public/icons/document-icon.svg'

const HeroSection = () => {
  const icons = [linkedin_logo, github_logo, document_icon]
  const links = [
    'https://www.linkedin.com/in/luisfelipelbs/',
    'https://github.com/luis-lbs',
    'https://www.linkedin.com/company/cacau-show/',
  ]
  return (
    <div className="w-full h-screen text-white text-center bg-circle-gradient from-blue-400 to-blue-800 flex items-center justify-center">
      <div className="flex flex-col w-fit h-fit absolute">
        <p className="w-[351.38px] md:w-fit text-start text-lg md:text-2xl font-bold text-white/80 mx-auto md:mr-0 md:ml-2 mb-2">
          OI 👋 EU SOU O{' '}
          <a href={links[0]} target="_blank">
            @LUIS
          </a>
        </p>
        <div className="flex gap-[6px] md:gap-3 w-fit h-fit absolute right-[2rem] md:right-[2.2rem] top-[-0.5rem] md:top-[-1.2rem]">
          {icons.map((icon, i) => (
            <a
              href={i <= 1 ? links[i] : '/CV-LUIS-FELIPE.pdf'}
              download
              target="_blank"
              key={`icon_${i}`}
            >
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
          <a href={links[2]} target="_blank">
            @CACAU-SHOW
          </a>{' '}
          com 5 anos de experiência
        </p>
      </div>
    </div>
  )
}

export default HeroSection
