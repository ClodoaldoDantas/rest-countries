import { Flex, Select, TextInput } from '@mantine/core'
import { Search } from 'lucide-react'

export function Filters() {
  return (
    <Flex wrap="wrap" gap="xs" align="center" justify="space-between">
      <TextInput
        placeholder="Search for a country…"
        leftSection={<Search size={20} />}
      />

      <Select
        placeholder="Filter by Region"
        data={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
      />
    </Flex>
  )
}
