/// <reference types="vite/client" />
import { createClient } from '@sanity/client'
import  imageUrlBuilder  from '@sanity/image-url'

/* Oppretter en Sanity-klient ved hjelp av miljøvariabler for prosjekt-ID, dataset, og API-versjon.*/

export const sanity = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
    useCdn: true, 
})

const builder = imageUrlBuilder(sanity)

export const urlFor = (source: any) => builder.image(source)