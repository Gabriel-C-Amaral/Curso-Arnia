export type Universities = {
  domains: Array<string>
  country: string
  alpha_two_code: string
  web_pages: Array<string>
  "state-province": string | null
  name: string
}

export const fetchAllUniversities = async (): Promise<Array<Universities>> =>
  await (
    await fetch("http://universities.hipolabs.com/search?country=brazil")
  ).json()

export const fetchUniversitiesByName = async (
  name: string
): Promise<Array<Universities>> =>
  await (
    await fetch(
      `http://universities.hipolabs.com/search?country=brazil&name=${name}`
    )
  ).json()
