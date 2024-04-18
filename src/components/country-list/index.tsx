'use client'

import { CountryCard } from '@/components/country-card'
import { Country } from '@/types/country'
import { SimpleGrid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { CountryListSkeleton } from '../country-list-skeleton'

type FetchCountriesParams = {
  name?: string
  region?: string
}

async function fetchCountries({
  name,
  region,
}: FetchCountriesParams): Promise<Country[]> {
  const baseUrl = 'https://restcountries.com'
  const fields = 'name,region,population,capital,flags'

  let pathname: string = ''

  if (name) {
    pathname = `/v3.1/name/${name}`
  } else if (region) {
    pathname = `/v3.1/region/${region}`
  } else {
    pathname = '/v3.1/all'
  }

  const url = new URL(pathname, baseUrl)
  url.searchParams.set('fields', fields)

  const response = await fetch(url.toString())
  const data = await response.json()

  return data
}

export function CountryList() {
  const searchParams = useSearchParams()

  const name = searchParams.get('name') ?? ''
  const region = searchParams.get('region') ?? ''

  const { data: countries, isLoading } = useQuery({
    queryKey: ['countries', name, region],
    queryFn: () => fetchCountries({ name, region }),
  })

  if (isLoading) {
    return <CountryListSkeleton />
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md" my="xl">
      {countries?.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </SimpleGrid>
  )
}
