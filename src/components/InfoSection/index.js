import '../../App.css';
import TrackVisibility from 'react-on-screen';
import React from 'react'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements'
import { Button } from '../ButtonElement';

// const styles = {
//     container: {
//       backgroundColor: 'red',
//       width: '100%',
//       height: '300px',
//     },
//     mediaQuery: {
//       '@media (min-width: 1150px)': {
//         paddingRight: '20px',
//       },
//     },
//   };

const InfoSection = ({ 
    id, 
    lightBg,
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2,
    animate2
}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <TrackVisibility>
                        {({ isVisible }) => (
                          <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine> {topLine} </TopLine>
                                    <Heading lightText={lightText}> {headline} </Heading>
                                    <Subtitle darkText={darkText}> {description} </Subtitle>
                                    <BtnWrap> 
                                        <Button 
                                            to={"home"}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                        > {buttonLabel} </Button>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                          </div>
                        )}
                    </TrackVisibility>

                    <TrackVisibility>
                        {({ isVisible }) => (
                          <div className={isVisible ? animate2 : ""}>
                            <Column2 id="column2">
                                <ImgWrap>
                                    <Img src={img} alt={alt}/>
                                    </ImgWrap>
                                </Column2>
                            </div>
                        )}
                    </TrackVisibility>
                    
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
    )
}

export default InfoSection