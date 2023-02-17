import styled from "styled-components"
import { fontSizes } from "../../constants/fontSizes"

const h3 = "32px"

export const Container = styled.div`
  p {
    font-size: ${fontSizes.p};
  }
  &:hover {
    cursor: pointer;
  }
`

export const Title = styled.h3<{ size: "SMALL" | "LARGE" }>`
  font-size: ${({ size }) => (size === "SMALL" ? "18px" : "32px")};
`

export const Input = styled.input`
  border-radius: 10px;
`
