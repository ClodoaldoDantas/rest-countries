'use client'

import { KeyboardEvent, useState } from 'react'
import { ComboboxItem, Flex, Select, TextInput } from '@mantine/core'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

const regions = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

export function Filters() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const nameQuery = searchParams.get('name') ?? ''
  const regionQuery = searchParams.get('region')

  const [name, setName] = useState(nameQuery)
  const [region, setRegion] = useState<ComboboxItem | null>(() => {
    if (regionQuery) {
      const option = regions.find(
        region => region.value === regionQuery.toLowerCase()
      )

      return option ?? null
    }

    return null
  })

  function handleSearch(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setRegion(null)
      router.push(`/?name=${name}`)
    }
  }

  function handleSelectRegion(option: ComboboxItem) {
    setRegion(option)
    setName('')

    router.push(`/?region=${option.value}`)
  }

  return (
    <Flex wrap="wrap" gap="xs" align="center" justify="space-between">
      <TextInput
        placeholder="Search for a country…"
        value={name}
        onChange={event => setName(event.target.value)}
        onKeyUp={handleSearch}
        leftSection={<Search size={20} />}
      />

      <Select
        placeholder="Filter by Region"
        data={regions}
        value={region ? region.value : null}
        onChange={(_, option) => handleSelectRegion(option)}
      />
    </Flex>
  )
}
