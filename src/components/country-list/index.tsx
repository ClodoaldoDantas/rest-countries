'use client'

import { CountryCard } from '@/components/country-card'
import { SimpleGrid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

export type Country = {
  capital: string[]
  name: {
    common: string
  }
  population: number
  region: string
  flags: {
    png: string
    svg: string
  }
}

async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,region,population,capital,flags'
  )

  const data = await response.json()

  return data
}

export function CountryList() {
  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: () => fetchCountries(),
  })

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md" my="xl">
      {countries?.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </SimpleGrid>
  )
}
