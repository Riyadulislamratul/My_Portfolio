import React from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

const ContactPage = () => {
  return (
    <Section>
      <Container>
        <Reveal direction="up">
          <div className="pl-6">
            <p className="text-brand font-syne font-bold text-lg md:text-[18px]">
              Contact
            </p>
            <h3 className="font-syne font-bold text-3xl md:text-5xl lg:text-[64px] text-heading mt-2.5 mb-8 md:mb-12 leading-18 w-[416px]">
              Let’s connect
            </h3>
          </div>
        </Reveal>
        <div>
          
        </div>
      </Container>
    </Section>
  )
}

export default ContactPage