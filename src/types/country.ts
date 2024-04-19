export type Country = {
  capital: string[]
  name: {
    common: string
    official: string
  }
  population: number
  region: string
  subregion: string
  tld: string[]
  flags: {
    png: string
    svg: string
  }
  currencies: Record<string, { name: string; symbol: string }>
  languages: Record<string, string>
  borders?: string[]
}
