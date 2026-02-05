export interface Event {
    year: number;
    winner: string;
    location: string;
    courses?: string[];
}

export const events: Event[] = [
    { "year": 1999, "winner": "Steven Wood", "location": "Ayr", "courses": ["Belleisle", "Seafield", "Dalmilling"] },
    { "year": 2000, "winner": "Paul Wood", "location": "Caerwys", "courses": ["Caerwys"] },
    { "year": 2001, "winner": "Paul Wood", "location": "Chesterfield", "courses": ["Chesterfield", "Tapton"] },
    { "year": 2002, "winner": "Mal Wood", "location": "Stratford", "courses": ["Stratford-upon-Avon", "Welcombe"] },
    { "year": 2003, "winner": "Richard Isles", "location": "Llandudno", "courses": ["Llandudno (Maesdu)", "North Wales", "Rhos-on-Sea"] },
    { "year": 2004, "winner": "Alan Davies", "location": "Ayr", "courses": ["Belleisle", "Seafield", "Dalmilling"] },
    { "year": 2005, "winner": "Paul Wood", "location": "Tenby", "courses": ["Tenby", "Ashburnham"] },
    { "year": 2006, "winner": "Richard Isles", "location": "Chester", "courses": ["Chester", "Eaton", "Vicars Cross"] },
    { "year": 2007, "winner": "Alan Davies", "location": "Skipton", "courses": ["Skipton", "Settle"] },
    { "year": 2008, "winner": "Derek Woosey", "location": "Monmouth", "courses": ["Monmouth", "Rolls of Monmouth"] },
    { "year": 2009, "winner": "Steven Wood", "location": "Derby", "courses": ["Allestree Park", "Kedleston Park", "Mickleover"] },
    { "year": 2010, "winner": "Mal Wood", "location": "Malvern", "courses": ["Malvern", "Worcester"] },
    { "year": 2011, "winner": "Richard Isles", "location": "Ellesmere", "courses": ["Llanymynech", "Mile End", "Oswestry"] },
    { "year": 2012, "winner": "Derek Woosey", "location": "Buxton", "courses": ["Buxton & High Peak", "Chapel-en-le-Frith", "New Mills"] },
    { "year": 2013, "winner": "Richard Isles", "location": "Lancaster", "courses": ["Lancaster", "Lansil"] },
    { "year": 2014, "winner": "Dave Evans", "location": "Beaumaris", "courses": ["Baron Hill", "Henllys Hall"] },
    { "year": 2015, "winner": "Paul Wood", "location": "Neath", "courses": ["Neath", "Swansea Bay"] },
    { "year": 2016, "winner": "Derek Woosey", "location": "Shrewsbury", "courses": ["Shrewsbury", "Meole Brace"] },
    { "year": 2017, "winner": "David Evans", "location": "Ripon", "courses": ["Ripon City", "Bedale"] },
    { "year": 2018, "winner": "Martin Bull", "location": "Market Drayton", "courses": ["Market Drayton", "Hawkstone Park"] },
    { "year": 2019, "winner": "Richard Isles", "location": "Harrogate", "courses": ["Harrogate", "Oakdale", "Pannal"] },
    { "year": 2020, "winner": "Martin Bull", "location": "Kendal", "courses": ["Kendal", "Sedbergh"] },
    { "year": 2021, "winner": "Aaron Winland", "location": "Cheltenham", "courses": ["Cotswold Hills", "Lilley Brook"] },
    { "year": 2022, "winner": "Steven Wood", "location": "Bakewell", "courses": ["Bakewell", "Sickleholme"] },
    { "year": 2023, "winner": "Paul Wood", "location": "Hebden Bridge", "courses": ["Hebden Bridge", "Mytholmroyd"] },
    { "year": 2024, "winner": "Martin Bull", "location": "Lichfield", "courses": ["Lichfield", "Whittington Heath"] },
    { "year": 2025, "winner": "Martin Bull", "location": "Headingley", "courses": ["Headingley", "Moor Allerton", "Sand Moor", "Alwoodley"] }
].sort((a, b) => b.year - a.year); // Sort by year descending
