export type ResourceList<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type ResourceUnion = Film | People | Planet | Specie | Starship | Vehicle

export type Film = {
  characters: string[] | People[]
  created: Date
  director: string
  edited: Date
  episode_id: string
  opening_crawl: string
  planets: string[] | Planet[]
  producer: string
  release_date: Date
  species: string[] | Specie[]
  starships: string[] | Starship[]
  title: string
  url: string
  vehicles: string[] | Vehicle[]
}
export type People = {
  birth_year: string
  eye_color: string
  films: string[] | Film[]
  gender: string
  hair_color: string
  height: string
  homeworld: string | Planet
  mass: string
  name: string
  skin_color: string
  created: Date
  edited: Date
  species: string[] | Specie[]
  starships: string[] | Starship[]
  url: string
  vehicles: string[] | Vehicle[]
}
export type Planet = {
  climate: string
  created: Date
  diameter: string
  edited: Date
  films: string[] | Film[]
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents: string[] | People[]
  rotation_period: string
  surface_water: string
  terrain: string
  url: string
}
export type Specie = {
  average_height: string
  average_lifespan: string
  classification: string
  created: Date
  designation: string
  edited: Date
  eye_colors: string
  hair_colors: string
  homeworld: string | Planet
  language: string
  name: string
  people: string[] | People[]
  films: string[] | Film[]
  skin_colors: string
  url: string
}
export type Starship = {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: Date
  crew: string
  edited: Date
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  films: string[] | Film[]
  pilots: string[] | People[]
  starship_class: string
  url: string
}
export type Vehicle = {
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: Date
  crew: string
  edited: Date
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  pilots: string[] | People[]
  films: string[] | Film[]
  url: string
  vehicle_class: string
}

export enum ResourcesEnum {
  Films = 'films',
  People = 'people',
  Planets = 'planets',
  Species = 'species',
  Starships = 'starships',
  Vehicles = 'vehicles',
}

export type ResourcesType = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'
