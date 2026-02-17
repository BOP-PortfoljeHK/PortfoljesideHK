// Denne filen brukes for å eksportere alle schema-typene som skal brukes i Sanity.
// Dvs. alle schemas som lages må legges inn her!

import { about } from './about'
import { contact } from './contact'
import { oyaglass } from './oyaglass'
import { jewelrycollection } from './jewelrycollection'
import { appliedArts } from './appliedArts'


export const schemaTypes = [ jewelrycollection, appliedArts, oyaglass, about, contact, ]

