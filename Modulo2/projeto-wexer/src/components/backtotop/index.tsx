import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  function handleScroll() {
    if (window.pageYOffset > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const IfButton = styled.div`
    position: relative;
    bottom: 20px;
    z-index: 999;
    /* right: 50%; */
    width: 175px;
    height: 27px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    margin: 70px;
  `
  const StyledButton = styled.div`
    :hover {
      cursor: pointer;
    }
    display: flex;
    justify-content: space-around;
  `

  return (
    <IfButton>
      {showButton && (
        <StyledButton onClick={scrollToTop}>
          <img src="src\images\arrowDoubleUP.svg" /> Voltar para o topo
        </StyledButton>
      )}
    </IfButton>
  )
}
