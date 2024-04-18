import { Container } from '@mantine/core'

type CountryPageParams = {
  params: {
    country: string
  }
}

export default function CountryPage({ params }: CountryPageParams) {
  return (
    <Container size="xl" component="main" py="xl">
      <p>{params.country}</p>
    </Container>
  )
}
