'use client'

import { Card, Flex, Image, Text } from '@mantine/core'
import { Country } from '@/types/country'
import Link from 'next/link'

export function CountryCard({ country }: { country: Country }) {
  const countryName = country.name.common.toLowerCase()

  return (
    <Link href={`/${countryName}`} style={{ textDecoration: 'none' }}>
      <Card shadow="sm" padding="xl">
        <Card.Section>
          <Image
            height={150}
            w="100%"
            fit="cover"
            src={country.flags.svg}
            alt={`${country.name.common} Flag`}
          />
        </Card.Section>

        <Text fw={600} size="lg" mt="md">
          {country.name.common}
        </Text>

        <Flex mt="xs" gap={4}>
          <Text fw={500} size="sm">
            Population:
          </Text>
          <Text size="sm">
            {new Intl.NumberFormat().format(country.population)}
          </Text>
        </Flex>

        <Flex mt="xs" gap={4}>
          <Text fw={500} size="sm">
            Region:
          </Text>
          <Text size="sm">{country.region}</Text>
        </Flex>

        <Flex mt="xs" gap={4}>
          <Text fw={500} size="sm">
            Capital:
          </Text>
          <Text size="sm">{country.capital.join(', ')}</Text>
        </Flex>
      </Card>
    </Link>
  )
}
