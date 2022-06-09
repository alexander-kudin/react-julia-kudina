export function getSeries() { 
    return series; 
}
  
export function findSeriesBySlug(slug){
    return series.findIndex((series) => (series.slug === slug));
}

export function findSeriesById(id){
    return series.findIndex((series) => (series.id === id));
}
  
export function seriesExists(slug){
    let seriesLoc = findSeriesBySlug(slug);
    if (seriesLoc === -1) { return false; }
    return true;
}
  
export function getSeriesBySlug(slug){
    let seriesLoc = findSeriesBySlug(slug);
    if (seriesLoc === -1) { return null; }
    return series[seriesLoc];
}

export function getSeriesById(id){
    let seriesLoc = findSeriesById(id);
    if (seriesLoc === -1) { return null; }
    return series[seriesLoc];
}

const series = [
    {
    "titleEn": "All Works",
    "id": 0,
    "slug": "all",
    "titleRu": "Все работы",
    },
    {
    "titleEn": "Towns Series",
    "slug": "towns",
    "titleRu": "Серия Города",
    "id": 1,
    },
    {
    "titleRu": "Серия Графика",
    "slug": "graphics",
    "titleEn": "Graphics Series",
    "id": 2,
    },
    {
    "titleEn": "Women Aesthetic Series",
    "slug": "women-aesthetic",
    "id": 3,
    "titleRu": "Серия Женская эстетика",
    },
    {
    "slug": "flowers",
    "titleRu": "Серия Цветы",
    "titleEn": "Flowers Series",
    "id": 4,
    },
    {
    "slug": "ichthys",
    "titleRu": "Серия Ихтис",
    "titleEn": "Ichthys Series",
    "id": 5,
    },
    {
    "slug": "fruits",
    "id": 6,
    "titleEn": "Fruits Series",
    "titleRu": "Серия Фрукты",
    },
    {
    "slug": "abstractionism",
    "titleEn": "Abstractionism Series",
    "titleRu": "Серия Абстракция",
    "id": 7,
    },
    {
    "slug": "ocean-secrets",
    "titleEn": "Ocean Secrets Series",
    "titleRu": "Серия Тайны океана",
    "id": 8,
    },
    {
    "titleEn": "Still Life Series",
    "id": 9,
    "slug": "still-life",
    "titleRu": "Серия Натюрморт",
    },
    {
    "titleRu": "Серия Пейзажи",
    "id": 10,
    "slug": "landscapes",
    "titleEn": "Landscapes Series",
    },
    {
    "id": 11,
    "slug": "philosophical-fantasy",
    "titleEn": "Philosophical Fantasy Series",
    "titleRu": "Серия Филосовская фантазия",
    }
]
