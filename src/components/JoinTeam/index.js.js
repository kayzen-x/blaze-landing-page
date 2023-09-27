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
} from '../InfoSection/InfoElements'
import { NavBtnLink } from '../Navbar/NavbarElements'; 

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

const JoinTeam = ({ 
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
    link
}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <TrackVisibility>
                        {({ isVisible }) => (
                          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine> {topLine} </TopLine>
                                    <Heading lightText={lightText}> {headline} </Heading>
                                    <Subtitle darkText={darkText}> {description} </Subtitle>
                                    <BtnWrap> 
                                        <NavBtnLink 
                                            to="/signin"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                        > {buttonLabel} </NavBtnLink>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                          </div>
                        )}
                    </TrackVisibility>

                    <TrackVisibility>
                        {({ isVisible }) => (
                          <div className={isVisible ? "animate__animated animate__bounce" : ""}>
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

export default JoinTeam