'use client'
import React from 'react'
import { ScopeForm } from './ScopeForm'

const ScopeSection = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full h-fit flex flex-col px-[8%] text-white pt-24">
      <div className=" flex flex-col gap-2 h-fit w-fit">
        <p className="text-2xl md:text-3xl font-semibold">
          Quer um site incrível assim?
        </p>
        <h1 className="w-fit self-end text-3xl md:text-5xl font-extrabold mr-[-5%] md:mr-[-20%] mt-[-10px]">
          Faça um orçamento!
        </h1>
      </div>

      <div className="relaive w-full flex flex-col items-center justify-center my-20">
        <ScopeForm />
      </div>

      <div
        className="flex flex-col gap-2 h-fit w-fit self-end items-center cursor-pointer"
        onClick={scrollToBottom}
      >
        <p className="text-1xl md:text-2xl font-normal underline underline-offset-8">
          entre em contato por e-mail
        </p>
        <p className="text-2xl w-fit">✉️</p>
      </div>
    </section>
  )
}

export default ScopeSection
