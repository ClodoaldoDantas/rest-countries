import { Badge, Box, Container, Flex, Group, Image, Text } from '@mantine/core'
import { BackButton } from './back-button'
import { Info } from './info'
import { Country } from '@/types/country'

type CountryPageParams = {
  params: {
    country: string
  }
}

async function fetchCountry(name: string): Promise<Country> {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)

  if (!response.ok) {
    throw new Error('Failed to fetch country data')
  }

  const [data] = await response.json()

  return data
}

export default async function CountryPage({ params }: CountryPageParams) {
  const data = await fetchCountry(params.country)

  const capital = data.capital.join(', ')
  const topLevelDomain = data.tld.join(', ')

  const currencies = Object.values(data.currencies)
    .map(currency => currency.name)
    .join(', ')

  const languages = Object.values(data.languages).join(', ')

  return (
    <Container size="xl" component="main" py="xl">
      <Box mb="xl">
        <BackButton to="/">Back</BackButton>
      </Box>

      <Flex
        direction={{ xs: 'column', md: 'row' }}
        align={{ xs: 'flex-start', md: 'center' }}
        wrap="wrap"
        gap="xl"
      >
        <Image
          mah={400}
          w={{ xs: '100%', sm: 'auto' }}
          fit="contain"
          radius="md"
          src={data.flags.svg}
          alt={`${data.name.common} Flag`}
        />

        <Box flex={1}>
          <Text size="xl" mb="md" fw={700} component="h1">
            {data.name.common}
          </Text>

          <Box mb="xl">
            <Info label="Official Name" value={data.name.official} />
            <Info
              label="Population"
              value={new Intl.NumberFormat().format(data.population)}
            />
            <Info label="Region" value={data.region} />
            <Info label="Sub Region" value={data.subregion} />
            <Info label="Capital" value={capital} />
            <Info label="Top Level Domain" value={topLevelDomain} />
            <Info label="Currencies" value={currencies} />
            <Info label="Languages" value={languages} />
          </Box>

          <Flex wrap="wrap" align="center" gap="md">
            <Text fw={500} component="strong">
              Border Countries:
            </Text>

            <Group gap="xs">
              {data.borders.map(border => (
                <Badge variant="default" key={border}>
                  {border}
                </Badge>
              ))}
            </Group>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}
