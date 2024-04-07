'use client'

import { Card, Flex, Image, Text } from '@mantine/core'

export function CountryCard() {
  return (
    <Card shadow="sm" padding="xl">
      <Card.Section>
        <Image src="https://flagcdn.com/w320/de.png" alt="Germany Flag" />
      </Card.Section>

      <Text fw={600} size="lg" mt="md">
        Germany
      </Text>

      <Flex mt="xs" gap={4}>
        <Text fw={500} size="sm">
          Population:
        </Text>
        <Text size="sm">81,770,900</Text>
      </Flex>

      <Flex mt="xs" gap={4}>
        <Text fw={500} size="sm">
          Region:
        </Text>
        <Text size="sm">Europe</Text>
      </Flex>

      <Flex mt="xs" gap={4}>
        <Text fw={500} size="sm">
          Capital:
        </Text>
        <Text size="sm">Berlin</Text>
      </Flex>
    </Card>
  )
}
