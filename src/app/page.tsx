import { CountryList } from '@/components/country-list'
import { Filters } from '@/components/filters'
import { Container } from '@mantine/core'

export default function Home() {
  return (
    <Container size="xl" component="main" py="xl">
      <Filters />
      <CountryList />
    </Container>
  )
}
