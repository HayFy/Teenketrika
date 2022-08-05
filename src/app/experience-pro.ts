export interface ExperiencePro {
  debut: Date,
  fin: Date,
  poste: string,
  description: string [],
  entreprise: {
    nom : string,
    site: string
  }
}
