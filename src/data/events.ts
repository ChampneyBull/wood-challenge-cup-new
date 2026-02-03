export interface Event {
    year: number;
    winner: string;
    location: string;
}

export const events: Event[] = [
    { "year": 1999, "winner": "Steven Wood", "location": "Ayr" },
    { "year": 2000, "winner": "Paul Wood", "location": "Caerwys" },
    { "year": 2001, "winner": "Paul Wood", "location": "Chesterfield" },
    { "year": 2002, "winner": "Mal Wood", "location": "Stratford" },
    { "year": 2003, "winner": "Richard Isles", "location": "Llandudno" },
    { "year": 2004, "winner": "Alan Davies", "location": "Ayr" },
    { "year": 2005, "winner": "Paul Wood", "location": "Tenby" },
    { "year": 2006, "winner": "Richard Isles", "location": "Skipton" },
    { "year": 2007, "winner": "Alan Davies", "location": "Chester" },
    { "year": 2008, "winner": "Derek Woosey", "location": "Monmouth" },
    { "year": 2009, "winner": "Steven Wood", "location": "Derby" },
    { "year": 2010, "winner": "Mal Wood", "location": "Malvern" },
    { "year": 2011, "winner": "Richard Isles", "location": "Ellesmere" },
    { "year": 2012, "winner": "Derek Woosey", "location": "Buxton" },
    { "year": 2013, "winner": "Richard Isles", "location": "Lancaster" },
    { "year": 2014, "winner": "Dave Evans", "location": "Beaumaris" },
    { "year": 2015, "winner": "Paul Wood", "location": "Neath" },
    { "year": 2016, "winner": "Derek Woosey", "location": "Shrewsbury" },
    { "year": 2017, "winner": "David Evans", "location": "Ripon" },
    { "year": 2018, "winner": "Martin Bull", "location": "Market Drayton" },
    { "year": 2019, "winner": "Richard Isles", "location": "Harrogate" },
    { "year": 2020, "winner": "Martin Bull", "location": "Kendal" },
    { "year": 2021, "winner": "Aaron Winland", "location": "Cheltenham" },
    { "year": 2022, "winner": "Steven Wood", "location": "Bakewell" },
    { "year": 2023, "winner": "Paul Wood", "location": "Hebden Bridge" },
    { "year": 2024, "winner": "Martin Bull", "location": "Lichfield" },
    { "year": 2025, "winner": "Martin Bull", "location": "Headingley" }
].sort((a, b) => b.year - a.year); // Sort by year descending
