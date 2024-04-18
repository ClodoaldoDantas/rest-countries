import { SimpleGrid, Skeleton } from '@mantine/core'

export function CountryListSkeleton() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md" my="xl">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} height={300} />
      ))}
    </SimpleGrid>
  )
}
