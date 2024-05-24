import React from 'react'
import Image from 'next/image'

import agendar_demonstration from '/public/mockups/agendar-demonstration.png'
import tsnet_demonstration from '/public/mockups/tsnet-desmontration.png'
import github_logo from '/public/icons/github-logo.svg'

const DemonstrationSection = () => {
  return (
    <>
      <div className="w-full h-[20px] bg-[#3B65B0]/10 backdrop-blur-3xl  mt-[-10px] mb-[-10px]" />
      <div className="h-fit xl:h-screen bg-gradient-to-b from-[#3B65B0] to-purple-100  px-4 py-8 flex flex-col xl:flex-row w-full gap-[5rem] xl:gap-[14rem] items-center justify-center">
        <div className="flex flex-col w-full max-w-[450px]">
          <div className="w-full flex justify-center gap-4 mt-10 xl:mt-0">
            <h4 className="text-white/80 uppercase font-semibold text-lg w-fit">
              Agendar descomplicado
            </h4>
            <a href="https://github.com/luis-lbs/AgendaR" target="_blank">
              <Image
                className="opacity-80 hover:scale-110 transition-transform duration-200 cursor-pointer  w-[32px] h-[32px]"
                src={github_logo.src}
                width={55}
                height={55}
                alt="icone de rede social"
              />
            </a>
          </div>

          <a href="https://agendar-descomplicado.vercel.app/" target="_blank">
            <Image
              className="w-full max-w-[450px]"
              src={agendar_demonstration.src}
              width={600}
              height={0}
              alt="Celular e tablet demonstrando um projeto"
            />
          </a>
          <p className="text-base text-white/80 px-4">
            permita que seus clientes reservem hororário na sua agenda de forma
            rápida e dinâmica.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[450px]">
          <div className="w-full flex justify-center gap-4">
            <h4 className="text-white/80 uppercase font-semibold text-lg w-fit">
              BLOG TSNet Insights
            </h4>
            <a href="https://github.com/luis-lbs/TSNet-blog" target="_blank">
              <Image
                className="opacity-80 hover:scale-110 transition-transform duration-200 cursor-pointer  w-[32px] h-[32px]"
                src={github_logo.src}
                width={55}
                height={55}
                alt="icone de rede social"
              />
            </a>
          </div>
          <a href="https://tsnetservicosdetelecom.net.br/" target="_blank">
            <Image
              className="w-full max-w-[450px]"
              src={tsnet_demonstration.src}
              width={600}
              height={0}
              alt="Celular e tablet demonstrando um projeto"
            />
          </a>

          <p className="text-base text-white/80 px-4">
            Seu portal de noticias sobre telecom e evolução da web.
          </p>
        </div>
      </div>
    </>
  )
}

export default DemonstrationSection
