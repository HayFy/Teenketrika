import { ExperiencePro } from "./experience-pro"
import { Formation } from "./formation"
import { Langues } from "./langues"

export interface DemandeurEmploi {
  adresse: string,
  categorie: {
    nom: string,
    sousCategorie: string
  },
  competences: string[],
  contact: string,
  dateNaissance: Date,
  descriptionPerso: string,
  etatCivile: string,
  localisation: {
    region: string,
    district: string,
    commune: string,
  },
  nom: string,
  numCIN: number,
  prenom: string,
  qualite: string [],
  interet: string [],
  photoName: string,
  statusPro: String,
  experiencePro: ExperiencePro [],
  formation: Formation [],
  langues: Langues[],
}
