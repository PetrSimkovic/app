**Jak vytvořit novou stránku v Remixu:**

1. Vytvoř novou složku s libovolným názvem.
2. Ve složce vytvořit složku api a do ní dát soubor `sql.js`
3. Do složky `routes` vlož vyčištěný soubor `_index.jsx`.
4. Vytvoř potřebné React komponenty (např. Header, Footer, Blog, atd.).
5. Komponenty naimportuj do stránky, kde je potřebuješ.
6. Vytvoř JavaScript soubory s SQL dotazy (např. `getPosts.js`, `createPost.js`).
7. Pomocí funkce `loader` načti data na stránku z databáze.

> **Pozor:** Každá stránka musí být ve složce `routes`!

Tip: Pro rychlý import komponent použij `CTRL + Space`

INT - čísla
Varchar - text s omezenou délkou
Text - neomezený text
Date - datum