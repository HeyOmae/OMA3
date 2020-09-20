export interface Runner {
  id?: number
  name: string
  description: string
}

export const initRunner: Runner = {
  name: "",
  description: "",
}
