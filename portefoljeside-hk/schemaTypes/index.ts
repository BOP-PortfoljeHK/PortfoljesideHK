// Denne filen brukes for å eksportere alle schema-typene som skal brukes i Sanity.
// Dvs. alle schemas som lages må legges inn her!

import { page } from './page'
import { about } from './about'
import { contact } from './contact'
import { oyaglass } from './oyaglass'
import { jewelrycollection } from './jewelrycollection'
import { appliedArts } from './appliedArts'
import { sculptural } from './sculptural'
import { frontpage } from './frontpage'


export const schemaTypes = [ page, jewelrycollection, appliedArts, sculptural, oyaglass, about, contact, frontpage ]

