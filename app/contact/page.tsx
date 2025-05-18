import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import { Mail, MapPinCheck, Phone } from 'lucide-react'
import React from 'react'

const infoData = [
  {
    title: 'Phone',
    description: '(+91) 8590087085',
    icon: <Phone className="text-white" />
  },
  {
    title: 'Email',
    description: 'danybinu2005@gmail.com',
    icon: <Mail className="text-white" />
  },
  {
    title: 'Address',
    description: `Nellimukalil Thekkethil Binu Villa, Kizhakketheruvu, Chengamanadu P.O., Kottarakkara, Kollam, Kerala, India - 691557`,
    icon: <MapPinCheck className="text-white" />
  }
]

const ContactPage = () => {
  return (
    <Container className='py-5 md:py-10 flex flex-col md:flex-row gap-6 md:gap-14'>
      <div className='w-full md:w-2/3'>
        <ContactForm />
      </div>

      <div className='w-full md:w-1/3 flex flex-col justify-center gap-6'>
        {infoData.map((item) => (
          <div key={item.title} className='flex items-start gap-4'>
            <div className='bg-lightSky/10 p-3 rounded-md'>
              {item.icon}
            </div>
            <div className='flex flex-col'>
              <h3 className='text-sm text-white/60 font-medium'>{item.title}</h3>
              <p className='text-white break-words whitespace-pre-line'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default ContactPage
