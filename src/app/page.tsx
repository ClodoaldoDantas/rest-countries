import { CountryCard } from '@/components/country-card'
import { Filters } from '@/components/filters'
import { Container, SimpleGrid } from '@mantine/core'

export default function Home() {
  return (
    <Container size="xl" component="main" py="xl">
      <Filters />

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md" my="xl">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </SimpleGrid>
    </Container>
  )
}
