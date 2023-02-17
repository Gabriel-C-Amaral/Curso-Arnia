import { Container, Paragraph, Title } from "./styles"

type ServiceCardProps = {
  img: string
  title: string
  description: string
}

const ServiceCard = ({ img, title, description }: ServiceCardProps) => (
  <Container>
    <img src={img} width={91} height={91} />
    <Title>{title}</Title>
    <Paragraph>{description}</Paragraph>
  </Container>
)

export default ServiceCard
