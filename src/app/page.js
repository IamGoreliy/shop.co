'use client';
import {Box, Container} from "@mui/material";
import {HeroTitle} from "@/app/component/homePageComponent/HeroTitle";
import {Ticker} from "@/app/component/homePageComponent/Ticker";
import {SectionMarketplace} from "@/app/component/homePageComponent/SectionMarketplace";
import {dataOnSale, bestsellers} from "@/app/component/homePageComponent/dataForMarketplace";
import {useContext, useEffect, useRef, useState} from "react";
import {PositionScrollYContext} from "@/app/template";
import {FindStyles} from "@/app/component/homePageComponent/FindStyles";
import {CommentsForOurClients} from "@/app/component/homePageComponent/CommentsForOurClients";
import {animationSection} from "@/utils/sectionAnimation";


const smoothScrolling = () => {
    window.scrollBy({
        top: 10,
        left: 0,
        behavior: "smooth",
    })
}

export default function Home() {
    const positionScrollY = useContext(PositionScrollYContext);
    const [showSectionOnSale, setShowSectionOnSale] = useState(false);
    const [showSectionBestsellers, setShowSectionBestsellers] = useState(false);
    const [showSectionFindStyle, setShowSectionFindStyle] = useState(false);
    const [showSectionComments, setShowSectionComments] = useState(false);
    const [positionYSectionFindStyle, setPositionYSectionFindStyle] = useState(null);
    const [positionYSectionComments, setPositionYSectionComments] = useState(null);
    const [positionYSectionOnSale, setPositionYSectionOnSale] = useState(null);
    const [positionYSectionBestsellers, setPositionYSectionBestsellers] = useState(null);
    const sectionOnSale = useRef();
    const sectionBestsellers = useRef();
    const sectionFindStyle = useRef();
    const sectionComments = useRef();

    


    useEffect(() => {
        if (!positionScrollY) {
            smoothScrolling();
        }
        animationSection(
            positionScrollY,
            positionYSectionOnSale,
            positionYSectionBestsellers,
            positionYSectionFindStyle,
            positionYSectionComments,
            setPositionYSectionOnSale,
            setPositionYSectionBestsellers,
            setPositionYSectionFindStyle,
            setPositionYSectionComments,
            setShowSectionOnSale,
            setShowSectionBestsellers,
            setShowSectionFindStyle,
            setShowSectionComments,
            sectionOnSale,
            sectionBestsellers,
            sectionFindStyle,
            sectionComments,
        )
    }, [positionScrollY]);

    return (
      <Box>
          <Box
            sx={{
                backgroundColor: '#F0F0F0',
                width: '100%',
            }}
          >
              <Container
                maxWidth={'1300px'}
                sx={{
                    maxWidth: '1300px',
                }}
              >
                <HeroTitle/>
              </Container>
          </Box>
          <Ticker/>
          <Container
            maxWidth={'1300px'}
            sx={{
                maxWidth: '1300px',
            }}
          >
              <Box
                ref={sectionOnSale}
                sx={{
                    position: 'relative'
                }}
              >
                  <Box
                    sx={{

                        opacity: showSectionOnSale ? 1 : 0,
                        width: '100%',
                        marginTop: showSectionOnSale ? '120px' : '150px',
                        transition: 'opacity 700ms linear, transform 700ms linear, margin-top 700ms linear',
                    }}
                  >
                      <SectionMarketplace
                          goods={dataOnSale}
                          title={'EM PROMOÇÃO'}
                          anchor={'onSale'}
                      />
                  </Box>
              </Box>
              <Box
                  ref={sectionBestsellers}
                  sx={{
                      position: 'relative'
                  }}
              >
                  <Box
                      sx={{
                          opacity: showSectionBestsellers ? 1 : 0,
                          width: '100%',
                          marginTop: showSectionBestsellers ? '120px' : '150px',
                          transition: 'opacity 700ms linear, transform 700ms linear, margin-top 700ms linear',
                      }}
                  >
                      <SectionMarketplace
                          goods={bestsellers}
                          title={'MAIS VENDIDOS'}
                          positionScroll={positionScrollY}
                          anchor={'bestsellers'}
                      />
                  </Box>
              </Box>
              <Box
                  ref={sectionFindStyle}
                  sx={{
                      position: 'relative'
                  }}
              >
                  <Box
                      sx={{
                          opacity: showSectionFindStyle ? 1 : 0,
                          width: '100%',
                          marginTop: showSectionFindStyle ? '120px' : '150px',
                          transition: 'opacity 700ms linear, transform 700ms linear, margin-top 700ms linear',
                      }}
                  >
                      <FindStyles/>
                  </Box>
              </Box>
              <Box
                  ref={sectionComments}
                  sx={{
                      position: 'relative'
                  }}
              >
                  <Box
                      sx={{
                          opacity: showSectionComments ? 1 : 0,
                          width: '100%',
                          marginTop: showSectionComments ? '120px' : '150px',
                          transition: 'opacity 700ms linear, transform 700ms linear, margin-top 700ms linear',
                      }}
                  >
                      <CommentsForOurClients/>
                  </Box>
              </Box>

          </Container>

      </Box>
    )
};


