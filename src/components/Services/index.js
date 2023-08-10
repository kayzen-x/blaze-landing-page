import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1> Our Services </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Resource Sharing </ServicesH2>
              <ServicesP> Sharing valuable resources and guides to help members enhance their technical skills and knowledge. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2> Networking Events </ServicesH2>
              <ServicesP> Hosting meetups, conferences, and networking sessions where members can connect and interact. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2> Project Collaboration </ServicesH2>
              <ServicesP> Creating opportunities for members to collaborate on tech projects, fostering teamwork and shared learning experiences. </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services