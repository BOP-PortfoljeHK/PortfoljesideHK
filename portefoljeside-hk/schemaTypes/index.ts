// Denne filen brukes for å eksportere alle schema-typene som skal brukes i Sanity.
// Dvs. alle schemas som lages må legges inn her!

// Statiske sider
import about from "./about";
import oyaglass from "./oyaglass";
import contact from "./contact";

// Dynamiske sider
import category from "./category";
import series from "./series";
import work from "./work";



export const schemaTypes = [oyaglass, about, contact, category, series, work];