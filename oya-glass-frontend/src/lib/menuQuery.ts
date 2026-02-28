import groq from "groq";

// Egen fil for å lage en meny-komnponent som henter data fra Sanity. Dette er spørringen via Groq/sanity
// Dette gjør at vi kan gjenbruke menyen på flere sider, 
// og at vi slipper å duplisere koden for å hente data fra Sanity på hver side. 
// Vi kan også bruke denne filen til å definere hvilke felter vi vil hente fra Sanity, 
// og hvordan vi vil sortere menyen.

export const MENU_DOC_QUERY = groq`*[_type == "menu"][0]{
  items[]->{
    _id,
    title,
    "slug": slug.current,
    "parentId": parent._ref
  }
}`;