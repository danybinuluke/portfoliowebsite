import React from 'react'
import Container from '@/components/Container'
import Title from '@/components/ui/Title'
import { skillsData } from '@/constants'

const SkillsPage = () => {
  return (
    <div className='min-h-[80vh] py-5 md:py-10'>
      <Container>
        <Title> Skills I Possess </Title>
        <div className='grid grid-rows-1 md:grid-cols-2 gap-5 md:gap-12'>
          {skillsData.map((item) => (
            <div
              key={item.id}
              className='flex flex-col gap-2 bg-lightSky/5 p-6 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md shadow-lightSky/10 group hover:shadow-lg hoverEffect'
            >
              <div className='flex items-center justify-between'>
                <p className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect'>
                  {item.id}
                </p>
                <img
                  src={item.logo}
                  alt={item.title}
                  className='w-10 h-10 object-contain'
                />
              </div>
              <h2 className='font-semibold text-white'>{item.title}</h2>
              <p className='text-sm md:text-base text-white/80 mt-1'>
                {item.description}
              </p>
              <div className='border-b border-b-white/20 mt-2'></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default SkillsPage
