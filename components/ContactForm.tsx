'use client'

import React, { useState, useEffect } from 'react'
import Title from './ui/Title'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'

const ContactForm = () => {
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    Name: '',
    Mobile: '',
    Email: '',
    Address: '',
    Message: '',
  })

  // ⏱ Auto-close success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
        setStatus('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleReset = () => {
    setSuccess(false)
    setStatus('')
    setFormData({
      Name: '',
      Mobile: '',
      Email: '',
      Address: '',
      Message: '',
    })
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast.error('Please fill in all required fields.')
      return
    }

    const form = new FormData()
    const currentDateTime = new Date().toLocaleString()
    form.append('Name', formData.Name)
    form.append('Mobile', formData.Mobile)
    form.append('Email', formData.Email)
    form.append('Address', formData.Address)
    form.append('Message', formData.Message)
    form.append('Date', currentDateTime)

    try {
      setIsLoading(true)
      const response = await fetch('https://getform.io/f/bmdmpkla', {
        method: 'POST',
        body: form,
      })

      if (response.ok) {
        setSuccess(true)
        setStatus('Your message has been received. I will get back to you soon!')
        toast.success('Message sent successfully!')
        setFormData({
          Name: '',
          Mobile: '',
          Email: '',
          Address: '',
          Message: '',
        })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="space-y-4">
      <Title className="text-2xl md:text-4xl">Let&apos;s Work Together</Title>
      <p className="text-white/60 text-sm md:text-base">
        I am open towards working or collaborating together in projects.
      </p>

      {success ? (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-6 py-6"
        >
          <div className="border-2 border-lightSky w-20 h-20 rounded-full flex items-center justify-center text-lightSky">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-4xl leading-none font-extrabold text-transparent text-outline">
            Thank You!
          </h2>
          <p className="text-white/70 text-center">{status}</p>
          <Button
            onClick={handleReset}
            className="px-6 py-2 border border-lightSky/20 bg-lightSky/10 text-white/80 hover:border-lightSky hover:text-hoverColor hoverEffect"
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Name"
                name="Name"
                placeholder="Your Name"
                required
                value={formData?.Name}
                onChange={handleChange}
                disabled={isLoading}
                className="disabled:placeholder:text-white/20 disabled:bg-white/10"
              />
              <Input
                type="text"
                id="Mobile"
                name="Mobile"
                placeholder="Your Mobile Number"
                required
                value={formData?.Mobile}
                onChange={handleChange}
                disabled={isLoading}
                className="disabled:placeholder:text-white/20 disabled:bg-white/10"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Email"
                name="Email"
                placeholder="Your Email Address"
                required
                value={formData?.Email}
                onChange={handleChange}
                disabled={isLoading}
                className="disabled:placeholder:text-white/20 disabled:bg-white/10"
              />
              <Input
                type="text"
                id="Address"
                name="Address"
                placeholder="Your Address"
                required
                value={formData?.Address}
                onChange={handleChange}
                disabled={isLoading}
                className="disabled:placeholder:text-white/20 disabled:bg-white/10"
              />
            </div>
            <Textarea
              name="Message"
              id="Message"
              placeholder="Write your Message here"
              required
              value={formData?.Message}
              onChange={handleChange}
              rows={10}
              className="disabled:placeholder:text-white/20 disabled:bg-white/10"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect hover:bg-lightSky/10"
          >
            {isLoading ? 'Submitting Message.....' : 'Send Message'}
          </Button>
        </>
      )}
    </form>
  )
}

export default ContactForm
