import { Flex, Text } from '@mantine/core'

type InfoProps = {
  label: string
  value: string
}

export function Info({ label, value }: InfoProps) {
  return (
    <Flex align="center" gap={4} mb={4}>
      <Text fw={500} component="strong">
        {label + ':'}
      </Text>

      <Text component="span">{value}</Text>
    </Flex>
  )
}
