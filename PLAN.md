# La Boucherie de la Monnaie — Research & Plan

> **La Boucherie de la Monnaie** is a young, high-end artisan *boucher · charcutier · traiteur* (with a small *épicerie fine* corner) at **10 rue de la Monnaie, Rennes**. It sits on the ground floor of the former **Hôtel des Monnaies** (the old royal mint, now the Mama Shelter hotel) and is one of the « Échoppes des Lices », the row of food shops beside the Place des Lices. It opened on **30 March 2023**, the first of those shops to open. Its founder and gérant is **Aymeric Hurault**, a Rennes native who studied international business, apprenticed in Paris butcher houses (Le Fooding names Maison Le Bourdonnec and La Boucherie Cosse), then spent four years at a city-centre Rennes butcher before opening his own shop at 27. Three things set it apart. The butchers work **in full view of the customer**, each at an individual block (« Nous n'avons rien à cacher »). It buys **whole carcasses** of beef, pork and lamb. It **dry-ages beef in its own cellars** for 4 to 8 weeks (Normande, Limousine, Minhota, Noire de Baltique, Blonde de Galice, Salers × Angus), and sells Porc Noir de Bigorre, Breton pork raised on straw, and Quercy lamb (IGP, Label Rouge). It is **not halal**. Customers give it **5/5 on Google from 60+ reviews**. They praise the **cooking advice** and Aymeric's warm welcome above all, and their only complaint is price. Le Fooding lists it as one of only two butchers in Rennes. It has **no website**: Instagram is its only shop window.

---

## 0. Status & confidence

| Item | Value |
|---|---|
| **Identity verdict** | **CONFIRMED, one business, open.** SARL BOUCHERIE DE LA MONNAIE (SIREN 921 407 201) is the only match for "boucherie de la monnaie" in département 35 in SIRENE. Status Active, record updated 2026-10-13. Trading name on Instagram, Facebook and Le Fooding: **"La Boucherie de la Monnaie"**. Use that name on the site. |
| **Open / closed** | **Open.** PagesJaunes shows « Probablement fermé définitivement », but four independent signals refute it: SIRENE Active (13 Oct 2026), societe.com Active (13 Oct 2026), Le Fooding page updated 5 Aug 2026, newest Google-mirrored review 17/07/2026. The research reports also cite Instagram posts on 30 Aug 2026 (traiteur) and 9 Oct 2026 (a "BOUCHER H/F" job ad). The fact-check could not open the 9 Oct post itself; **the critic pass did load it**, and it is a live job ad dated 9 Oct 2026. |
| **Type** | Artisan boucher, charcutier, traiteur, plus épicerie fine. **Not halal.** This is inferred from the products, since pork is central (Noir de Bigorre, Breton pork, house charcuterie). No source states it explicitly. Not a specialist volailler, though it sells poultry. |
| **Research date** | 2026-10-13 |
| **Tools used** | Web search and direct page fetches across 5 research angles (identity, presence, voice, history, market), then an adversarial fact-check. Official **SIRENE API** (recherche-entreprises.api.gouv.fr) and the **BODACC open-data API** were queried directly. Instagram profile fetched directly. Skills used for the design direction: `ui-ux-pro-max:ui-ux-pro-max` and `design-taste-frontend`. |
| **Tools unavailable / blocked** | The local Google Maps scraper (gosom) was not running, and Google Maps returned no content, so the rating comes from Google-mirror sites. **Facebook**: login wall, so only search snippets were seen. **TripAdvisor**: HTTP 403. **Pappers**: 403 at fact-check time. **Ouest-France article**: paywalled at first. **The critic pass read the full text through Tavily extract**, and every quote attributed to it in §2–§3 is now confirmed verbatim. **Bottin.fr**: 404. **Ouest-France Commerces**: snippet only. The individual Instagram post of 9 Oct 2026 could not be loaded. No Apify Maps actor was reported as used. |
| **Overall confidence** | **High** for identity, legal data, address, current hours, owner story, sourcing and breeds, ratings (5.0 everywhere), and press. **Medium** for the email, the Facebook data, the saucisse-vigneronne / Mama Shelter story (one paywalled source), and payment methods. **Mostly resolved (critic pass)**: the **phone number**. 02 99 22 04 96 is on the owner-maintained Ouest-France Commerces listing, in the full Ouest-France article, on Le Fooding (Aug 2026) and on PagesJaunes. The other number appears only on an unclaimed TripAdvisor stub and a Facebook snippet. **Now known (critic pass)**: the **logo and brand colours** (bottle green + cream, vintage script/caps lockup; see §5) and the **shop interior** (see §5). **Still unknown**: fonts (exact typeface names), price list, delivery (only boilerplate seen), accessibility, holiday closures 2026–27. |
| **Project scaffold** | Vite 8 + TypeScript + Tailwind v4 (`@tailwindcss/vite`) already in the repo. `base: '/La-Boucherie-de-la-Monnaie-rennes/'` is set. Pages URL: `https://ab-s0lution.github.io/La-Boucherie-de-la-Monnaie-rennes/`. |

---

## 1. Verified facts

Status key: **verified** means two or more independent sources, or one official register. **single-source** means only one source. **conflicting** means sources disagree. **not found** means no source.

| Field | Value | Status | Sources |
|---|---|---|---|
| Trading name | **La Boucherie de la Monnaie** (registered enseigne "BOUCHERIE DE LA MONNAIE"; Facebook page title "La Boucherie de la Monnaie \| Rennes") | verified | https://recherche-entreprises.api.gouv.fr/search?q=boucherie%20de%20la%20monnaie&departement=35 · https://www.instagram.com/boucheriedelamonnaie/ · https://lefooding.com/commerces/boucherie-de-la-monnaie |
| Legal name / form | BOUCHERIE DE LA MONNAIE, **SARL**, share capital **€10,000**, nature juridique 5499 | verified | https://www.societe.com/societe/boucherie-de-la-monnaie-921407201.html · https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22921407201%22 |
| SIREN / SIRET / RCS | SIREN **921 407 201**. SIRET (head office, the only establishment) **921 407 201 00018**. RCS Rennes. | verified | https://recherche-entreprises.api.gouv.fr/search?q=921407201 · https://annuaire-entreprises.data.gouv.fr/entreprise/921407201 · https://www.societe.com/societe/boucherie-de-la-monnaie-921407201.html |
| VAT | FR05921407201 | verified | societe.com · https://boucheries.net/35/rennes/la-boucherie-de-la-monnaie-r3t |
| NAF / APE | 10.11Z « Transformation et conservation de la viande de boucherie » (NAF 2025: 10.11Y) | verified | SIRENE API · societe.com |
| Collective agreement | IDCC 0992 (boucherie, boucherie-charcuterie). societe.com "deduces" 1534; the official API gives 0992. | single-source (official) | https://recherche-entreprises.api.gouv.fr/search?q=921407201 |
| Declared activity | « Boucherie, charcuterie, traiteur, plats préparés sur place ou à emporter, épicerie fine » | verified | https://www.bodacc.fr/pages/annonces-commerciales-detail/?q.id=id:B20230025818 · https://entreprises.lefigaro.fr/boucherie-de-la-monnaie-35/entreprise-921407201 |
| Address | **10 rue de la Monnaie, 35000 Rennes** | verified | SIRENE · BODACC · Le Fooding · PagesJaunes · Mappy · Instagram bio · https://www.bretagne-economique.com/actualites/rennes-les-echoppes-des-lices-commencent-lever-leurs-rideaux/ |
| GPS | 48.112356, -1.682726 (INSEE geocode) | single-source (official) | https://recherche-entreprises.api.gouv.fr/search?q=boucherie%20de%20la%20monnaie&departement=35 |
| Quartier | Quartier des Lices, centre historique. Échoppes des Lices, at the foot of Mama Shelter (former Hôtel des Monnaies). TripAdvisor files it under "Rennes – Cathédrale". | verified | Le Fooding · Bretagne Économique · https://rennesbusinessmag.fr/les-echoppes-des-lices-ouvriront-dans-les-prochaines-semaines/ |
| Phone | **Two numbers in circulation.** (A) **02 99 22 04 96** (+33 2 99 22 04 96) from Le Fooding FR+EN, PagesJaunes, boucherie.tel, partly boucherie-charcuterie.tel and Ouest-France (2023). (B) **+33 2 23 46 27 54** on the shop's own Facebook page (search snippet), apparently also on TripAdvisor. Neither is the Mama Shelter number (02 57 67 67 70). **Critic pass:** (A) is also the « Appeler » `tel:` link on the **Ouest-France Commerces** listing. The business appears to have supplied that listing itself, since it carries its uploaded logo and ran a paid « bon plan » on it. (A) is also printed in the full **Ouest-France 2023** article: « Boucherie, 10, rue de la Monnaie. Tél. 02 99 22 04 96 ». (B) appears on **TripAdvisor**, an *unclaimed* stub with 0 reviews and no hours that links the Facebook page id 102363872789477, and in a Facebook snippet. **Use (A) as primary.** | **verified as primary (A)**; (B) unexplained | https://lefooding.com/commerces/boucherie-de-la-monnaie · https://lefooding.com/en/shops/boucherie-de-la-monnaie-2 · https://www.pagesjaunes.fr/pros/62273873 · https://boucherie.tel/la-boucherie-de-la-monnaie-2393666.html · https://www.facebook.com/boucheriedelamonnaie/ · https://www.tripadvisor.com/Restaurant_Review-g187103-d27833915-Reviews-La_Boucherie_De_La_Monnaie-Rennes_Ille_et_Vilaine_Brittany.html |
| Email | boucheriedelamonnaie@gmail.com (Facebook page snippet only) | single-source | https://www.facebook.com/boucheriedelamonnaie/ · https://www.facebook.com/boucheriedelamonnaie?locale=fr_FR |
| Website | **None.** boucheriedelamonnaie.fr / .com do not resolve. Le Fooding links Instagram as the website. Pappers: « Site internet : Non disponible ». | verified | Le Fooding · PagesJaunes · boucheries.net · https://www.pappers.fr/entreprise/boucherie-de-la-monnaie-921407201 |
| Instagram | **@boucheriedelamonnaie**, about 1,613 followers (1,596 earlier), 325 following, about 77 posts. Bio: « 🌿Artisan Boucher • Charcutier • Traiteur 🌿Élevages responsables & Circuits courts 🌿10 rue de la monnaie, Rennes ». Highlights: **LIFE✨, MATURATION✨, TRAITEUR, MERCI✨**. No link in bio. | verified (fetched) | https://www.instagram.com/boucheriedelamonnaie/ |
| Facebook | "La Boucherie de la Monnaie \| Rennes". Intro: « Artisans Bouchers / Charcutiers / Traiteurs Affineurs, Élevages responsables & durables ». 2 reviews. About 85 likes (unconfirmed). Visible posts date from April 2023. | single-source | https://www.facebook.com/boucheriedelamonnaie/ |
| Hours (current) | **Mon** closed · **Tue** 9:30–14:00, 15:30–19:30 · **Wed** 9:30–14:00, 15:30–19:30 · **Thu** 9:30–14:00, 15:30–19:30 · **Fri** 9:30–14:00, 15:30–19:30 · **Sat** 9:00–18:30 non-stop · **Sun** closed | verified | Le Fooding FR (updated 5 Aug 2026) · Le Fooding EN · PagesJaunes · https://fr.mappy.com/poi/69ad2f0c37f95a256aae884d · boucherie.tel |
| Hours, minor conflicts | boucheries.net: weekdays close **19:00**. Ouest-France Commerces snippet: Saturday opens **9:30**. Opening-era hours (Apr 2023: Tue–Sat 9:30–13:30, 16:00–19:00) are superseded. | conflicting (minor) | https://boucheries.net/35/rennes/la-boucherie-de-la-monnaie-r3t · https://commerces.ouest-france.fr/rennes-35000/boucherie-de-la-monnaie.html · https://rennesbusinessmag.fr/le-boucher-de-la-rue-de-la-monnaie/ |
| Annual closure | Summer 2025: closed 2–25 Aug, reopening Tue 26 Aug at 9:30 (« N'hésitez pas à passer commande, nous pouvons mettre vos produits sous vide ou prêts à congeler ») | single-source (own post) | https://www.instagram.com/boucheriedelamonnaie/p/DMak0gioDuy/ |
| Services | Butchery counter, house charcuterie, traiteur (entrées, plats, desserts « faits maison », daily), épicerie fine, takeaway, **orders** (in person / phone / Instagram DM), **vacuum packing** and « prêts à congeler », cutting and cooking advice, B2B supply to restaurants (Mama Shelter per Ouest-France; crêperie Madame Claude) | verified (except B2B Mama Shelter: single-source) | Le Fooding · IG Jul 2025 · IG Aug 2026 https://www.instagram.com/p/DcqaECMF1DJ/ · boucherie.tel reviews · https://unidivers.fr/rennes-madame-claude-bar-a-crepe |
| Home delivery / voucher | **Critic pass (page now read in full):** the « Livraison à domicile » service icon is backed only by **template FAQ boilerplate** (« vous n'avez plus qu'à attendre notre livreur… », the same wording used on every listing). No own channel, press article or review mentions delivery. The voucher « Achetez votre bon à 15 € et profitez de 25 € » is marked **« Bon plan terminé »** (expired). The listing gives Saturday as 09h30–18h30. **Do not advertise delivery or the voucher.** | single-source boilerplate; voucher expired | https://commerces.ouest-france.fr/rennes-35000/boucherie-de-la-monnaie.html · https://commerces.ouest-france.fr/produit/bon-plan-valable-chez-boucherie-de-la-monnaie.html |
| Online ordering | None found (no Uber Eats, Deliveroo, Too Good To Go or click & collect) | not found | presence report |
| Payment | Credit cards, debit cards, NFC mobile payment (aggregator, probably mirroring Google attributes) | single-source (weak) | https://boucherie.tel/la-boucherie-de-la-monnaie-2393666.html |
| Access / transport | Metro **Sainte-Anne** (lines A and B interchange), about 265–290 m. Bus "La Navette", stop "Monnaie" (1a rue de la Monnaie), about 85 m. Bus C1 / E4, stop "Les Lices" (26 quai Saint-Cast), about 268 m. Bike-share: Les Lices (9 rue de Juillet) about 178 m; Sainte-Anne about 265 m; Mairie-Opéra about 306 m; Place de Bretagne about 310 m. Paid street parking on rue de la Monnaie; no dedicated parking. | single-source for distances (Le Fooding confirms Sainte-Anne) | https://boucheries.net/35/rennes/la-boucherie-de-la-monnaie-r3t · https://lefooding.com/en/shops/boucherie-de-la-monnaie-2 · https://mapa-metro.com/fr/France/Rennes/Rennes-Metro-Plan.htm · https://www.parkopedia.fr/parking/horodateur/25_rue_de_la_monnaie/35000/rennes/ |
| Accessibility | No acceslibre entry, no information. The shop's own photos show it at street level, with a patterned-tile floor flush to the entrance zone. **This is an observation, not a claim: do not state « accessible PMR ».** | not found | identity report; IG job-ad photo https://www.instagram.com/p/DeRODPJOqjM/ |
| Hygiene inspection (Alim'confiance) | **No record** for SIRET 92140720100018 in the official DGAL open data (queried 13 Oct 2026). The only « monnaie » record in Rennes is a different business (Augustin, 11 rue de la Monnaie). SIRENE flag `est_alim_confiance: false`. **Do not show any hygiene badge.** | not found (official) | https://dgal.opendatasoft.com/api/explore/v2.1/catalog/datasets/export_alimconfiance/records?where=siret%3D%2292140720100018%22 · https://recherche-entreprises.api.gouv.fr/search?q=921407201 |
| Google Street View interior tour | A customer review (08/07/2023) says you can see « la grande variété des viandes proposées en visite virtuelle sur Google Street View ». So an interior 360° tour exists on the Google listing. It was not opened (no Maps access, no screenshots). | single-source | https://boucherie-charcuterie.tel/f/la-boucherie-de-la-monnaie-6197547 |
| Price range | **Premium / haut de gamme.** Le Fooding band « De 36 à 50 € » (its own generic indicator) and tag « Mate mon cabas ». Bretagne Économique: « positionnement haut de gamme ». Ouest-France headline: « boucherie haut de gamme ». Only published price: **Dohatsu broth €9.90/L**. A May 2023 review cites merguez/saucisses at **€19/kg**. | verified (positioning); single-source (prices) | Le Fooding · Bretagne Économique · Ouest-France · boucherie.tel |
| Company registered | RCS Rennes **16 Nov 2022** (BODACC creation notice A20220224859, published 18 Nov 2022) | verified | BODACC API · https://www.bodacc.fr/pages/annonces-commerciales-detail/?q.id=id:A20220224859 · societe.com |
| Activity start | **16 Jan 2023** (BODACC B20230025818, published 5 Feb 2023). INSEE establishment start date: 28 Mar 2023. | verified | BODACC · SIRENE API |
| Shop opening ("founded") | **30 March 2023**, the first of the Échoppes des Lices. A Facebook post of 5 Apr 2023 thanks the first customers « dès l'ouverture ». **"Depuis 2023" is safe.** | single-source for the exact date | Bretagne Économique (3 May 2023) · https://rennesbusinessmag.fr/les-echoppes-des-lices-ouvriront-dans-les-prochaines-semaines/ · https://www.facebook.com/boucheriedelamonnaie/posts/nous-avons-voulu-cr%C3%A9er-un-espace-de-travail-%C3%A0-la-vue-directe-du-client-la-mise-e/140785855613945 |
| Owner / gérant (public) | **Aymeric Hurault**, gérant since Nov 2022. Named by Ouest-France, Rennes Business Mag, Le Fooding, Parages Immobilier and customer reviews (« l'accueil d'Aymeric »). | verified | SIRENE · https://www.rennes-infos-autrement.fr/le-boucher-de-la-rue-de-la-monnaie/ · Le Fooding · boucherie-charcuterie.tel |
| Owner's training | Paris « grandes maisons » (Rennes Business Mag). Named as **Maison Le Bourdonnec** and **La Boucherie Cosse** only by Le Fooding (FR + EN, same publisher). | single-source for the house names | https://lefooding.com/commerces/boucherie-de-la-monnaie · https://lefooding.com/en/shops/boucherie-de-la-monnaie |
| Team | At opening: **2 butchers + 1 cook**. INSEE band 2024: 1–2 employees. Pappers: « au moins 1 salarié (2026) ». Recruiting a "BOUCHER H/F" in Oct 2026. **Critic pass: the job-ad post was loaded (9 Oct 2026).** Its image reads « ON RECRUTE ! Rennes Centre-ville · Boucher H/F · **CDI – 39H** · Repos **Dimanche & Lundi + une après-midi dans la semaine** · Des produits de qualité · Salaires en fonction du profil · **Petite équipe** · Candidatures à déposer **à la boutique** :) ». The caption adds « Contactez-nous en message privé pour en discuter » plus three bullet points: savoir-faire, sens du service et du travail en équipe, exigence sur la qualité. | single-source (press article syndicated twice); job ad high (own post) | https://rennesbusinessmag.fr/le-boucher-de-la-rue-de-la-monnaie/ · societe.com · https://www.instagram.com/p/DeRODPJOqjM/ |
| Ratings | **5.0/5 on Google, 60+ reviews.** Mirrors: 63 reviews (62×5★, 1×4★, newest 17/07/2026), 64 (bestin-rennes), 66 (boucheries.net), 43 (older boucherie.tel snapshot). Facebook: 2 reviews. PagesJaunes: 0. TripAdvisor: listing exists, content not readable. | verified | see §4 |
| Guide listing | **Le Fooding** (FR published 16 Mar 2024 by Laszlo Dela, updated 5 Aug 2026; EN 27 Mar 2024). One of **2 butchers** Le Fooding lists in Rennes (the other is Saint Cochon). A guide listing, not an award. | verified | https://lefooding.com/recherche/commerce/place/rennes-8580/boucherie-14954 |
| Ranking | #1 of 10 in bestin-rennes.fr's ranking of Rennes butchers (weighted Google method, 29 shops analysed). An SEO aggregator, not an award. | single-source (weak) | https://bestin-rennes.fr/meilleures-boucheries-de-rennes |
| Awards / labels of the shop | **None found.** No MOF, competition, Maître Artisan, Collège Culinaire, bio, ESS or EPV flag. Product labels it puts forward: **Label Rouge / IGP** (Quercy lamb), **AOP** (Noir de Bigorre). | not found | history and presence reports |
| Revenue | **Do not publish.** 2023 accounts were filed with a « déclaration de confidentialité » (BODACC, 22 Sep 2024). The "€281K" figure cannot be verified. | conflicting → excluded | BODACC API · societe.com |

---

## 2. Story & history

**The founder (public press only).** Aymeric Hurault grew up in Rennes and first studied international commerce there (Ouest-France says he was doing a « licence de marketing » when he changed course). He wanted something concrete:
- « Je voulais savoir si désosser une cuisse de bœuf à 6 heures du matin était du domaine du possible ! » (Rennes Business Mag / Rennes Infos Autrement, J.-C. Collet, 6–7 Apr 2023)
- « J'avais envie de concret et de faire plaisir avec des produits d'exception. » (Ouest-France, about 28 Apr 2023)

He did discovery internships in butchery, then apprenticed « dans de grandes maisons » in Paris. Le Fooding names them as **Maison Le Bourdonnec** and **La Boucherie Cosse**. He then worked **four years as an employee in a city-centre Rennes butcher's shop**, which the press does not name. He opened his own shop at **27**. Before opening he took time to visit breeders in **Brittany, the Lot and Italy**: « J'ai pris du temps pour rencontrer les éleveurs. »

**The place.** In June 2021, Suitcase Hospitality, Groupe Legendre and For-Bzh launched a call for applications for the « Échoppes des Lices ». These are food-trade units of 27–123 m² on the ground floor of the redeveloped historic block between Place des Lices, Place de la Trinité and rue de la Monnaie. The block includes the **18th-century Hôtel des Monnaies**, the former royal mint, which became **Mama Shelter Rennes** (119 rooms, opened 2 Mar 2023). About a dozen merchants were chosen from roughly a hundred applications. The project aims to extend the Saturday Marché des Lices atmosphere through the week, with short supply chains and local craft. Co-founder Jean-Baptiste Martin is quoted as saying they "dreamed of a lively, disruptive place". Parages Immobilier found the premises. The retail-fitting firm Creag Retail Design says it designed and built the shop (snippet only, low confidence).

**Timeline**

| Date | Event | Confidence |
|---|---|---|
| June 2021 | Échoppes des Lices call for applications (https://atabula.com/2021/06/30/appel-a-candidatures-pour-le-projet-rennes-place-des-lices/) | high |
| 16 Nov 2022 | SARL registered at RCS Rennes, €10,000 capital | high |
| 16 Jan 2023 | Official activity start (BODACC) | high |
| 2 Mar 2023 | Mama Shelter Rennes opens | high |
| **30 Mar 2023** | **Shop opens**, the first Échoppe des Lices, about a month before the others | high (one exact-date source) |
| 5 Apr 2023 | Facebook post: « Nous avons voulu créer un espace de travail à la vue directe du client… C'est ça l'artisanat ! » | medium |
| 6–7 Apr 2023 | Profile « Le boucher de la rue de la Monnaie » (Rennes Infos Autrement / Rennes Business Mag, same article) | high |
| ~28 Apr 2023 | Ouest-France: « Une boucherie haut de gamme vient d'ouvrir au cœur de Rennes » (date decoded from URL; Flipboard 2 May 2023) | high (headline), medium (date) |
| Jul 2023 | Instagram giveaway: « ⚠️ CONCOURS ⚠️ Tente de gagner une côte de bœuf… » | high (own post) |
| Autumn 2023 | Mentioned in *Mlle Adèle Rennes* N°39 with the other Lices shops (document unreadable) | low |
| 16 Mar 2024 | **Le Fooding** listing (EN 27 Mar 2024) | high |
| 2024 | Professional photo shoot by @delajungle_elisa; second côte de bœuf giveaway (for 3 people) | high (own posts) |
| Nov 2024 | Instagram: Minhota faux-filet « affiné 8 semaines dans nos caves de maturation » | high |
| 17 Jan 2025 | Updated statutes and minutes filed (content unknown) | high (fact), unknown (content) |
| 2–25 Aug 2025 | Summer closure | high |
| Sep 2025 | Rentrée launch: **100% Bellota Iberian pork** charcuterie (rosette, coppa, lomo…) and **Cecina** | high (own post) |
| Dec 2025 | Crêperie Madame Claude: « Nos viandes proviennent de la Boucherie de la Monnaie, à quelques rues. » | single-source |
| Mar 2026 | Neighbour Le Cellier des Lices tags the shop on Instagram | low |
| 30 Aug 2026 | Instagram traiteur post: « un large choix d'entrées, de plats préparés et de desserts faits maison » | high |
| 9 Oct 2026 | Instagram job ad "BOUCHER H/F": « Vous aimez la belle viande, le travail artisanal et la satisfaction client ? Rejoignez-nous ! ». The ad is for a CDI of 39 h, with Sunday, Monday and one afternoon off; applications are dropped at the shop (see §1 Team). | high (post loaded in critic pass) |

There have been **no name changes, no previous owners and no second shop**. It is a new business, not a takeover.

**Philosophy in their own words** (story copy may quote these with source):
- « Nous n'avons rien à cacher. Nous avons une transparence totale sur tous les produits et sur notre savoir-faire. » (Rennes Business Mag)
- « Cela favorise la mise en avant du savoir faire, la transparence, une réelle proximité tout en favorisant l'échange. C'est comme ça que je conçois l'artisanat. » (Ouest-France)
- « Nous travaillons sur des carcasses entières sur le bœuf, le cochon et l'agneau pour conserver une cohérence sur la qualité des produits. » (Rennes Business Mag)
- Values per Ouest-France: « l'élevage en plein air, le local et le bon traitement animalier ».

---

## 3. Offer

The **only real prices** are the Dohatsu broth (**€9.90/L**, Le Fooding) and the merguez/saucisses at **€19/kg** quoted in a May 2023 review, which may be out of date. Everything else on the site needs mock prices (see §11).

### Beef (dry-aged in house, « caves de maturation »)
| Product | Detail | Source |
|---|---|---|
| Bavette de **Normande** | « affinée 4 semaines » | Le Fooding; IG Jan 2024 https://www.instagram.com/boucheriedelamonnaie/p/C2xYeblMJkg/ |
| **Limousine** | matured 6 weeks (2023) | Ouest-France |
| Faux-filet de **Minhota** | « affiné 8 semaines dans nos caves de maturation » | IG Nov 2024 https://www.instagram.com/boucheriedelamonnaie/p/DCSFRuXs3b2/ |
| **Blonde de Galice**, **Noire de Baltique**, **Salers × Angus** | matured cuts in the cellars. Entrecôte **Noire de Baltique « affinée 8 semaines »** per a customer review (08/07/2023). | Rennes Business Mag; IG #noiredebaltique; https://boucherie-charcuterie.tel/f/la-boucherie-de-la-monnaie-6197547 |
| Filet de bœuf bardé au gras de bœuf | — | IG Jul 2023 https://www.instagram.com/p/CvQKTGDs78N |
| Tournedos bardé à la ventrèche de **Noir de Bigorre AOP** | — | IG Aug 2024 https://www.instagram.com/p/C_TinjCsL6c/ |
| Côte de bœuf (maturée; 8 weeks for a birthday per review) | giveaway prize in 2023 and 2024 | https://www.instagram.com/p/Cu40SfgMP92 · https://www.instagram.com/reel/C8AUPytsIU5 · reviews |
| Entrecôte Noire de Baltique, entrecôte limousine, côte basse | named by customers | review mirrors |
| Makis de bœuf au **lard de Colonnata** (apéro) | « Surprenez vos invités à l'apéro et régalez vous ! » | IG reel Sep 2024 https://www.instagram.com/reel/C_tL1pPsXR1/ |

### Pork
| Product | Source |
|---|---|
| **Porc Noir de Bigorre (AOP)**, raised free-range. **Critic pass:** the 22 Nov 2023 post is by the account @jjdnoirdebigorre, a Noir de Bigorre supply-chain partner, geotagged Rennes. It reads: « Magnifique boutique au cœur de Rennes. La boucherie de la monnaie vous servira aux petits oignons. Merci de mettre en valeur @lenoirdebigorre_aop ». On the site, credit it only as « la filière Noir de Bigorre AOP » and never name the person. | Ouest-France; Rennes Business Mag; https://www.instagram.com/p/Cz9cmcUouxx/ |
| « Côte première de cochon breton élevé sur paille » | Le Fooding |
| Pork from an eco-responsible farm in **Retiers** (Ille-et-Vilaine) | Ouest-France |
| « Parce que c'est bon le cochon bien élevé (En plus c'est joli 🤩) » (caption) | IG |

### Veal, lamb, poultry
| Product | Source |
|---|---|
| Breton **veau de lait**, bought direct from farmers the owner visits | Ouest-France |
| « Veau de lait, basilic et mozzarella » preparation | IG Jun 2023 https://www.instagram.com/p/CtPPNNUsBPe |
| « Agneau de bergerie élevé au lait maternel » | Ouest-France |
| **Agneau fermier du Quercy IGP & Label Rouge**, pushed for Easter 2023 and 2024 (« une chair tendre, un goût fin ») | https://www.facebook.com/boucheriedelamonnaie/posts/agneau-fermier-du-quercy-igp-label-rouge-une-chair-tendre-un-go%C3%BBt-fin-rennes-ren/140790802280117 · https://www.instagram.com/p/C4tYekwMtCu |
| « Poularde fermière jaune des Landes »; free-range and organic farm poultry | Le Fooding; Ouest-France |

### Charcuterie (house-made unless noted)
| Product | Source |
|---|---|
| **Saucisse vigneronne** (pork, honey, red wine, shallots). **Signature.** Ouest-France says it is served at Mama Shelter, where « elle fait un malheur » (single, paywalled source). IG Sep 2023: « Nos saucisses vigneronnes 😋 ». | Ouest-France; https://www.instagram.com/boucheriedelamonnaie/p/Cw5m4sUMrqG/ |
| Terrines from the whole pig carcass; terrine de campagne | Ouest-France; reviews |
| **Pâté en croûte** maison (« à tomber ») | reviews |
| **Foie gras de canard du Sud-Ouest** maison (customers buy it again every Christmas) | Le Fooding; reviews |
| **Rillettes de bœuf au piment d'Espelette** | Le Fooding |
| **Coppa** (« vraiment INCROYABLE ») | reviews |
| Pâté de lapin; merguez « with a touch of mint »; marinated brochettes | reviews |
| **100% Bellota Iberian pork**: rosette, coppa, lomo and more; **Cecina** (beef charcuterie), from Sep 2025 (selected, not stated as house-made) | IG https://www.instagram.com/p/DOMPBu0CGjp |

### Traiteur (prepared dishes)
- « un large choix d'entrées, de plats préparés et de desserts faits maison », daily (IG Aug 2026)
- 2023 dishes: salads, quiches, **bourguignon**, **blanquette**, **couscous**, **joue de porc confite** (Ouest-France)
- **Bouchées à la reine au ris de veau** (« au feuilletage croustillant », per a review); **souris d'agneau du Quercy** cooked at low temperature (Le Fooding)
- Customers also name lasagnes, ratatouille, summer melon-tomato-watermelon salads, lunchtime dishes and **sandwiches**
- Customers also name **brochettes marinées** (« exquise », Avis Google 06/05/2026).
- The lead photo of the Aug 2026 traiteur post shows **sautéed noodles with glazed chicken and peppers** (wok style). The dish name is not given, so it is low confidence and may only be used as a mock rotation item such as « Nouilles sautées au poulet ». The caption ends « Notre plus grand fan en dernier slide 😋 »; a commenter wrote « Testés et approuvés ». (https://www.instagram.com/p/DcqaECMF1DJ/)
- Engagement signal: the July 2024 dry-aged beef reel (« Bœuf affiné dans nos caves… copaings ») has about **443 likes**, far above typical posts (about 20–30). **Maturation is what the audience responds to most**, which supports making it the hero chapter. (https://www.instagram.com/boucheriedelamonnaie/reel/C9QR_nNMSgz/)

### Épicerie fine
- Huile d'olive extra vierge **Kaïa**, cornichons français **Maison Marc**, **moutarde d'Orléans** (Le Fooding)
- « LA PÉPITE : le bouillon artisanal basque **Dohatsu**… (**9,90 € le litre**) » (Le Fooding)

### Services
- Orders in person, by phone or by Instagram DM. Vacuum packing and « prêts à congeler ». Takeaway. Cooking, cutting and quantity advice (the most-praised point). B2B supply to restaurants (Madame Claude; Mama Shelter per Ouest-France 2023, current status unknown).

### Signature items (in order of evidence)
1. **Dry-aged beef from the caves de maturation** (4, 6, 8 weeks; Normande, Limousine, Minhota, Noire de Baltique). Own Instagram highlight « MATURATION ».
2. **Saucisse vigneronne** (own caption plus the Ouest-France Mama Shelter story).
3. **Porc Noir de Bigorre AOP** and Breton straw-raised pork.
4. **Foie gras maison** at Christmas, **pâté en croûte**, **coppa**.
5. **Agneau du Quercy IGP Label Rouge** at Easter.
6. **Bouchées à la reine au ris de veau** (traiteur).

---

## 4. Customer voice

### Ratings (seen 2026-10-13)
| Platform | Rating | Count | Date / note | Source |
|---|---|---|---|---|
| Google (mirror) | **5.0** | 63 (62×5★, 1×4★, 0 below) | mirror updated 23/08/2026; newest review 17/07/2026 | https://boucherie-charcuterie.tel/f/la-boucherie-de-la-monnaie-6197547 |
| Google (aggregator) | 5.0 | 64 | 2026 ranking, #1 of 10 | https://bestin-rennes.fr/meilleures-boucheries-de-rennes |
| Google (aggregator) | 5.0 | 66 | verified 5 Oct 2026 | https://boucheries.net/35/rennes/la-boucherie-de-la-monnaie-r3t |
| Google reviews 2023–24 (republished) | 5.0 | 43 | older snapshot | https://boucherie.tel/la-boucherie-de-la-monnaie-2393666.html |
| Facebook | n/a | 2 reviews | text not loadable | https://www.facebook.com/boucheriedelamonnaie/ |
| Bottin.fr | 5.0 (98% 5★, 2% 4★) | n/a | snippet only, page 404 | — |
| PagesJaunes | — | 0 | — | https://www.pagesjaunes.fr/pros/62273873 |
| TripAdvisor | — | **0 (confirmed in critic pass)** | Unclaimed listing, no hours, filed under "Cathédrale". It shows phone +33 2 23 46 27 54 and links the Facebook page. | https://www.tripadvisor.com/Restaurant_Review-g187103-d27833915-Reviews-La_Boucherie_De_La_Monnaie-Rennes_Ille_et_Vilaine_Brittany.html |
| Yelp, Restaurant Guru, Petit Futé, Reddit | not found | — | — | — |

**Site wording:** « 5/5 sur Google (plus de 60 avis) ». Do not show an exact count.

### Praise themes (most frequent first)
1. **Cooking advice**: « conseils pour la cuisson », advice on quantities, « de bon conseil pour la cuisine ». The butcher acts as a cooking coach.
2. **Warm, smiling welcome**: « accueil chaleureux », « sourire », « gentillesse ». Aymeric is often named.
3. **Meat quality, especially dry-aged beef**: « tendre », « savoureuse », « saveurs incomparables ».
4. **House charcuterie and traiteur**: terrine, pâté en croûte, coppa, foie gras, merguez, bouchées à la reine.
5. **A modern, beautiful shop**: « moderne », « rutilante », « de nouvelle génération », « vitrines alléchantes ».
6. **Sourcing and ethics**: « sourcée », « produits d'éleveurs », « il faut soutenir ce genre de commerce ».
7. **Young, passionate team**: « personnel jeune », « de vrais passionnés ».
8. **Value for the quality**: « bon rapport qualité prix », « viandes d'exception à prix accessible ».

### Complaints (very few)
- **Price**, always paired with quality: « Un peu chère mais c'est de la viande de qualité » (5★); « 4 étoilés au prix du luxe. » (the only 4★, Nov 2023).
- **Ordering / contact**: « Manque le telephone sur le site pour commander » (Apr 2023). **This is a direct brief: show a click-to-call number and an ordering path on every page.**
- No 1–3★ reviews found anywhere. No complaints about hygiene, staff, waiting time or freshness.
- Reading notes: many 5★ reviews came during the opening period (Mar–Jul 2023). One 30/04/2023 review comes from an account with the owner's surname, signed by relatives. **It is excluded and must never be used.** Prefer the 2024–2026 reviews for credibility.

### Emotional vocabulary
« un vrai régal », « succulent », « une tuerie », « à tomber », « INCROYABLE », « un pur régal », « incontournable », « vaut le détour », « je recommande les yeux fermés », « la meilleure boucherie de Rennes », « il n'y a pas d'équivalent sur Rennes », « merci d'être là ça manquait ».

### Who the customers are (inferred from reviews and the location)
- **Central-Rennes households and regulars** who buy all their meat here (« Nous n'achetons notre viande plus que dans cette boucherie »).
- **Families and groups of friends** planning a meal: « repas familiaux », « barbecues entre amis », apéro, « une bonne tablée le week-end ».
- **People buying for a celebration**: a birthday côte de bœuf, an EVJF, Christmas foie gras.
- **Lunchtime workers** in the centre: plats du midi, sandwiches.
- **Gourmets** following dry-aged beef and Le Fooding picks.
- **Visitors passing through** (« De passage à rennes pour faire un barbecue »), Mama Shelter guests, and Saturday **Marché des Lices** crowds.
- **Students: no evidence**, and the price point suggests few. They might buy traiteur or sandwiches.

### Verbatim quotes
**Real quotes. They may be used only with attribution to the platform** (« Avis Google »), never with the reviewer's name. Reviewer initials and dates are kept here only for traceability. Trim, don't rewrite.

1. « Une des meilleures boucheries de la région, sans hésiter ! » (Avis Google, 17/07/2026; [source](https://boucherie-charcuterie.tel/f/la-boucherie-de-la-monnaie-6197547))
2. « l'accueil d'Aymeric fait toute la différence : toujours chaleureux, de bon conseil et d'une grande gentillesse. » (Avis Google, 10/06/2026; same source)
3. « Nous achetons l'ensemble de notre viande dans cette boucherie où la qualité est vraiment au rdv! » (Avis Google, 22/05/2026; same source)
4. « Conseils au top et accueil chaleureux, de vrais passionnés je recommande ! » (Avis Google, 06/05/2026; same source)
5. « une viande excellente, et une future mariée ravie de son repas! » (Avis Google, 26/01/2026; same source)
6. « Cette année encore, le foie gras d'Aymeric est absolument exceptionnel, parfaitement relevé. » (Avis Google, 26/01/2026; same source)
7. « si vous voulez goûter les meilleures merguez de Rennes vous êtes à la bonne adresse. » (Avis Google, 06/12/2024; same source)
8. « les pâtés en croûte maison sont à tomber ! » (Avis Google, 06/12/2024; same source)
9. « De passage à rennes pour faire un barbecue… Mes convives étaient ravis de la qualités de la viande. » (Avis Google, 26/07/2024; same source)
10. « Bravo de mettre en avant des viandes d'exception à prix accessible. » (Avis Google, 15/06/2024; [source](https://boucherie.tel/la-boucherie-de-la-monnaie-2393666.html))
11. « une cote de bœuf affinée 8 semaines pour fêter un anniversaire, quel régal. » (Avis Google, 21/10/2023; boucherie-charcuterie.tel)
12. « Tres bon conseil du boucher pour la cuisson, la viande très bonne. Un peu chère mais c'est de la viande de qualité. » (Avis Google, 18/11/2023; boucherie.tel)
13. « Un accueil chaleureux, une boucherie rutilante, une marchandise alléchante et sourcée. » (Avis Google, 28/06/2023; boucherie.tel)
14. « mention spéciale pour la coppa qui est vraiment INCROYABLE ! » (Avis Google, 11/07/2023; boucherie.tel)
15. « Boucherie moderne, viande incroyable, traiteur plus que délicieux, personnel jeune et de très bon conseil. » (Avis Google, 08/06/2023; boucherie.tel)
16. « Une adresse incontournable à Rennes. La viande est excellente » (Avis Google, 10/06/2026; [source](https://boucherie-charcuterie.tel/f/la-boucherie-de-la-monnaie-6197547)). *Added in critic pass.*
17. « Nous avons dégusté des entrecôtes de la Noire De Baltique affinées 8 semaines en suivant les conseils de cuisson d'Aymeric: Un régal et des saveurs incomparables » (Avis Google, 08/07/2023; same source). This confirms that **Noire de Baltique is matured 8 weeks**.
18. « Conseils au top et accueil chaleureux, de vrais passionnés je recommande ! + les brochettes marinées sont exquise ! » (Avis Google, 06/05/2026; same source)
19. « Accueil, professionnalisme, conseils, qualité des viandes proposées, voila une excellente boucherie à connaître dans le centre historique de Rennes. » (Avis Google, 22/06/2023; [boucherie.tel](https://boucherie.tel/la-boucherie-de-la-monnaie-2393666.html))
20. « Nous recommandons autant pour les repas familiaux que les barbecues entre amis ou les petits plaisirs du soir. » (Avis Google, 13/07/2023; boucherie.tel; lightly trimmed from « Boucherie de très bonne qualité à Rennes, nous recommandons… »)
21. Supply-chain voice, not a customer review: « Magnifique boutique au cœur de Rennes. La boucherie de la monnaie vous servira aux petits oignons. » (filière Noir de Bigorre AOP, Instagram, 22/11/2023; https://www.instagram.com/p/Cz9cmcUouxx/)

*Reading note on « Manque le telephone sur le site pour commander » (01/04/2023):* on a Google review, « le site » most likely means the Google listing, which had no phone number in the opening week, not a website. The design brief does not change: show the number everywhere.

Keep for context, but not as praise: « 4 étoilés au prix du luxe. » (4★, 11/11/2023) and « Boucherie au top ! Il n'y a pas d'équivalent sur Rennes. » (06/04/2023, opening week). Keep the original spelling ("qualités", "Tres", "cote"). Emojis in the originals are dropped above. In site copy, quotes must stay at 3 lines or fewer and contain no em-dash.

---

## 5. Brand identity cues

| Cue | What we know | Source |
|---|---|---|
| **Logo** | **SEEN (critic pass), high confidence, two sources.** The 400×200 logo uploaded to the Ouest-France Commerces listing matches the lockup at the foot of the shop's 9 Oct 2026 job-ad visual. **Layout:** four stacked lines, centred: « *La* » (small upright brush-script) / « **BOUCHERIE** » (bold display caps on a **gentle upward arch**) / « *de la* » (script, flanked left and right by **thin horizontal rules ending in small dots**) / « **MONNAIE** » (display caps, straight baseline). **Letter style:** the caps are a sturdy, slightly condensed vintage display face with small wedge serifs, in a 1920s–50s épicerie / enamel-sign spirit; the script is a casual retro hand script. **Two versions exist:** cream lettering on a solid bottle-green rectangle (directory logo), and green lettering on white (job-ad visual). **Use the owner's real file. Do not redraw, trace or imitate it.** Until the file is supplied, use a plain typographic text wordmark with a `<!-- TODO logo officiel -->` note. | https://commerces.ouest-france.fr/rennes-35000/boucherie-de-la-monnaie.html (logo image) · https://www.instagram.com/p/DeRODPJOqjM/ |
| **Colours** | **Brand colours, measured from the logo file (critic pass):** **bottle / forest green `#12433B`** (dominant pixel, RGB 18 67 59) and **cream / off-white lettering** (about `#FAF8EE`; the exact value is hard to pin at this resolution). Their own job-ad visual also sets its titles in a **deep oxblood-red, about `#681018`**, on white. The shop has **no gold or navy** in its branding. The Échoppes des Lices tenants also follow a signage brief from the developer. | logo pixels (sampled); IG job ad; Legendre PR |
| **Fonts** | Exact typefaces unknown. Character described above: retro display caps with small serifs plus a casual script. | logo |
| **Shop interior (seen in critic pass, from the shop's own public posts)** | **The back wall is a run of tall glass-door, black-framed refrigerated / maturation cabinets**, lit from inside. They are full of whole sub-primals and cuts on shelves, each with a **small framed chalkboard-style price tag**. **Trailing green plants** sit on top of the cabinets. The **counter top is black marble with tan / ochre veining**. There is a **round end-grain wooden billot** on a wooden base. **The floor is patterned cement tiles (carreaux de ciment)** in cream, warm grey and terracotta floral motifs, with plain light tiles around them. **White walls and an épicerie shelf** of packaged products complete the room. All of this is open and in full view. Reviewers' words: « rutilante », « moderne », « impeccable et de nouvelle génération », « vitrines alléchantes ». Fit-out by Creag Retail Design (low confidence). | https://www.instagram.com/p/DeRODPJOqjM/ (job ad, shop as background) · https://www.instagram.com/p/DOMPBu0CGjp (Bellota display on the marble counter, cabinets behind) · Ouest-France · reviews |
| **Photo style** | Close-ups of raw matured cuts and barded roasts, plus traiteur dishes. Reels set to music (hip-hop / R&B). A professional shoot in 2024 by @delajungle_elisa (https://www.instagram.com/p/C4JhU1QMFHQ). **These photos are not ours to use.** | IG |
| **Tone of voice** | Short, warm, informal French with an epicurean, slightly playful tone. Captions often trail off on « … ». Frequent emojis: 😋 ✨ 🫶🏼 🌿 🤩 😅. Self-aware jokes (« Bien préparer son summer body… », « copaings »). | IG |
| **Recurring words** | *affiné(e)*, *maturé(e)*, *caves de maturation*, *bien élevé*, *se faire plaisir*, *régalez-vous*, *simple et efficace*, *faits maison*, *soigneusement sélectionnée*, *savoir-faire*, *transparence*, *artisanat*, *travail bien fait*, *belle viande*, *circuits courts*, *élevages responsables* | IG, FB, press |
| **Self-description** | « Artisan Boucher • Charcutier • Traiteur » (IG); « Artisans Bouchers / Charcutiers / Traiteurs **Affineurs** » (FB) | IG, FB |
| **Values** | Transparency (« rien à cacher »), whole-carcass work, breeder visits, plein air and animal welfare, short supply chains, craft done in front of the client | press |
| **Product labels used** | AOP (Noir de Bigorre), IGP + Label Rouge (agneau du Quercy). No shop-level label. | IG, FB |
| **Symbols** | 🌿 (nature, responsible farming) and ✨ (premium) in the bio | IG |
| **Hashtags** | #boucheriedelamonnaie #echoppesdeslices #rennes #rennescentre #ruedelamonnaie #dryaged #beef #meat #meatlover #butcher #boucherie #artisanat #elevagepleinair #persillé #rennesmaville #bonnesadresses #foodrennes | IG |
| **Own collateral tone** | The job ad is friendly and direct, with a smiley: « Candidatures à déposer à la boutique :) ». It also uses cut-out sticker-style meat illustrations (a bone-in ham and a heart-shaped steak, the steak drawn in a flat cartoon style with a little heart in the fat). So the house uses **playful flat meat stickers** on social, not engraving. | IG job ad |
| **Caption lines (verbatim)** | « En plus de notre gamme soigneusement sélectionnée en boucherie & charcuterie, nous vous proposons quotidiennement un large choix d'entrées, de plats préparés et de desserts faits maison ! » (Aug 2026) · « Parce que c'est bon le cochon bien élevé (En plus c'est joli 🤩) » · « Bœuf affiné dans nos caves pour se faire plaisir avec la famille ou les copaings 😋 Aussi bien au barbecue, à la plancha ou même au four ! » · « Pas besoin de sortir le barbecue ou la plancha pour apprécier des viandes maturées… Une tendreté incroyable et un goût très prononcé. À très vite 😋 » · « Surprenez vos invités à l'apéro et régalez vous ! » · « Simple et efficace » · « L'été est derrière nous c'est bon on peut se faire plaisir… » · « Vous aimez la belle viande, le travail artisanal et la satisfaction client ? Rejoignez-nous ! » | IG |
| **Press shorthand** | Le Fooding: « Le quartier des Lices se bonifie jusqu'à l'os ! », « bidochante boutique », « que de la came haut de gamme », « des charcut' qui percutent », « première victoire du complot commerçant qui fomentait dans l'ombre du Mama Shelter ». Parages Immobilier: « Une boucherie d'exception en plein cœur de Rennes », « nouvel écrin gourmand », « un retour au vrai ». | Le Fooding, LinkedIn |

---

## 6. Place & context

- **The building: the Hôtel des Monnaies (royal mint).** There was a mint on the site from the mid-15th century. It was rebuilt in 1728–1732 after the 1720 fire, struck coins until **1774**, and was first in the kingdom for silver striking in 1581–1590. It later housed the Imperial mail coaches, then the luxurious Hôtel de France, then Banque Populaire de l'Ouest until 2014, and is now **Mama Shelter Rennes** (119 rooms, rooftop, spa). Its lobby counter is tiled in mosaic as a tribute to the Rennes mosaicist **Isidore Odorico**. The developer's press release claims a 2.4 kg Roman gold patera was found in rue de la Monnaie in 1774; this is **unverified**, so do not state it as fact. Sources: [Legendre PR Dec 2020](https://www.groupe-legendre.com/wp-content/uploads/2020/12/DEF-Communique-de-presse-Trinite-Rennes.pdf), [Legendre PR Oct 2021](https://www.groupe-legendre.com/wp-content/uploads/2021/10/DEF-JJ-2021-10_04_HRENNES_CP-ANNONCE-MAMA-SHELTER-RENNES_-002.pdf), [Tendance Hôtellerie](https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/16242-article/suitcase-hospitality-annonce-l-arrive-de-mama-shelter-sur-l-hotel-de-la-place-des-lices-de-rennes), [Tendance Hôtellerie opening](https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/18329-article/l-ouverture-tant-attendue-du-mama-shelter-rennes).
- **The street.** It was formerly « rue de la Cordonnerie », the shoemakers' street, and was spelled « rue de la Monnoye » ([Wikisource, Notices sur les rues de Rennes 1883](https://fr.wikisource.org/wiki/Page:Notices_sur_les_rues_de_Rennes_1883.djvu/52)). It was a craft-guild street even before the mint.
- **Neighbouring Échoppes des Lices (2023 line-up; it may have changed):**
  - On rue de la Monnaie: Bourbon d'Arsel (coffee roaster, n°8), Les Italiens du Coin (Italian deli and traiteur), Le Cellier des Lices (wine shop, n°12). A reviewer mentions « une cave à vin juste à côté ».
  - On Place des Lices: Aux Marchés des Halles (greengrocer), Carlotta (pâtisserie).
  - On Place de la Trinité: Breizh Café.
  - The developers wanted the row to be "lively, open to everyone, not elitist".
  - Le Fooding (FR, updated Aug 2026) still describes the shop as the « première victoire du complot commerçant qui fomentait dans l'ombre du Mama Shelter – rejoint depuis par un traiteur, torréfacteur, caviste et Breizh Café ». That is a 2024–2026 confirmation of the traiteur / roaster / wine-shop / Breizh Café neighbours. Carlotta and Aux Marchés des Halles were not re-confirmed. In March 2026 Le Cellier des Lices tagged the shop on Instagram, so the wine shop is still active. (https://lefooding.com/commerces/boucherie-de-la-monnaie)
- **Place des Lices.** A medieval jousting ground: « lices » are the barriers of the lists, and tradition says Bertrand Du Guesclin fought his first tournament here in 1337. It is lined with 17th-century parliamentarians' mansions (hôtel Racapé de la Feuillée, 1659) and timber-framed houses ([ryo.co](https://ryo.co/fr/destinations/france/lieux/place-des-lices-rennes/), [monumentum](https://monumentum.fr/monument-historique/pa00090738/rennes-maison-dite-aussi-hotel-racape-de-la-feuillee)).
- **Marché des Lices.** Every Saturday from 7:30, around the two cast-iron **Halles Martenot** (1867–1871). Held since 1622, it is described as France's second-largest market, with about 250 producers and up to 10,000 visitors. Its ritual is the « apéro-marché » ([Le Bonbon](https://lebonbon.fr/rennes/news/deuxieme-plus-grand-marche-france-se-trouve-a-rennes-depuis-400-ans/), [Routard](https://www.routard.com/fr/guide/france/bretagne/rennes/marche-des-lices)). **The shop is open 9:00–18:30 non-stop on Saturday**, so market day is its big day. The market also brings rival butchers to the square.
- **Nearby landmarks:** rue Saint-Michel (« rue de la Soif »), the Portes Mordelaises, Cathédrale Saint-Pierre, the Couvent des Jacobins convention centre (about 5 minutes on foot), metro Sainte-Anne ([Cityzeum](https://www.cityzeum.com/la-place-des-lices)).
- **Rennes cues to use with taste:**
  - The **mint**: coin-striking, engraving, milled coin edges, guilloché, « frappé ». This is the most distinctive and least clichéd asset.
  - **Odorico Art Deco mosaics** (47+ in the city; [Tourisme Bretagne](https://www.tourismebretagne.com/selon-mes-envies/topitos/4-escales-ou-la-culture-fait-des-etincelles/), [La Libre](https://www.lalibre.be/culture/arts/2018/08/11/odorico-lart-deco-rennais-K5255OYJKJE7ZEPROFBJE7UAKY/)). These echo old French butcher-shop tiling.
  - The 286 **half-timbered houses** ([techno-science](https://www.techno-science.net/fr/definitions/patrimoine-architectural-de-rennes)), and **schiste pourpre** and granite.
  - The **galette-saucisse** (Stade Rennais anthem « Galette saucisse je t'aime », [Wikipedia](https://en.wikipedia.org/wiki/Galette-saucisse)). The shop does make sausages, and Madame Claude reportedly serves its saucisse in a galette « en cornet » ([IG](https://www.instagram.com/p/DEMyUk3IY-M)), so a wink is legitimate. Do not claim a "galette-saucisse" product.
  - Breton heritage breeds and poultry (Coucou de Rennes, Volailles de Janzé, Armoricaine, Froment du Léon, Bretonne Pie Noir, Porc Blanc de l'Ouest). **None of these is confirmed as stocked**, so do not use them as products.
- **Avoid:** Gwenn-ha-Du flags, triskells, ermine wallpaper, lighthouses, bigoudène coiffes, marinière stripes. That is coastal and tourist Brittany, not central Rennes.
- **City context:** about 220k inhabitants (metro about 400k), with about 73–78k students ([Unidivers](https://unidivers.fr/rennes-deuxieme-ville-etudiante-france/), [capitainestudy](https://www.capitainestudy.fr/articles/ville-etudiante/rennes-top-5-des-quartiers-ou-vivre-quand-on-est-etudiant/)).

---

## 7. Competitors and positioning

Distances are the market researcher's estimates and are not sourced.

| Competitor | Where | Profile | Rating | How La Monnaie differs | Sources |
|---|---|---|---|---|---|
| **La Boucherie Rennaise** (Anne & Sylvain) | Halles Centrales / La Criée, ~700 m; also Marché des Lices on Saturday | Upmarket: Wagyu, Angus, Pata Negra, Blonde d'Aquitaine tomahawk, pré-salé lamb. Basic template website. **Closest premium rival.** | 4.5 | Own street boutique and brand; whole-carcass and transparency story; in-house cook and traiteur; young Paris-trained founder; heritage French breeds rather than Wagyu | https://www.laboucherierennaise-35.com/ · https://www.gillespudlowski.com/?p=205441 · https://www.laptiteboucherie.fr/boucheries/35238-rennes/ |
| **Saint Cochon** | 50 rue Ange Blaize, ~1.8–2 km | Butcher, charcutier and lunch counter (Aurélien Chevalier). Pork from Régis Després, Armoricaine beef. **The only other Le Fooding butcher in Rennes.** | 4.8 (70–80) | Hyper-central heritage address, épicerie fine, multi-region breeds plus maturation cellars | https://lefooding.com/commerces/saint-cochon · https://unidivers.fr/rennes-restaurant-saint-cochon/ |
| **Boucherie des Quais** | Galeries Lafayette food hall, rue de Rohan, ~700–800 m | Young artisan (Sébastien Le Guellec): Parthenaise beef, Brocéliande lamb, Breton pork, house pâtés. Open Mon–Sat 10–20. **Most similar profile.** | 5.0 (~30) | Standalone heritage boutique rather than a department-store counter; Paris training; maturation; Le Fooding. Weak point: closed Mondays, shorter hours. | https://www.rennes-infos-autrement.fr/galeries-lafayette-la-boucherie-artisanale-des-quais/ · https://www.pagesjaunes.fr/pros/62828221 |
| **Maison Beucher** | Halles Centrales stand + Marché des Lices; based in Châteaugiron | Five generations since 1895, 3 shops, 4 markets. Gault&Millau ("Beucher Traiteur"). | — | New (2023) and urban; Paris-level craft rather than dynasty | https://www.beucher.fr/ · https://www.lejournaldesentreprises.com/article/la-cinquieme-generation-prend-les-renes-de-la-maison-beucher-2120635 · https://fr.gaultmillau.com/en/bretagne/ille-et-vilaine/rennes |
| **Maison Dumont** | 28 rue de Nemours, ~700 m | Charcutier-traiteur: pâtés en croûte, terrines, Bellota/Parma hams. Gault&Millau. Online shop. | — | Raw-meat butchery is the core; charcuterie comes from its own carcasses | https://fr.gaultmillau.com/fr/artisans/maison-dumont-rennes · https://www.sluurpy.fr/rennes/restaurant/2040671/maison-dumont |
| **Boucherie Briand** | Halles Centrales, 1 place Honoré Commeurec, ~700 m | Traditional covered-market counter, no website | — | Curated boutique, Instagram, fine grocery | https://www.au-magasin.fr/35-ille-et-vilaine/boucherie-charcuterie-traiteur/ · https://unidivers.fr/les-halles-centrales-la-criee-marche-central/ |
| **Boucherie Letendre** / **Maison Boullé** | Halles Centrales | Letendre: since 2011, butcher + takeaway, 4.5 (40+). Boullé: 5/5 (9). | 4.5 / 5.0 | One-butcher voice, maturation, whole carcass | https://www.xerfi.com/etudes-par-entreprise/letendre-les-halles_534100755 · https://boucherie.tel/ville/rennes/ |
| Others | Maître Boucher (19 rue Saint-Hélier); Au Boeuf Limousin (120 bd de Verdun, 4.6/~110); Boucherie Beauregard (4.6/76); Boucherie Vaneau / Afghane Halal (halal, a different segment). **Maître Jacques** is an industrial producer, not a retail rival. | | | | https://www.au-magasin.fr/35-ille-et-vilaine/boucherie-charcuterie-traiteur/ · https://vvanat.fr/blog/maitres-jacques-trimaran-rennes/ |

**Positioning: how it wins.**
1. **« Rien à cacher »**: craft done in front of you, whole carcasses, named breeds. No rival tells this story.
2. **The cave de maturation**: 4 to 8 week dry-aged beef that customers say has « pas d'équivalent sur Rennes ».
3. **The butcher as cooking coach**: the top review theme. Turn it into the site's main utility (cut finder plus cooking advice).
4. **Butcher + traiteur + épicerie under one roof**: lunch, apéro, celebration meals.
5. **The address**: the old royal mint, in the Lices food cluster, open non-stop on market Saturday.
6. **Recognition**: Le Fooding (one of two Rennes butchers) and 5/5 on Google.
7. **The web gap**: it has no website, most rivals have templates or nothing, and a customer asked for « le téléphone sur le site pour commander ». A refined, useful site stands out on its own.

---

## 8. Inspiration

| Reference | URL | What to take | What to leave |
|---|---|---|---|
| Turner & George, London | https://www.turnerandgeorge.co.uk/ | "Cut to order" hero; species taxonomy (Beef / Lamb / Poultry / Pork + Larder); founder story; "Dry Aged in House" proof tiles; shop card with hours | Shopify e-commerce cart (we have no online sales) |
| Victor Churchill, Sydney / Melbourne | https://www.victorchurchill.com/ | The shop as a destination and experience; very restrained type and neutral palette | Its 144-year heritage line (ours is 2023) |
| Macelleria Cecchini, Panzano | https://www.dariocecchini.com/ | Manifesto hero (« dal naso alla coda »), which maps onto whole-carcass work; warm personal tone | Its Caslon + Sora pairing |
| Maison Vérot, Paris | https://www.maisonverot.fr/ | Pâté-en-croûte and best-seller rails; « Pas de charcuterie d'excellence sans un excellent cochon »; seasonal collections; printable traiteur menu | Naming farmers (we have no verified farm names) |
| Boucheries Cosse, Paris (where Hurault trained, per Le Fooding) | https://www.boucheries-cosse.fr/ | Lineage benchmark: « viandes maturées d'exception » | Its conventional look, which is what we must exceed |
| Porter Road, Nashville | https://porterroad.com/ | Confident type-led manifesto hero; a cheeky voice that stays premium (matches « copaings », « summer body ») | Its hormone-free badges (US context) |
| Salt & Time, Austin | https://www.saltandtime.com/ | Telling the "shop + kitchen" (butcher + traiteur) story together | Its slab serif |
| Simon Howie, The Scottish Butcher | https://thescottishbutcher.com/ · https://www.awwwards.com/websites/?text=butcher | A regional identity carrying a meat brand without kitsch | Its Scottish iconography |
| GOOD Meat (Resn, Awwwards SOTD 2021) | https://www.awwwards.com/sites/good-meat | Technical reference only: scroll storytelling, WebGL, sound | **Its message** (cultivated meat) and its teal/coral palette |
| Meatopia (Arro Labs, Awwwards HM 2026) | https://www.awwwards.com/sites/meatopia | Illustrated map, adapted as our map of origins (Bretagne, Lot, Landes, Quercy, Bigorre, Italie) | 3D cartoon style |
| Bavette La Boucherie, Milwaukee (Awwwards HM 2019) | https://onepagelove.com/bavette-la-boucherie · https://www.awwwards.com/websites/?text=boucherie | Parallax "Farms We Choose" pattern; long-scroll storytelling | Montserrat; the one-page format (we need a full site) |

Award galleries contain very few real butcher sites, so there is little design competition in this category.

---

## 9. Design direction

**Design read:** a multi-page showcase for a premium local artisan, aimed at central-Rennes food lovers and families, mostly on mobile. The visual language is engraved heritage meets cold, transparent craft, built on GSAP scroll storytelling and engraved SVG art. Dials: **VARIANCE 7 · MOTION 8 · DENSITY 4**.

**Tool notes.** `ui-ux-pro-max --design-system` (motion 8, variance 7) returned **"Scroll-Triggered Storytelling"** as the pattern. We **keep** it: chapters with a CTA at the end of each, a progress indicator, simpler mobile motion, and a readable final state under reduced motion. It also returned **"Liquid Glass"** with black + gold (#1C1917 / #A16207) and Cormorant / Montserrat. We **reject** those: generic luxury, an Apple-platform material with no link to a butcher, and Cormorant is already used by the sibling Bécam site. `design-taste-frontend` rules applied: no beige / brass / oxblood / espresso default palette, one accent, a serif only with a heritage justification (the mint), a sans for UI, zero em-dashes in site copy, at most one marquee, no custom cursor, one radius system.

**Sibling check, so this site does not repeat the others:**
- Fleur de Sel uses night + gold + Schibsted Grotesk.
- Bécam uses navy + gold + Cormorant / Montserrat.
- Chez René uses midnight-blue velvet + Bodoni Moda.
- Épicerie de Liberté uses asphalt + sodium amber + Big Shoulders / Barlow.
- Garage de l'Ille uses granite + **schiste pourpre** + Archivo.
- So this site gets **no gold, no navy, no purple schist, no Bodoni or Cormorant**.

### Concept: « Le Coin & le Billot »
**One-line idea:** *the old mint's striking die (« le coin monétaire ») meets the butcher's block (« le billot »). Every cut is struck, weighed and shown in full view, because here there is « rien à cacher ».*

In French, a *coin* is the engraved steel die that strikes a coin. The shop sits in the former royal mint, so the site borrows the mint's precision (engraving, milled edges, struck seals, silver) and combines it with the butcher's cold, glass-fronted transparency (stainless steel, chill-room white, the counter, the scale ticket). The meat itself is the only colour.

**Personality keywords:** transparent · precise · generous · frank (« franc ») · young but serious · epicurean · craftsmanlike · a bit cheeky (« les copaings »).

### Palette: « Chambre froide & argent frappé »
A **Cold Luxury** family: cool white, steel and struck silver, with **one meat-red accent**. This deliberately avoids the warm-craft beige / brass that every other artisan site uses, and it matches the transparency story and the « boucherie rutilante » customers describe. Contrast ratios below were computed with the WCAG formula.

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--givre` | `#F4F6F7` | Light background: chill-room / tile white (cool, not cream) | — |
| `--inox` | `#E3E7E9` | Raised surfaces, counter shelves, price tags | `--acier` on it: 14.2:1 |
| `--acier` | `#15191C` | Main text, headings, engraved line art | 16.3:1 on givre |
| `--plomb` | `#4C565D` | Secondary text, captions | 6.9:1 on givre |
| `--argent` | `#8A949B` | **Decorative only**: engraving hairlines, milled edges, coin rims (2.85:1, never for text) | — |
| `--rouge` | `#B0101C` | **The single accent**: primary CTA (« Appeler »), links, focus ring, the price on the scale ticket, the struck seal | 6.6:1 on givre; givre text on it 6.6:1 |
| `--cave` | `#0F1214` | Dark mode background: the maturation cellar | — |
| `--cave-2` | `#181D20` | Dark-mode surfaces | `#E9EDEE` text on it: 14.4:1 |
| `--cave-text` / `--cave-muted` | `#E9EDEE` / `#9AA5AC` | Dark-mode text | 16.0:1 / 7.5:1 on cave |
| `--rouge-cave` | `#FF5A5F` | Accent in dark mode | 6.2:1 on cave (use `--cave` text on red buttons) |
| Illustration-only: `--persille` | `#EFE3D6` | Intramuscular fat / marbling in SVG cut art | never UI |
| Illustration-only: maturation ramp | `#B3262E` → `#7E1F27` → `#4A1A1F` | Colour of the beef at day 0 → about day 28 → about day 56 in the cave timeline (it is functional: the meat darkens as it ages) | never UI |

Theme: follow `prefers-color-scheme`, with a toggle labelled « Comptoir / Cave » (light / dark). Lock one theme per page and never invert a single section. **Radius system:** every rectangle has square corners (0 radius: tiles, counter, tickets). **Only coins and seals are circles.**

### Critic revision: ground the palette and materials in the real shop (supersedes parts of the table above)
The palette above was written **before anyone had seen the logo or the interior**. Both are now known (§5), and they contradict the « chambre froide & argent » premise. The real brand is **bottle green + cream with retro épicerie lettering**. The real room is **black marble, black-framed glass maturation cabinets, a wooden billot, cement-tile floor and trailing plants**. A cold silver/steel site would look like a different shop to the people who walk in. Keep the concept (« Le Coin & le Billot », mint + transparency), the engraving art, the type and the motion, but **re-skin the palette**:

| Token | Hex | Role | Contrast (WCAG, computed) |
|---|---|---|---|
| `--vert-monnaie` | `#12433B` | **Brand ground**, from the logo: header band, footer, coin seals, hero plate, dark sections. This is the colour customers already know. | cream on it 9.8:1 |
| `--vert-cave` | `#0E2E28` | Dark mode background (« la cave »): a deeper version of the brand green, replacing `--cave #0F1214` | cream on it 12.9:1 |
| `--creme` | `#F6F1E4` | Light background and text on green. It is the logo's lettering colour, warmed slightly, and replaces `--givre`. | `--acier` on it 15.7:1 |
| `--acier` | `#15191C` | Body text and line engraving. It also stands for the **black marble counter and cabinet frames**. | 15.7:1 on creme |
| `--plomb` | `#4C565D` | Secondary text | 6.7:1 on creme |
| `--rouge` | `#B0101C` | **Single action accent**: « Appeler », links, focus, price on the ticket. The meat stays the only « warm » colour. Their own job-ad titles use a darker oxblood (about `#681018`); keep `#B0101C` for UI (6.3:1 on creme) and reserve the darker red for the maturation ramp. | 6.3:1 on creme |
| `--rouge-cave` | `#FF6B6B` | Accent on `--vert-cave` | 5.3:1 |
| `--argent` | `#8A949B` | Decorative only: coin rims, milled edges (the mint idea stays, in small doses) | never text |
| Illustration only: `--veine` | `#B48A5A` | Ochre veining of the black marble counter, used **only** inside the marble texture of the « comptoir » band. It is not a UI colour and not « gold » branding. | never UI |
| Illustration only: `--ciment-*` | `#E8DFCF` / `#B9B2A6` / `#B5654A` | The cement-tile floor (cream / warm grey / terracotta) | never UI |

**Materials to use as textures (all drawn by us, none copied):**
- **Carreaux de ciment.** A repeating SVG floral cement-tile pattern in the three `--ciment` tones becomes the **section divider band and the footer floor**. It **replaces the Odorico tesserae idea**: Odorico is a city cue, the cement tile is *their* floor.
- **Black-marble counter band.** A thin `--acier` band with procedural ochre veins (SVG `feTurbulence`, static) sits under the « Comptoir » catalogue, so products « sit on the counter ».
- **Pique-prix = their real tags.** The shop already labels every cut with a **small framed chalkboard tag**. Draw the pique-prix as a dark mini-slate with a thin wooden frame, cut name in Instrument Sans in `--creme`, €/kg in Plex Mono. This replaces the generic steel pick.
- **The cabinet wall.** The hero or the maturation chapter can frame content inside a **grid of black-framed glass doors** (thin `--acier` frames, faint reflective gradient, soft inner light). This is the shop's most striking real feature and a direct visual of « rien à cacher ».
- **Trailing plants.** A few line-engraved ivy sprigs hang from the top edge of the cabinet grid. They pick up the 🌿 in the Instagram bio. Use them sparingly.
- **Logo.** Real file only (see §5); our coin seal must **not** reuse their script / arched-caps lockup.

**Sibling check after the re-skin:** Garage de l'Ille uses a mid teal-green **`#2B6E60` as an accent** on granite grey. This site uses a **much darker bottle green `#12433B` as a ground with cream**, and its accent is red. They are visually distinct, but keep them apart: never use a mid-teal here. There is still no gold, navy, purple schist, Bodoni or Cormorant.

**Type check against the real lockup:** Gloock (sharp engraving serif) + Instrument Sans + Plex Mono still works, because Gloock's wedge-ish serifs sit well next to the logo's retro caps. **Do not add a script font**; the script belongs to their logo only.

### Typography
- **Display: Gloock** (Google Fonts, 400). A sharp, high-contrast serif with the bite of a copper-plate engraving or an old banknote. The serif is justified by the mint and engraving heritage. It is not Fraunces, Instrument Serif, Bodoni or Cormorant. Use it for big words only (« Rien à cacher. », cut names on plates, chapter titles). Set at `clamp(2.5rem, 7vw, 6.5rem)`, leading 1.05, with descender clearance for italics.
- **Body / UI: Instrument Sans** (Google Fonts, variable `wght` 400–700, `wdth` 75–100). A clean grotesk. Body 17–18px, line-height 1.55, max 65ch. Coin legends and seal text: Instrument Sans 600, uppercase, letter-spacing 0.2em, set on a circular SVG `textPath`.
- **Data / « ticket de balance »: IBM Plex Mono** (400 / 500) with `tabular-nums`, for €/kg, weights, maturation days, hours and the receipt-style components. It echoes the printout of a butcher's scale.
- Self-host with `@font-face` and `font-display: swap`; subset to Latin plus French accents. French typography: non-breaking spaces before `: ; ! ?`, « guillemets », and **no em-dash in any site copy**.

### Imagery (we may not use their photos)
- The Instagram photos and the @delajungle_elisa shoot are **not ours**. Use none of them unless the owner sends files with rights.
- **Main art direction: "taille-douce" engraved line art.** Original SVG illustrations in the style of banknote and coin engraving (cross-hatching, guilloché, stippling), drawn in `--acier` on `--givre` (or `--cave-text` on `--cave`). Subjects: the beef, pork and lamb carcass diagrams; individual cuts (côte de bœuf, bavette, côte première, gigot, poularde); the billot and knives; the maturation cabinet; the Hôtel des Monnaies façade; the Halles Martenot; a pâté en croûte cross-section; jars (Dohatsu, cornichons, moutarde) drawn generically, **without their labels or logos**.
- **Meat in colour:** where a cut is shown, fill only the meat with the red/marbling ramp, with marbling generated by SVG `feTurbulence` + `feColorMatrix`. Everything else stays line-engraved. "Only the meat is in colour" is the visual rule.
- **Texture:** a very faint guilloché rosette and a milled coin edge (`repeating-conic-gradient`) as the section divider. ~~Odorico-style tesserae in the footer band~~ **Superseded by the critic revision:** the footer uses the shop's own **carreaux de ciment** floor pattern instead.
- **Photo slots:** design 4:5 and 3:2 photo frames labelled `<!-- TODO photo boutique: fournie par la maison -->` so real photos can drop in later. Until then, show engraved art, never stock photos.

### Layout ideas
- **Le Comptoir (catalogue) as a glass counter.** Products sit on horizontal "shelves" divided by steel hairlines. Each product has a **pique-prix** (price-tag pick: name in Instrument Sans, €/kg in Plex Mono) instead of a card. Filters: species, cuisson, occasion, maturation. On mobile, the shelves become one-column lists with tags you can swipe horizontally.
- **Plates (« planches »).** Each species page opens like an engraved plate: a large Gloock title, a line-art carcass and a short note from the butcher. Use an asymmetric 7/5 grid on desktop, one column on mobile.
- **The scale ticket (« ticket de balance »)** is a recurring component. It shows the opening hours, the order summary, the maturation readout and the contact block as a Plex Mono receipt with a torn (zig-zag) bottom edge.
- **Coin seals** mark key proofs: « 5/5 Google », « Le Fooding », « Depuis 2023 », « Carcasses entières ». Each is a round struck-silver medallion with a circular legend.
- **Sticky call bar on mobile** (« Appeler la boucherie » + « Itinéraire »), answering the « téléphone sur le site » complaint.
- At least 4 different layout families on the home page, at most 2 image+text splits in a row, and at most one eyebrow per three sections.

### Signature interaction: « La Carcasse entière » (whole-carcass cut finder)
This is grounded in the shop's two strongest truths: whole-carcass butchery and the cooking advice customers praise most.
- Three tabs, **Bœuf / Cochon / Agneau**, each a large engraved SVG carcass split into hit areas for each cut (*paleron, macreuse, plat de côtes, entrecôte, faux-filet, filet, bavette, onglet, rumsteck, gîte, joue… / échine, côte première, filet mignon, poitrine, jambon, jarret… / épaule, carré, selle, gigot, souris…*).
- Hovering or tapping a region makes it "fill" with meat colour (clip-path wipe plus marbling noise). A **« Conseil du boucher »** panel slides in with the cut name in Gloock, the best cooking methods (four icons: poêle / four / barbecue-plancha / mijoté), recommended thickness, resting time, a portion guide (« Combien par personne ? »), a matching épicerie item and an Instagram-style one-liner in the house tone.
- Inside the panel, a **weight slider** prints a live **ticket de balance** in Plex Mono: poids, prix/kg (mock), total, nombre de convives. A « Ajouter à ma liste » button triggers the **frappe**: a silver coin seal stamps onto the list (scale 1.25 → 1 with a 2px recoil and a short emboss highlight), and the list counter ticks.
- The list (« Ma liste pour le comptoir ») is **not a cart**. It produces a `tel:` CTA plus a pre-filled `mailto:` / copy-to-clipboard text to send to the shop, which matches the real ordering channels (phone, in person, DM). No payment.
- Accessibility: every region is also reachable from a plain `<ul>` list of cuts (the SVG is `aria-hidden` and duplicated by real buttons). It works fully by keyboard. Selection uses an outline + a fill + a text label, never colour alone.

### Motion language
Stack (check docs and caniuse before building): **GSAP + ScrollTrigger + SplitText** for pinned and scrubbed storytelling, **Lenis** for smooth scroll (disabled under reduced motion), the **cross-document View Transitions API** for page transitions with a fallback, and **CSS scroll-driven animations** (`animation-timeline: view()`) for light reveals with an `@supports` fallback. Animate only `transform`, `opacity` and `clip-path`. Easing: `expo.out` / `cubic-bezier(0.16,1,0.3,1)` for entrances; `power4.inOut` for the strike. Exits are faster than entrances.

- **Hero, « La Frappe ».** The page opens on `--givre`. A silver coin die (an engraved circle) drops and **strikes** the centre: a 120ms impact, a hairline shock ring, and our seal « LA BOUCHERIE DE LA MONNAIE · RENNES » left embossed. The die lifts away and the seal slides aside. **« Rien à cacher. »** (Gloock) is then revealed line by line through a horizontal mask, like a knife pass (SplitText lines, clip-path from left). Subtext (≤ 20 words): « Boucher, charcutier, traiteur. Carcasses entières et viandes affinées dans nos caves, rue de la Monnaie. » CTAs: **« Appeler »** (rouge) + « Voir le comptoir ». Behind the text, a line-engraved côte de bœuf slowly turns its marbling on as the cursor or device tilts (2–4° parallax, disabled on touch).
- **Scroll storytelling, home page in five chapters** (with a progress rail styled as a thin milled coin edge):
  1. **« À la vue de tous »**: a pinned section. The engraved billot sits centre; three knives draw themselves (SVG stroke-dashoffset) while short lines appear: open workspace, individual blocks, « Nous n'avons rien à cacher ».
  2. **« La carcasse entière »**: the engraved carcass scrubs from whole to cut (the lines separate along the cut map as you scroll), handing over to the signature cut finder.
  3. **« La cave de maturation »**: a pinned horizontal timeline from **J0 → J28 → J42 → J56**, a Plex Mono day counter and a steak whose colour scrubs along the maturation ramp while a crust texture fades in. The only stops are the real ones: Bavette Normande 4 semaines, Limousine 6 semaines, Minhota 8 semaines. No invented cellar temperature or humidity.
  4. **« D'où vient la viande »**: an engraved map of France plus Italy. Origin points stamp in one by one (Bretagne / Retiers, Lot, Landes, Quercy, Bigorre, Sud-Ouest, Pays basque for Dohatsu, Italie), each with a breed or product label. **Regions only, no invented farm names.**
  5. **« Le comptoir, la cuisine, l'épicerie »**: the one **marquee** on the page (breeds: Noir de Bigorre · Limousine · Normande · Minhota · Blonde de Galice · Noire de Baltique · Salers × Angus · Agneau du Quercy), then traiteur and épicerie, then the climax: the scale ticket with hours, address and « Appeler ».
- **Page transitions, « Le rideau de lanières ».** On navigation, a curtain of translucent vertical cold-room strips (8–12 frosted strips, `backdrop-filter` with a solid fallback) sweeps closed and parts again with a slight stagger. It is the butcher's cold-room curtain and a nod to transparency. 450ms total, View Transitions where supported, a plain cross-fade otherwise.
- **Micro-interactions:**
  - Pique-prix tags tilt 2° on hover, like a pick in the counter.
  - Product rows reveal a cross-section "slice" (clip-path diagonal wipe) on hover or focus.
  - CTAs have a slight magnetic pull (≤ 6px, pointer devices only) and `scale(0.98)` on press.
  - The scale ticket "prints" (translateY with stepped easing) when it enters the viewport.
  - The hours ticket marks today's line and shows « Ouvert / Fermé » from the real hours table (semantic state only).
  - Coin seals rotate 8° on hover and their milled edge catches light (a conic-gradient sweep).
  - The Saturday line carries a « Jour de marché » mark.
- **Reduced-motion fallback** (`prefers-reduced-motion: reduce`):
  - No strike, no Lenis, no pinning, no scrub, no parallax, no marquee (it becomes a static wrapped list), no curtain (an instant swap or a 150ms fade).
  - The hero renders struck and complete.
  - The cave timeline becomes three static cards (J28 / J42 / J56) at their final colours.
  - The carcass shows the cut map in its final state.
  - All content is in the DOM and readable. Nothing exists only in a canvas.
  - Also degrade on `(hover: none)` and on low-power devices (reduce SVG filter use, skip `feTurbulence` animation).

---

## 10. Site map

French routes (Vite multi-page build). Every page shares a header (wordmark seal, nav, « Appeler » button, Comptoir / Cave toggle), a footer on `--vert-monnaie` (scale-ticket hours, address, metro, socials, milled edge + **carreaux de ciment** band, legal links) and the mobile sticky call bar.

1. **`/` Accueil**: hero « La Frappe »; the five chapters (§9); « Les signatures » (saucisse vigneronne, côte de bœuf maturée, Noir de Bigorre, foie gras maison, pâté en croûte, bouchées à la reine); real Google quotes carousel (6 quotes, attributed « Avis Google »); coin seals (5/5 Google · Le Fooding · Depuis 2023 · Carcasses entières); « Ce samedi au marché » teaser; journal teaser (3 posts); hours ticket + map link + Appeler.
2. **`/la-maison/` La Maison**: the story (Rennes → Paris houses → 4 years in Rennes → 30 March 2023, first of the Échoppes); « Rien à cacher » manifesto with the real quotes; the billot (open-view work); values (élevages responsables, circuits courts, plein air, carcasses entières); the team as **roles** (le gérant Aymeric Hurault, bouchers, cuisinier; no invented names or faces); the building (Hôtel des Monnaies timeline, rue de la Cordonnerie); press (Ouest-France, Rennes Business Mag / Rennes Infos Autrement, Le Fooding) with links.
3. **`/comptoir/` Le Comptoir** (catalogue hub): filter bar (espèce, cuisson, occasion, maturation, « Coup de cœur du boucher »), a search field, and the counter shelves.
   - `/comptoir/boeuf/`, `/comptoir/cochon/`, `/comptoir/veau-agneau/`, `/comptoir/volailles/`: each plate has an engraved header, the product list with pique-prix, the cut-finder tab pre-selected, and a « Conseil du boucher » of the week.
4. **`/carcasse/` La Carcasse entière**: the full signature cut finder, plus « Ma liste pour le comptoir » (call / copy / mailto).
5. **`/cave-de-maturation/` La Cave**: the pinned maturation timeline; what dry-ageing does (texture, flavour, weight loss, crust trimming, kept educational and general); the breeds shown (Normande, Limousine, Minhota, Noire de Baltique, Blonde de Galice, Salers × Angus); « Comment cuire une viande maturée » (« Pas besoin de sortir le barbecue ou la plancha… »).
6. **`/charcuterie/` Charcuterie maison**: saucisse vigneronne story; terrines from the whole pig; pâté en croûte cross-section; foie gras (seasonal); coppa, rillettes de bœuf au piment d'Espelette; Bellota & Cecina range; « Planche apéro » builder (mock).
7. **`/traiteur/` Traiteur**: « Le plat du jour » week grid (mock rotation built on real dishes); entrées / plats / desserts « faits maison »; « Pour vos fêtes et réceptions » (pre-order calendar: Pâques agneau, Noël foie gras, etc.); a downloadable printable menu (HTML print stylesheet).
8. **`/epicerie/` L'Épicerie fine**: real items (Kaïa, Maison Marc, moutarde d'Orléans, Dohatsu €9.90/L) plus mock complementary items, grouped by « pour la viande », « pour l'apéro », « pour le bouillon ».
9. **`/origines/` D'où vient la viande**: engraved map of origin regions; breed cards (AOP / IGP / Label Rouge explained); the « J'ai pris du temps pour rencontrer les éleveurs » quote.
10. **`/journal/` Le Journal**: recipes and conseils (8–10 posts, mock) with filters (recettes, conseils, saison, la maison) + an article template page `/journal/<slug>/`.
11. **`/samedi-marche/` Le Samedi des Lices**: non-stop Saturday, the Marché des Lices context, apéro-marché suggestions, neighbouring échoppes (as "nos voisins", 2023 line-up, with a caveat).
12. **`/galerie/` Galerie**: 18+ engraved illustrations and photo slots, masonry layout with a lightbox.
13. **`/faq/` Questions fréquentes**: 12+ entries in accordions.
14. **`/contact/` Contact & accès**: phone (click-to-call), Instagram, Facebook, email (once confirmed), address, OpenStreetMap / Google Maps link (no embed tracking), metro / bus / vélo / parking, the hours ticket with live open status, an "order request" form that only builds a `mailto:` (no backend).
15. **`/recrutement/` Nous rejoindre**: the real tone (« Vous aimez la belle viande, le travail artisanal et la satisfaction client ? Rejoignez-nous ! »). The open role "Boucher H/F" uses the **real published terms (Oct 2026)**: CDI, 39 h, repos dimanche & lundi + une après-midi dans la semaine, salaire selon profil, petite équipe. How to apply: « Candidatures à déposer à la boutique » or « Contactez-nous en message privé ». The three caption criteria (savoir-faire, sens du service et du travail en équipe, exigence sur la qualité) go in a short list. Show a « Annonce publiée en octobre 2026 » date and a TODO to hide the role once it is filled.
16. **`/mentions-legales/`**: SARL BOUCHERIE DE LA MONNAIE, capital €10,000, SIREN / SIRET / RCS Rennes / VAT, 10 rue de la Monnaie; publication director = gérant (TODO confirm); host = GitHub Pages; image credits. **`/confidentialite/`**: no cookies or trackers.
17. **`404.html`**: « Ce morceau n'est plus en vitrine. » with an engraved empty billot and links back.

---

## 11. Mock-data plan

Typed data layer in `src/data/*.ts`, with exported interfaces and a header comment `// DONNÉES D'EXEMPLE (sample data) – à remplacer par les données réelles de la boutique`. Real facts live in a separate `src/data/business.ts` marked `// VÉRIFIÉ – voir PLAN.md §1`. **All prices except the Dohatsu broth are mock**, so show a small « Prix indicatifs, demandez au comptoir » note wherever prices appear.

| Dataset | File | Count | Contents / real names to draw from | Mock price ranges (samples, not research) |
|---|---|---|---|---|
| Business facts | `business.ts` | 1 | Name, legal data, address, GPS, hours (§1), socials, phone (one constant `PHONE_PRIMARY`, see §13), rating text « 5/5 sur Google (plus de 60 avis) » | — |
| Products: bœuf | `products.ts` | 18–22 | côte de bœuf maturée, entrecôte Noire de Baltique, entrecôte limousine, faux-filet Minhota 8 sem., bavette Normande 4 sem., côte basse, filet bardé, tournedos bardé Noir de Bigorre, onglet, rumsteck, paleron, macreuse, joue, plat de côtes, bourguignon, haché minute, makis au lard de Colonnata, Blonde de Galice, Salers × Angus | Mature premium cuts €45–99/kg (Minhota 8 sem. at the top); bavette / onglet €32–42/kg; filet / tournedos €69–90/kg; braising cuts €18–26/kg |
| Products: cochon | `products.ts` | 10–12 | côte première cochon breton élevé sur paille, échine, filet mignon, poitrine, jarret, rôti, Noir de Bigorre (côte, ventrèche), porc de Retiers, saucisse vigneronne, merguez à la menthe, chipolatas | Breton pork €16–28/kg; Noir de Bigorre €39–55/kg; sausages €19–23/kg (19 €/kg is the only real 2023 datapoint) |
| Products: veau & agneau | `products.ts` | 10–12 | veau de lait breton (escalope, quasi, blanquette, ris de veau), agneau du Quercy IGP Label Rouge (gigot, carré, épaule, souris, côtelettes), agneau de bergerie | Veal €24–52/kg; lamb €28–62/kg |
| Products: volailles | `products.ts` | 5–6 | poularde fermière jaune des Landes, poulet fermier, suprêmes, cuisses, volaille bio | €14–28/kg |
| Charcuterie | `products.ts` | 12–14 | terrine de campagne, pâté en croûte, foie gras de canard du Sud-Ouest, rillettes de bœuf au piment d'Espelette, coppa, pâté de lapin, rosette / coppa / lomo Bellota, cecina, saucisse vigneronne cuite | Terrines €26–36/kg; pâté en croûte €42–58/kg; foie gras €120–160/kg; Bellota €75–110/kg |
| Traiteur | `traiteur.ts` | 15–18 | bouchées à la reine au ris de veau, souris d'agneau basse température, bourguignon, blanquette, couscous, joue de porc confite, quiches, lasagnes, ratatouille, salade melon-tomate-pastèque, brochettes marinées, sandwich du midi, desserts maison (generic: riz au lait, tarte du moment) | €7–16 per portion; sandwich €7.50–9.50 |
| Épicerie fine | `epicerie.ts` | 12–15 | **Real:** Kaïa olive oil, Maison Marc cornichons, moutarde d'Orléans, Dohatsu broth (**€9.90/L, real**). **Mock generic:** sel, poivres, sauces, vins (the neighbouring Cellier is a shop, not a product: don't invent a partnership) | €4–28 |
| Cuts for the finder | `cuts.ts` | ~40 (bœuf 18, cochon 12, agneau 10) | French cut names, SVG region id, cuisson[], épaisseur, repos, g/personne (150–250 g, bone-in 350–450 g), conseil (house tone), pairing | linked to product €/kg |
| Maturation stops | `maturation.ts` | 4 real + 2 educational | J28 Normande bavette, J42 Limousine, J56 Minhota faux-filet, **J56 Noire de Baltique entrecôte (critic pass, from a review)**, côte de bœuf « 8 semaines » (review) as a variant of J56; J0 and J14 as generic steps | — |
| Cabinet wall | `vitrine.ts` | 24–30 slots | One slot per cut in the hero / cave « mur de vitrines » grid: cut, breed, days matured, pique-prix label text. Reuse the product ids. | linked to product €/kg |
| Fêtes calendar | `fetes.ts` | 6 | Pâques (agneau du Quercy, real), Fête des pères (côte de bœuf, mock), barbecue season (brochettes / merguez, real items), rentrée (Bellota, real Sep 2025), Noël (foie gras maison, real item; order-by date mock), Nouvel An (pâté en croûte, real item). Each has an « exemple » flag for dates. | — |
| Plat du jour rotation | `traiteur.ts` (`weekRotation`) | 5 days × 3 (entrée / plat / dessert) = 15 | Built only from §3 real dishes plus generic desserts; Saturday shows « Spécial marché » | — |
| Origins | `origins.ts` | 8 | Bretagne, Retiers (35), Lot, Landes, Quercy, Bigorre, Sud-Ouest, Pays basque, Italie: **regions and breeds only** | — |
| Journal | `journal.ts` | 8–10 | « Cuire une côte de bœuf maturée sans barbecue », « Pourquoi des carcasses entières ? », « Pâques : l'agneau du Quercy », « La rentrée du Bellota », « Le foie gras de Noël, à commander quand ? », « Apéro : makis de bœuf au lard de Colonnata », « Bavette, onglet, hampe : les pièces du boucher », « Le samedi des Lices », « Bouillon Dohatsu : la pépite », « Combien de viande par personne ? ». Each has a date (2025–2026), category, read time and engraved cover. **Recipes are generic cooking content, not attributed to the owner.** | — |
| FAQ | `faq.ts` | 14 | Commander ? (phone / in person / DM) · Sous vide / congélation ? (real) · Livraison ? (« Renseignez-vous au comptoir », TODO) · Halal ? (« Non, nous travaillons notamment le porc ») · Viande maturée, c'est quoi ? · Combien par personne ? · Fermeture estivale ? (« chaque été, annoncée sur Instagram ») · Paiement ? (cartes, sans contact: to confirm) · Accès / parking · Traiteur pour événements ? · Origine des viandes ? · Foie gras de fin d'année ? · Le samedi ? (non-stop) · Le lundi ? (fermé) | — |
| Gallery | `gallery.ts` | 18–24 | engraved SVG art + labelled photo slots: billot, vitrine, cave, carcasse, façade de l'Hôtel des Monnaies, Halles Martenot, pâté en croûte, saucisse vigneronne, côte de bœuf, bocaux | — |
| Events / offers | `events.ts` | 6–8 | **Real past events:** côte de bœuf giveaways (Jul 2023, 2024), Easter Quercy lamb, rentrée Bellota (Sep 2025), summer closure. **Mock, labelled "exemple":** « Coup de cœur du samedi », précommandes Noël, « Conseil cuisson du mois » | — |
| Testimonials | `reviews.ts` | 20 (+1 partner quote) | **Only the real quotes from §4** (now 20 customer quotes), attributed « Avis Google » with month/year, plus quote 21 attributed « Filière Noir de Bigorre AOP ». No mock reviews. | — |
| Stats | `stats.ts` | 5 | **Real only:** « Depuis 2023 », « 5/5 sur Google », « 3 espèces travaillées en carcasse entière », « jusqu'à 8 semaines d'affinage », « 1 des 2 boucheries de Rennes au Fooding ». No fake counts. | — |
| Hours | `business.ts` | 7 rows | Real hours (§1) + `exceptions[]` (empty; TODO) | — |
| Team roles | `team.ts` | 3–4 | Aymeric Hurault, gérant & boucher (real, public); « Boucher·ère », « Cuisinier·ère », « Apprenti·e » as roles only, no names or portraits | — |

Tags to use across products: `maturé`, `AOP`, `IGP`, `Label Rouge`, `breton`, `fait maison`, `barbecue`, `plancha`, `four`, `mijoté`, `apéro`, `fêtes`, `de saison`, `coup de cœur`, `sous vide possible`.

---

## 12. Content rules

**Real, must stay exact:**
- Name « La Boucherie de la Monnaie »; 10 rue de la Monnaie, 35000 Rennes; SIREN / SIRET / VAT / capital.
- Hours exactly as in §1.
- Gérant **Aymeric Hurault** (public). Founding « depuis 2023 » / opening 30 mars 2023.
- Breeds, labels and product names as sourced; Dohatsu €9.90/L.
- Rating wording « 5/5 sur Google (plus de 60 avis) »; Le Fooding listing wording (« sélectionnée par Le Fooding »).
- Press headlines and quotes, verbatim, with a link.
- Instagram handle **@boucheriedelamonnaie** and the Facebook URL.

**May be mock (clearly sample):** all prices except Dohatsu; per-kg values; traiteur rotation; journal posts and recipes; FAQ wording; gallery art; events marked « exemple »; cut-finder advice text (general butchery knowledge in the house tone); team **roles**.

**Never invent for this business:**
- Farm or breeder names. Only « une ferme éco-responsable à Retiers », with no name, and regions.
- Awards, MOF, labels for the shop, « Maître Artisan ».
- Delivery, click & collect, gift vouchers (the €15/€25 deal), online payment.
- Cellar temperature or humidity figures.
- Staff names other than Aymeric. Customer names on testimonials. Mock reviews.
- A logo imitation. The real logo is now described in §5. **Use the owner-supplied file or nothing.** Do not trace it from the directory image, and do not recreate the « La / BOUCHERIE / de la / MONNAIE » arched-caps + script lockup in CSS.
- A hygiene / Alim'confiance badge (no record exists), « accessible PMR » (unknown), or home delivery (directory boilerplate only).
- Any use of the expired « 15 € → 25 € » voucher.
- Revenue figures.
- The 1774 gold-patera anecdote stated as fact.
- That the shop stocks Coucou de Rennes, Volailles de Janzé or Breton cattle breeds.
- Current Mama Shelter supply (say « la saucisse vigneronne servie au Mama Shelter, selon Ouest-France (2023) » if used at all).
- A « galette-saucisse » product.
- A « halal » or « bio » label. « Bio » applies only to some poultry, per Ouest-France: « volailles fermières et bio ».

**Privacy:**
- Do not publish Aymeric's birth year, middle names, home address or personal email (they appear in registers and a job ad).
- Pappers states the company **opposed the use of its data for commercial prospecting**. Treat this site as a design showcase. Do not use the business's contact data for outreach without the owner's agreement, and flag this to the user.

**Copy style:**
- French, warm and short, the house tone (« se faire plaisir », « belle viande », « bien élevé », « régalez-vous »), with occasional trailing « … ».
- No emojis in UI (use icons). An emoji may appear only inside a quoted Instagram caption.
- Zero em-dashes in site copy. « guillemets », non-breaking spaces before `: ; ! ?`.
- JSON-LD `ButcherShop` (LocalBusiness subtype) with verified fields only: name, address, geo, openingHoursSpecification, sameAs (Instagram, Facebook), priceRange "€€€". Add telephone only once confirmed; otherwise leave it out of JSON-LD or use the primary constant flagged TODO.

---

## 13. Unknowns / TODO

| # | Unknown / conflict | How to resolve |
|---|---|---|
| 1 | **Phone**: 02 99 22 04 96 (Le Fooding, PagesJaunes, directories) vs +33 2 23 46 27 54 (own Facebook snippet, TripAdvisor) | **Largely resolved in critic pass:** (A) is on the owner-maintained Ouest-France Commerces listing and in the full Ouest-France article. Use `PHONE_PRIMARY = '02 99 22 04 96'` (+33 2 99 22 04 96). Keep a light `// TODO confirmer` only for the origin of (B), which may be an old or second line. Never show (B). |
| 2 | **Logo file, exact font names, shopfront (exterior) look** | Logo design and colours are now known (§5). Still ask the owner for the **vector logo file** and shop photos with rights (the interior is known from their posts, but those photos are not ours). The exterior / signage is still undescribed. |
| 3 | **Email** (gmail address seen only in a Facebook snippet) | Confirm with the owner before showing it. |
| 4 | **Delivery** (Ouest-France Commerces icon + boilerplate FAQ only); the €15 → €25 voucher has **expired** | Do not advertise delivery. Drop the voucher entirely. |
| 5 | **Prices / price list** | Ask for current €/kg; keep mock with a « prix indicatifs » note. |
| 6 | Weekday closing **19:00 vs 19:30**; Saturday opening **9:00 vs 9:30** | Majority says 19:30 and 9:00; confirm. |
| 7 | **Holiday / summer closures 2026–27** | Ask; the Aug 2025 closure was 2–25 Aug. |
| 8 | **Payment methods** (aggregator only) | Confirm (cards, contactless; meal vouchers? cheques?). |
| 9 | **Accessibility** (step-free entrance?) and parking details | Ask; add to the contact page. |
| 10 | Saucisse vigneronne at **Mama Shelter**: single paywalled 2023 source; is it current? | Ask the owner; otherwise cite as Ouest-France 2023 only. |
| 11 | Paris training houses (Le Bourdonnec, Cosse) are named only by Le Fooding | Safe to cite « selon Le Fooding »; confirm wording with the owner. |
| 12 | Current team size and names; whether they want to appear | Ask; roles only for now. |
| 13 | Farm and supplier names (beyond regions, Retiers and Noir de Bigorre producer) | Ask; the origins page is ready to take them. |
| 14 | Google rating seen only via mirrors; exact count | Check Google Maps directly when the scraper is available; keep « plus de 60 avis ». |
| 15 | ~~TripAdvisor content~~ (resolved: 0 reviews, unclaimed). Facebook reviews text (2 reviews) still behind login. | Low priority. |
| 16 | ~~Content of the 9 Oct 2026 job-ad post~~ **Resolved:** CDI 39 h, Sunday + Monday + one afternoon off, applications at the shop or by DM | Use the real terms on `/recrutement/`. |
| 17 | Current Échoppes des Lices line-up | Partly resolved: Le Fooding (Aug 2026) confirms the traiteur, roaster, wine shop and Breizh Café. Carlotta and Aux Marchés des Halles are unconfirmed, so keep the caveat for them. |
| 21 | Google Street View interior tour (mentioned by a review) | Could give a full interior read; open it only with the user's go-ahead and never as a screenshot. Use text only. |
| 22 | The Aug 2026 traiteur noodle dish name | Ask the owner, or keep it as a mock rotation item. |
| 18 | January 2025 statute update content | Irrelevant to the site; ignore. |
| 19 | Christmas / New Year catering menu | None online; mock the pre-order calendar as « exemple ». |
| 20 | Whether the owner agrees to a showcase site (Pappers opposition to prospecting) | Flag to the user before any outreach or deployment. |

---

## 14. Sources

**Official registers**
- https://recherche-entreprises.api.gouv.fr/search?q=boucherie%20de%20la%20monnaie&departement=35
- https://recherche-entreprises.api.gouv.fr/search?q=boucherie%20de%20la%20monnaie&code_postal=35000
- https://recherche-entreprises.api.gouv.fr/search?q=921407201
- https://annuaire-entreprises.data.gouv.fr/entreprise/921407201
- https://annuaire-entreprises.data.gouv.fr/entreprise/boucherie-de-la-monnaie-921407201
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=registre%20like%20%22921407201%22
- https://www.bodacc.fr/pages/annonces-commerciales-detail/?q.id=id:B20230025818
- https://www.bodacc.fr/pages/annonces-commerciales-detail/?q.id=id:A20220224859
- https://www.societe.com/societe/boucherie-de-la-monnaie-921407201.html
- https://www.societe.com/etablissement/boucherie-de-la-monnaie-92140720100018.html
- https://www.pappers.fr/entreprise/boucherie-de-la-monnaie-921407201
- https://entreprises.lefigaro.fr/boucherie-de-la-monnaie-35/entreprise-921407201

**Own channels**
- https://www.instagram.com/boucheriedelamonnaie/
- https://www.instagram.com/p/DeRODPJOqjM/
- https://www.instagram.com/boucheriedelamonnaie/p/DMak0gioDuy/
- https://www.instagram.com/boucheriedelamonnaie/p/C2xYeblMJkg/
- https://www.instagram.com/boucheriedelamonnaie/p/DCSFRuXs3b2/
- https://www.instagram.com/boucheriedelamonnaie/p/Cw5m4sUMrqG/
- https://www.instagram.com/p/CvQKTGDs78N
- https://www.instagram.com/p/C_TinjCsL6c/
- https://www.instagram.com/p/Cu40SfgMP92
- https://www.instagram.com/reel/C8AUPytsIU5
- https://www.instagram.com/p/Cz9cmcUouxx/
- https://www.instagram.com/p/CtPPNNUsBPe
- https://www.instagram.com/p/C4tYekwMtCu
- https://www.instagram.com/p/DOMPBu0CGjp
- https://www.instagram.com/reel/C_tL1pPsXR1/
- https://www.instagram.com/p/DcqaECMF1DJ/
- https://www.instagram.com/p/C4JhU1QMFHQ
- https://www.instagram.com/p/DEMyUk3IY-M (Madame Claude)
- https://www.facebook.com/boucheriedelamonnaie/
- https://www.facebook.com/boucheriedelamonnaie?locale=fr_FR
- https://www.facebook.com/boucheriedelamonnaie/posts/nous-avons-voulu-cr%C3%A9er-un-espace-de-travail-%C3%A0-la-vue-directe-du-client-la-mise-e/140785855613945
- https://www.facebook.com/boucheriedelamonnaie/posts/agneau-fermier-du-quercy-igp-label-rouge-une-chair-tendre-un-go%C3%BBt-fin-rennes-ren/140790802280117
- https://www.facebook.com/creagretaildesign/posts/conception-et-r%C3%A9alisation-dune-nouvelle-boucherie-sur-rennes-la-boucherie-de-la-/560800859492438

**Press and guides**
- https://www.ouest-france.fr/bretagne/rennes-35000/une-boucherie-haut-de-gamme-vient-douvrir-au-cur-de-rennes-d1cde4f2-e5ae-11ed-8ec6-f106ec4803b5
- https://flipboard.com/@ouestfrance/ouest-france-rennes-hgksvv2qz/-/a-kXbR3V8BToeyTW1Rrqz1PQ:a:2578302874-%2F0
- https://rennesbusinessmag.fr/le-boucher-de-la-rue-de-la-monnaie/
- https://rennesbusinessmag.fr/les-echoppes-des-lices-ouvriront-dans-les-prochaines-semaines/
- https://www.rennes-infos-autrement.fr/le-boucher-de-la-rue-de-la-monnaie/
- https://www.bretagne-economique.com/actualites/rennes-les-echoppes-des-lices-commencent-lever-leurs-rideaux/
- https://lefooding.com/commerces/boucherie-de-la-monnaie
- https://lefooding.com/en/shops/boucherie-de-la-monnaie
- https://lefooding.com/en/shops/boucherie-de-la-monnaie-2
- https://lefooding.com/recherche/commerce/place/rennes-8580/boucherie-14954
- https://unidivers.fr/rennes-madame-claude-bar-a-crepe
- https://fr.linkedin.com/posts/jean-fran%C3%A7ois-gouy-bba75a70_les-amateurs-de-viandes-connaissent-forc%C3%A9ment-activity-7361416334976376832-hNbE
- https://www.calameo.com/books/0047185576345320fbecc
- https://fr.gaultmillau.com/fr/news/les-10-qui-font-rennes
- https://atabula.com/2021/06/30/appel-a-candidatures-pour-le-projet-rennes-place-des-lices/
- https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/16242-article/suitcase-hospitality-annonce-l-arrive-de-mama-shelter-sur-l-hotel-de-la-place-des-lices-de-rennes
- https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/18329-article/l-ouverture-tant-attendue-du-mama-shelter-rennes
- https://www.groupe-legendre.com/wp-content/uploads/2020/12/DEF-Communique-de-presse-Trinite-Rennes.pdf
- https://www.groupe-legendre.com/wp-content/uploads/2021/10/DEF-JJ-2021-10_04_HRENNES_CP-ANNONCE-MAMA-SHELTER-RENNES_-002.pdf

**Directories and review mirrors**
- https://www.pagesjaunes.fr/pros/62273873
- https://fr.mappy.com/poi/69ad2f0c37f95a256aae884d
- https://commerces.ouest-france.fr/rennes-35000/boucherie-de-la-monnaie.html
- https://boucherie.tel/la-boucherie-de-la-monnaie-2393666.html
- https://boucherie.tel/ville/rennes/
- https://boucherie-charcuterie.tel/f/la-boucherie-de-la-monnaie-6197547
- https://boucheries.net/35/rennes/la-boucherie-de-la-monnaie-r3t
- https://bestin-rennes.fr/meilleures-boucheries-de-rennes
- https://www.laptiteboucherie.fr/boucheries/35238-rennes/
- https://www.tripadvisor.com/Restaurant_Review-g187103-d27833915-Reviews-La_Boucherie_De_La_Monnaie-Rennes_Ille_et_Vilaine_Brittany.html
- https://www.tripadvisor.fr/Restaurant_Review-g187103-d27833915-Reviews-La_Boucherie_De_La_Monnaie-Rennes_Ille_et_Vilaine_Brittany.html
- https://www.parkopedia.fr/parking/horodateur/25_rue_de_la_monnaie/35000/rennes/
- https://mapa-metro.com/fr/France/Rennes/Rennes-Metro-Plan.htm

**Competitors**
- https://www.laboucherierennaise-35.com/
- https://www.gillespudlowski.com/?p=205441
- https://www.au-magasin.fr/35-ille-et-vilaine/boucherie-charcuterie-traiteur/
- https://unidivers.fr/les-halles-centrales-la-criee-marche-central/
- https://www.xerfi.com/etudes-par-entreprise/letendre-les-halles_534100755
- https://www.beucher.fr/
- https://www.lejournaldesentreprises.com/article/la-cinquieme-generation-prend-les-renes-de-la-maison-beucher-2120635
- https://fr.gaultmillau.com/en/bretagne/ille-et-vilaine/rennes
- https://www.rennes-infos-autrement.fr/galeries-lafayette-la-boucherie-artisanale-des-quais/
- https://www.pagesjaunes.fr/pros/62828221
- https://fr.gaultmillau.com/fr/artisans/maison-dumont-rennes
- https://www.sluurpy.fr/rennes/restaurant/2040671/maison-dumont
- https://unidivers.fr/rennes-restaurant-saint-cochon/
- https://lefooding.com/commerces/saint-cochon
- https://vvanat.fr/blog/maitres-jacques-trimaran-rennes/

**Place and culture**
- https://fr.wikisource.org/wiki/Page:Notices_sur_les_rues_de_Rennes_1883.djvu/52
- https://ryo.co/fr/destinations/france/lieux/place-des-lices-rennes/
- https://monumentum.fr/monument-historique/pa00090738/rennes-maison-dite-aussi-hotel-racape-de-la-feuillee
- https://www.techno-science.net/fr/definitions/patrimoine-architectural-de-rennes
- https://lebonbon.fr/rennes/news/deuxieme-plus-grand-marche-france-se-trouve-a-rennes-depuis-400-ans/
- https://www.routard.com/fr/guide/france/bretagne/rennes/marche-des-lices
- https://www.cityzeum.com/la-place-des-lices
- https://unidivers.fr/rennes-deuxieme-ville-etudiante-france/
- https://www.capitainestudy.fr/articles/ville-etudiante/rennes-top-5-des-quartiers-ou-vivre-quand-on-est-etudiant/
- https://www.tourismebretagne.com/selon-mes-envies/topitos/4-escales-ou-la-culture-fait-des-etincelles/
- https://www.lalibre.be/culture/arts/2018/08/11/odorico-lart-deco-rennais-K5255OYJKJE7ZEPROFBJE7UAKY/
- https://en.wikipedia.org/wiki/Coucou_de_Rennes
- https://www.pleinchamp.com/actualite/elevage~space-volailles-de-janze-smic-assure
- https://www.regionalcattlebreeds.eu/country_and_breed_information/france/documents/Fiche%20Armoricaine%2020071.pdf
- https://www.reussir.fr/nous-avons-choisi-la-bretonne-pie-noir
- https://en.wikipedia.org/wiki/Galette-saucisse

**Design references**
- https://www.turnerandgeorge.co.uk/
- https://www.victorchurchill.com/
- https://www.dariocecchini.com/
- https://www.maisonverot.fr/
- https://www.boucheries-cosse.fr/
- https://porterroad.com/
- https://www.saltandtime.com/
- https://thescottishbutcher.com/
- https://www.awwwards.com/websites/?text=butcher
- https://www.awwwards.com/websites/?text=boucherie
- https://www.awwwards.com/sites/good-meat
- https://www.awwwards.com/sites/meatopia
- https://onepagelove.com/bavette-la-boucherie

**Added in critic pass**
- https://commerces.ouest-france.fr/rennes-35000/boucherie-de-la-monnaie.html (full listing incl. logo image, phone, Saturday 09h30)
- https://commerces.ouest-france.fr/produit/bon-plan-valable-chez-boucherie-de-la-monnaie.html (voucher: « Bon plan terminé »)
- https://www.ouest-france.fr/bretagne/rennes-35000/une-boucherie-haut-de-gamme-vient-douvrir-au-cur-de-rennes-d1cde4f2-e5ae-11ed-8ec6-f106ec4803b5 (full text read)
- https://www.instagram.com/p/DeRODPJOqjM/ (job ad, image text + shop interior)
- https://www.instagram.com/boucheriedelamonnaie/reel/C9QR_nNMSgz/ (dry-aged reel, ~443 likes)
- https://www.instagram.com/boucheriedelamonnaie/p/DHgMmc8sBHP/ (« Simple et efficace », Mar 2025)
- https://www.instagram.com/p/DOMPBu0CGjp (Bellota display: marble counter, cabinet wall)
- https://www.instagram.com/p/Cz9cmcUouxx/ (Noir de Bigorre partner post, text read)
- https://boucheries.net/35/rennes/la-boucherie-de-la-monnaie-r3t (re-read; Google place id ChIJh1mYGojfDkgRIYBU37LHZ9c)
- https://dgal.opendatasoft.com/api/explore/v2.1/catalog/datasets/export_alimconfiance/records?where=siret%3D%2292140720100018%22 (no hygiene record)
- https://annuaire.petitesaffiches.fr/abattoirs/boucherie-de-la-monnaie-92140720100018/ (directory, nothing new)
- https://fr.gaultmillau.com/fr/news/les-10-qui-font-rennes (checked: does **not** mention the shop)

---

## 15. Critic pass

*Completeness critic, 2026-10-13. Tools: WebSearch, WebFetch, Tavily extract (worked, no 429), SIRENE API, DGAL Alim'confiance API, and pixel sampling of the business's own public logo image. No screenshots were taken.*

**Gaps found**
1. **The design direction was not grounded in the real brand.** §5 said logo, colours and interior were unknown, so §9 invented a cold silver / steel palette. The shop's real identity is bottle green + cream with retro lettering, set in a room of black marble, black-framed glass cabinets, a wooden billot, cement tiles and plants. This was the biggest weakness.
2. The core **phone conflict** was left open.
3. **Delivery and the voucher** were flagged « unconfirmed » because the source could not be fetched.
4. The **job ad** (contract, hours) was unread, so the recruitment page had to stay generic.
5. TripAdvisor was unreadable, and the Ouest-France article was paywalled, so the signature saucisse vigneronne / Mama Shelter story rested on a headline.
6. Hygiene inspection, accessibility and the Street View tour had not been checked.
7. There were few 2026 quotes, and none from the supply chain.
8. The mock-data plan had no fêtes calendar, no weekly traiteur rotation and no data for the cabinet-wall layout.

**Filled**
- **Logo described** from two sources: the Ouest-France Commerces directory logo and the shop's own job-ad visual. **Brand colours measured:** green `#12433B`, cream lettering, oxblood titles of about `#681018` on their collateral. → §5
- **Interior described** from the shop's own posts: the cabinet wall with framed chalkboard tags, black marble with ochre veins, round wooden billot, carreaux de ciment floor, trailing plants. → §5
- **§9 re-skinned** with a new token table (computed contrast), material textures (cement tile, marble band, chalkboard pique-prix, cabinet-door grid) and an updated sibling check. Odorico tesserae were replaced by the cement tile. → §9, §10 footer
- **Phone:** 02 99 22 04 96 is now primary, backed by the owner-maintained listing, the full Ouest-France text, Le Fooding and PagesJaunes. The other number traces to an unclaimed TripAdvisor stub. → §1, §13
- **Delivery:** only directory boilerplate. **Voucher:** expired. Both must not be advertised. → §1, §12, §13
- **Job ad read in full:** CDI 39 h, Sunday + Monday + one afternoon off, salary by profile, small team, apply in the shop or by DM. → §1, §2, §10 `/recrutement/`
- **Ouest-France article read in full.** All quoted passages are confirmed, and the 2023 phone is in it. → §0
- **TripAdvisor:** 0 reviews, unclaimed. **Alim'confiance:** no record (no badge). **acceslibre:** still none. **Street View interior tour:** exists per a review. → §1, §4
- **Six new real quotes** (2023–2026) plus one supply-chain quote (filière Noir de Bigorre AOP). **Noire de Baltique confirmed at 8 weeks**. Brochettes marinées and a 2026 traiteur noodle dish (low confidence) added. Engagement signal: the maturation reel has about 443 likes. → §3, §4
- Le Fooding (Aug 2026) **re-confirms the neighbouring échoppes** (traiteur, roaster, wine shop, Breizh Café). → §6
- Mock-data additions: `vitrine.ts` cabinet wall, `fetes.ts`, a weekly traiteur rotation, 20+1 testimonials, a fourth real maturation stop. → §11
- Confirmed **no new press** since 2024: Gault&Millau « Les 10 qui font Rennes » does not mention the shop, and searches of Mlle Adèle, Unidivers, 20 Minutes and Le Mensuel found nothing.

**Still unknown**
- The vector logo file and the exact typeface names.
- The exterior / signage look.
- The real price list. Only Dohatsu €9.90/L and the 2023 sausages at €19/kg are known.
- Holiday closures for 2026–27 and the Christmas order process.
- Accessibility (step-free entrance or not).
- Payment methods beyond an aggregator's « cartes / sans contact ».
- Facebook review text (behind a login).
- Exact current Google review count. « plus de 60 avis » is still safe.
- Farm names beyond the regions, Retiers and the Noir de Bigorre filière.
- Whether the saucisse vigneronne is still served at Mama Shelter (the only source is 2023).
- What the second phone number (02 23 46 27 54) is.
- Whether the owner consents to a showcase site (Pappers opposition to prospecting, see §12).
