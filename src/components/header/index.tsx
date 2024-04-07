import { Box, Button, Container, Flex, Text } from '@mantine/core'
import { BookMarked } from 'lucide-react'
import styles from './styles.module.css'

export function Header() {
  return (
    <Box component="header" py="md" className={styles.header}>
      <Container>
        <Flex wrap="wrap" align="center" justify="space-between">
          <Text component="h1" fw={600} size="xl">
            Where in the world?
          </Text>

          <Button
            variant="default"
            component="a"
            href="https://github.com/ClodoaldoDantas/rest-countries"
            target="_blank"
            leftSection={<BookMarked size={20} />}
          >
            Github
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}