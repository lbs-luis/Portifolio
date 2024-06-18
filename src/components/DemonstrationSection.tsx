import React from 'react'
import Image from 'next/image'

import { projects } from './projects'
import github_logo from '/public/icons/github-logo.svg'

const DemonstrationSection = () => {
  return (
    <>
      <section className="w-full h-fit xl:h-screen px-4 py-8 flex flex-col xl:flex-row xl:gap-[14rem] items-center justify-center">
        {projects.map((project) => (
          <div className="flex flex-col w-full max-w-[450px] mt-32 xl:mt-0">
            <div className="w-full flex justify-center gap-4">
              <h4 className="text-white/80 uppercase font-semibold text-lg w-fit">
                {project.Title}
              </h4>
              <a href={project.GithubUrl} target="_blank">
                <Image
                  className="opacity-80 hover:scale-110 transition-transform duration-200 cursor-pointer  w-[32px] h-[32px]"
                  src={github_logo}
                  width={55}
                  height={55}
                  alt="Icone do github"
                />
              </a>
            </div>
            <a href={project.LiveUrl} target="_blank">
              <Image
                className="w-full max-w-[450px]"
                src={project.MockupUrl}
                blurDataURL={project.MockupBlurUrl}
                width={600}
                height={0}
                alt="Imagem de um celular e um tablet demonstrando o projeto"
              />
            </a>

            <p className="text-base text-white/80 px-4">
              {project.Description}
            </p>
          </div>
        ))}
      </section>
    </>
  )
}

export default DemonstrationSection
