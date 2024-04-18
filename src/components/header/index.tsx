import { Box, Button, Container, Flex, Text } from '@mantine/core'
import { BookMarked } from 'lucide-react'
import styles from './styles.module.css'
import Link from 'next/link'

export function Header() {
  return (
    <Box component="header" py="md" className={styles.header}>
      <Container size="xl">
        <Flex wrap="wrap" align="center" justify="space-between">
          <Link className={styles.link} href="/">
            <Text component="h1" fw={600} size="xl">
              Where in the world?
            </Text>
          </Link>

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
