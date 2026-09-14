export interface Event {
    year: number;
    winner: string;
    location: string;
    courses?: string[];
}

export const events: Event[] = [
    { year: 1999, location: "Ayr", winner: "Steve", courses: [] },
    { year: 2000, location: "Wales", winner: "Paul", courses: [] },
    {
        year: 2001,
        location: "Chesterfield",
        winner: "Paul",
        courses: ["Stanedge GC", "Matlock", "Tapton Park", "Tapton Park"]
    },
    {
        year: 2002,
        location: "Stratford",
        winner: "Mal",
        courses: ["Stratford GC", "Bidford Grange", "Welcombe GC", "Stratford Oaks"]
    },
    {
        year: 2003,
        location: "Llan",
        winner: "Richard",
        courses: ["North Wales", "Maesdu", "Rhos on Sea", "Abergele"]
    },
    {
        year: 2004,
        location: "Ayr",
        winner: "Alan",
        courses: ["Thornhills", "Bellisle", "Girvan", "Brampton GC"]
    },
    {
        year: 2005,
        location: "Tenby",
        winner: "Paul",
        courses: ["Haverfordwest", "Trefloyne", "Carmarthen", "Tenby"]
    },
    {
        year: 2006,
        location: "Chester",
        winner: "Richard",
        courses: ["Leasowe GC", "Vicars Cross", "Priors Hayes", "Carden Park"]
    },
    {
        year: 2007,
        location: "Skipton",
        winner: "Alan",
        courses: ["Skipton", "Hollins Hall GC"]
    },
    {
        year: 2008,
        location: "Monmouth",
        winner: "Derek",
        courses: ["Herefordshire", "Alice Springs", "Alice Springs"]
    },
    {
        year: 2009,
        location: "Derby",
        winner: "Steve",
        courses: ["Ormonde Fields", "Morley Hayes GC", "Horsley Lodge", "Breadsall Priory"]
    },
    {
        year: 2010,
        location: "Malvern",
        winner: "Mal",
        courses: ["Broadway"]
    },
    {
        year: 2011,
        location: "Ellesmere",
        winner: "Richard",
        courses: ["Hawkstone", "Hill Valley"]
    },
    {
        year: 2012,
        location: "Buxton",
        winner: "Derek",
        courses: ["Cavendish", "Leek", "Macclesfield"]
    },
    {
        year: 2013,
        location: "Lancaster",
        winner: "Richard",
        courses: ["Peover GC?", "Morecambe", "Royal Lancaster", "Fishmere GC"]
    },
    {
        year: 2014,
        location: "Beaumaris",
        winner: "Dave",
        courses: ["Bangor", "Henllys", "Nefyn", "Caernarfon"]
    },
    {
        year: 2015,
        location: "Neath",
        winner: "Paul",
        courses: ["Neath GC", "Swansea Bay"]
    },
    {
        year: 2016,
        location: "Shrewsbury",
        winner: "Derek",
        courses: ["Shrewsbury", "Arscott", "Church Stretton", "Oswestry"]
    },
    {
        year: 2017,
        location: "Ripon",
        winner: "Dave",
        courses: ["Willow Valley", "Bedale", "Ripon", "Reddish Vale"]
    },
    {
        year: 2018,
        location: "Market Drayton",
        winner: "Martin",
        courses: ["Hawkstone", "MacDonald Hill Valley", "Wrekin", "Mile End"]
    },
    {
        year: 2019,
        location: "Harrogate",
        winner: "Richard",
        courses: ["Oakdale", "Knaresborough", "Rudding Park", "Harrogate"]
    },
    {
        year: 2020,
        location: "Kendal",
        winner: "Martin",
        courses: ["Carus Green", "Kendal", "Windermere", "Keswick"]
    },
    {
        year: 2021,
        location: "Cheltenham",
        winner: "Aaron",
        courses: ["Tewkesbury Park", "Lilley Brook GC", "Cleeve Hill GC", "Wharton Park"]
    },
    {
        year: 2022,
        location: "Bakewell",
        winner: "Steve",
        courses: ["Hazel Grove", "Matlock", "Chapel en le Frith", "New Mills"]
    },
    {
        year: 2023,
        location: "Hebdon Bridge",
        winner: "Paul",
        courses: ["Crossland Heath", "lightcliffe", "Heaton Park", "Walmsley GC"]
    },
    {
        year: 2024,
        location: "Lichfield",
        winner: "Martin",
        courses: ["Ingestre Park", "Brocton Hall", "Lilleshall", "Market Drayton"]
    },
    {
        year: 2025,
        location: "Leeds",
        winner: "Martin",
        courses: ["Howley Hall", "Scarcroft", "Moor Allerton", "Rochdale GC"]
    },
    {
        year: 2026,
        location: "York",
        winner: "Aaron",
        courses: ["Huddersfiled GC", "Pike Hikks", "Forest Park", "Wetherby GC"]
    },
].sort((a, b) => b.year - a.year); // Sort by year descending
