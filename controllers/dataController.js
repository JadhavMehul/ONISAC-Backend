const { firestore, auth, storage } = require('../config/firebaseConfig');

const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");


exports.addDataInLoop = async (req, res) => {
    // const users =  // Expecting JSON array please add data in array of object as shown below

    const dataArray =[
        {
            "card_id": "SAR-001",
            "superstar_name": "CM Punk",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 100,
                "attack": 100,
                "reverse": 88,
                "block": 79,
                "ground": 93,
                "arial": 77,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-002",
            "superstar_name": "Sheamus",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 77,
                "attack": 84,
                "reverse": 72,
                "block": 80,
                "ground": 90,
                "arial": 46,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-003",
            "superstar_name": "Christian",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 78,
                "attack": 72,
                "reverse": 76,
                "block": 73,
                "ground": 74,
                "arial": 64,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-004",
            "superstar_name": "Santino Marrella",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 74,
                "attack": 59,
                "reverse": 70,
                "block": 65,
                "ground": 58,
                "arial": 64,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-005",
            "superstar_name": "Layla",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 60,
                "attack": 73,
                "reverse": 65,
                "block": 58,
                "ground": 70,
                "arial": 75,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-006",
            "superstar_name": "Kofi Kingston & R-Truth",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 58,
                "attack": 74,
                "reverse": 66,
                "block": 59,
                "ground": 72,
                "arial": 77,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-007",
            "superstar_name": "Daniel Bryan",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 88,
                "attack": 82,
                "reverse": 83,
                "block": 71,
                "ground": 86,
                "arial": 64,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-008",
            "superstar_name": "Big Show",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 76,
                "attack": 84,
                "reverse": 62,
                "block": 73,
                "ground": 85,
                "arial": 24,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-009",
            "superstar_name": "Rey Mysterio",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 69,
                "attack": 65,
                "reverse": 75,
                "block": 64,
                "ground": 67,
                "arial": 98,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-010",
            "superstar_name": "John Cena",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 85,
                "attack": 93,
                "reverse": 81,
                "block": 83,
                "ground": 91,
                "arial": 79,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-011",
            "superstar_name": "Randy Orton",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 83,
                "attack": 90,
                "reverse": 85,
                "block": 77,
                "ground": 92,
                "arial": 69,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-012",
            "superstar_name": "Kane",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 68,
                "attack": 79,
                "reverse": 64,
                "block": 70,
                "ground": 91,
                "arial": 69,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-013",
            "superstar_name": "Brock Lesnar",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 83,
                "attack": 89,
                "reverse": 64,
                "block": 81,
                "ground": 91,
                "arial": 28,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-014",
            "superstar_name": "Alberto Del Rio",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 87,
                "attack": 83,
                "reverse": 88,
                "block": 75,
                "ground": 76,
                "arial": 55,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-015",
            "superstar_name": "Mark Henry",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 68,
                "attack": 86,
                "reverse": 63,
                "block": 75,
                "ground": 83,
                "arial": 24,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-016",
            "superstar_name": "Wade Barrett",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Champion",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 86,
                "attack": 79,
                "reverse": 77,
                "block": 84,
                "ground": 83,
                "arial": 39,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-017",
            "superstar_name": "Booker T",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Move",
            "move_name": "Axe Kick",
            "special_card": false,
            "stats": {
                "defense": 68,
                "attack": 76,
                "reverse": 66,
                "block": 61,
                "ground": 79,
                "arial": 75,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-018",
            "superstar_name": "Jack Swagger",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Move",
            "move_name": "Ankle Lock",
            "special_card": false,
            "stats": {
                "defense": 58,
                "attack": 69,
                "reverse": 61,
                "block": 55,
                "ground": 71,
                "arial": 50,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-019",
            "superstar_name": "Evan Bourne",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "Move",
            "move_name": "Shooting Star Press",
            "special_card": false,
            "stats": {
                "defense": 61,
                "attack": 71,
                "reverse": 64,
                "block": 52,
                "ground": 65,
                "arial": 88,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-020",
            "superstar_name": "Eve",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "Move",
            "move_name": "Moonsault",
            "special_card": false,
            "stats": {
                "defense": 48,
                "attack": 60,
                "reverse": 51,
                "block": 42,
                "ground": 56,
                "arial": 67,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-021",
            "superstar_name": "The Great Khali",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Move",
            "move_name": "Punjabi Plunge",
            "special_card": false,
            "stats": {
                "defense": 55,
                "attack": 74,
                "reverse": 39,
                "block": 57,
                "ground": 78,
                "arial": 20,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-022",
            "superstar_name": "Hunico",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "Move",
            "move_name": "Falling Star",
            "special_card": false,
            "stats": {
                "defense": 53,
                "attack": 63,
                "reverse": 56,
                "block": 46,
                "ground": 54,
                "arial": 70,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-023",
            "superstar_name": "John Cena",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Move",
            "move_name": "Attitude Adjustment",
            "special_card": false,
            "stats": {
                "defense": 82,
                "attack": 90,
                "reverse": 80,
                "block": 81,
                "ground": 89,
                "arial": 77,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-024",
            "superstar_name": "Kane",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "Move",
            "move_name": "Chokeslam",
            "special_card": false,
            "stats": {
                "defense": 66,
                "attack": 77,
                "reverse": 62,
                "block": 69,
                "ground": 78,
                "arial": 87,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-025",
            "superstar_name": "Brock Lesnar",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "Move",
            "move_name": "F-5",
            "special_card": false,
            "stats": {
                "defense": 81,
                "attack": 87,
                "reverse": 62,
                "block": 80,
                "ground": 89,
                "arial": 25,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-026",
            "superstar_name": "Kofi Kingston",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "Move",
            "move_name": "Boom Drop",
            "special_card": false,
            "stats": {
                "defense": 67,
                "attack": 75,
                "reverse": 70,
                "block": 64,
                "ground": 70,
                "arial": 79,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-027",
            "superstar_name": "Ryback",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Move",
            "move_name": "Shell Shock",
            "special_card": false,
            "stats": {
                "defense": 56,
                "attack": 69,
                "reverse": 50,
                "block": 55,
                "ground": 71,
                "arial": 33,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-028",
            "superstar_name": "Tensai",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Move",
            "move_name": "Clawhold STO",
            "special_card": false,
            "stats": {
                "defense": 66,
                "attack": 78,
                "reverse": 55,
                "block": 56,
                "ground": 74,
                "arial": 28,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-029",
            "superstar_name": "Zack Ryder",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Move",
            "move_name": "Rough Ryder",
            "special_card": false,
            "stats": {
                "defense": 55,
                "attack": 68,
                "reverse": 52,
                "block": 54,
                "ground": 66,
                "arial": 62,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-030",
            "superstar_name": "Ted DiBiase",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Move",
            "move_name": "Dream Street",
            "special_card": false,
            "stats": {
                "defense": 66,
                "attack": 59,
                "reverse": 59,
                "block": 65,
                "ground": 65,
                "arial": 56,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-031",
            "superstar_name": "Tyson Kidd",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "Move",
            "move_name": "Dungeon Lock",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 54,
                "reverse": 67,
                "block": 55,
                "ground": 52,
                "arial": 68,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-032",
            "superstar_name": "Rey Mysterio",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "Move",
            "move_name": "619",
            "special_card": false,
            "stats": {
                "defense": 66,
                "attack": 82,
                "reverse": 73,
                "block": 59,
                "ground": 73,
                "arial": 95,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-033",
            "superstar_name": "Wade Barrett",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Move",
            "move_name": "Wasteland",
            "special_card": false,
            "stats": {
                "defense": 85,
                "attack": 76,
                "reverse": 75,
                "block": 82,
                "ground": 81,
                "arial": 37,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-034",
            "superstar_name": "Mark Henry",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Move",
            "move_name": "Worlds Strongest Slam",
            "special_card": false,
            "stats": {
                "defense": 66,
                "attack": 84,
                "reverse": 62,
                "block": 73,
                "ground": 80,
                "arial": 23,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-035",
            "superstar_name": "CM Punk",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "Move",
            "move_name": "GTS",
            "special_card": false,
            "stats": {
                "defense": 85,
                "attack": 91,
                "reverse": 86,
                "block": 77,
                "ground": 91,
                "arial": 74,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-036",
            "superstar_name": "Daniel Bryan",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "Move",
            "move_name": "Yes! Lock",
            "special_card": false,
            "stats": {
                "defense": 86,
                "attack": 80,
                "reverse": 81,
                "block": 69,
                "ground": 84,
                "arial": 62,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-037",
            "superstar_name": "Batista",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "Move",
            "move_name": "Batista Bomb",
            "special_card": false,
            "stats": {
                "defense": 77,
                "attack": 85,
                "reverse": 73,
                "block": 81,
                "ground": 85,
                "arial": 55,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-038",
            "superstar_name": "The Rock",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "Move",
            "move_name": "Rock Bottom",
            "special_card": false,
            "stats": {
                "defense": 84,
                "attack": 85,
                "reverse": 80,
                "block": 85,
                "ground": 88,
                "arial": 66,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-039",
            "superstar_name": "Layla",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "Move",
            "move_name": "The Facelift",
            "special_card": false,
            "stats": {
                "defense": 59,
                "attack": 72,
                "reverse": 65,
                "block": 56,
                "ground": 69,
                "arial": 72,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-040",
            "superstar_name": "Stone Cold Steve Austin",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "Move",
            "move_name": "Stone Cold Stunner",
            "special_card": false,
            "stats": {
                "defense": 80,
                "attack": 85,
                "reverse": 69,
                "block": 76,
                "ground": 83,
                "arial": 38,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-041",
            "superstar_name": "WWE Championship",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-042",
            "superstar_name": "Intercontinental Championship",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-043",
            "superstar_name": "World Heavyweight Championship",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-044",
            "superstar_name": "United States Championship",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-045",
            "superstar_name": "WWE Tag Team Championship",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-046",
            "superstar_name": "WWE Divas Championship",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-047",
            "superstar_name": "WWE Money in the bank briefcase",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-048",
            "superstar_name": "WWE Slammy Award",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-049",
            "superstar_name": "AJ Lee",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 40,
                "attack": 52,
                "reverse": 44,
                "block": 32,
                "ground": 46,
                "arial": 55,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-050",
            "superstar_name": "Aksana",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 35,
                "attack": 40,
                "reverse": 27,
                "block": 30,
                "ground": 36,
                "arial": 24,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-051",
            "superstar_name": "Alberto Del Rio",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 82,
                "attack": 77,
                "reverse": 84,
                "block": 72,
                "ground": 73,
                "arial": 50,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-052",
            "superstar_name": "Alex Riley",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 57,
                "reverse": 43,
                "block": 41,
                "ground": 50,
                "arial": 54,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-053",
            "superstar_name": "Alicia Fox",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 46,
                "attack": 56,
                "reverse": 42,
                "block": 31,
                "ground": 48,
                "arial": 58,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-054",
            "superstar_name": "Antonio Cesaro",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 31,
                "attack": 48,
                "reverse": 29,
                "block": 30,
                "ground": 52,
                "arial": 23,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-055",
            "superstar_name": "Beth Phoenix",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 56,
                "attack": 71,
                "reverse": 50,
                "block": 54,
                "ground": 68,
                "arial": 28,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-056",
            "superstar_name": "Big Show",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 72,
                "attack": 81,
                "reverse": 60,
                "block": 69,
                "ground": 84,
                "arial": 20,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-057",
            "superstar_name": "Booker T",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 73,
                "reverse": 62,
                "block": 57,
                "ground": 71,
                "arial": 70,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-058",
            "superstar_name": "Brock Lesnar",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 78,
                "attack": 85,
                "reverse": 60,
                "block": 80,
                "ground": 87,
                "arial": 22,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-059",
            "superstar_name": "Brodus Clay",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 60,
                "reverse": 37,
                "block": 46,
                "ground": 62,
                "arial": 19,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-060",
            "superstar_name": "Camacho",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 46,
                "attack": 58,
                "reverse": 45,
                "block": 41,
                "ground": 54,
                "arial": 31,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-061",
            "superstar_name": "Cameron",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 23,
                "attack": 28,
                "reverse": 18,
                "block": 20,
                "ground": 27,
                "arial": 24,
                "star_rating": 1
            }
        },
        {
            "card_id": "SAR-062",
            "superstar_name": "Christian",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 73,
                "attack": 66,
                "reverse": 70,
                "block": 68,
                "ground": 70,
                "arial": 56,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-063",
            "superstar_name": "CM Punk",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 81,
                "attack": 88,
                "reverse": 84,
                "block": 74,
                "ground": 91,
                "arial": 72,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-064",
            "superstar_name": "Cody Rhodes",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 53,
                "attack": 68,
                "reverse": 56,
                "block": 50,
                "ground": 64,
                "arial": 57,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-065",
            "superstar_name": "Curt Hawkins",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 41,
                "attack": 50,
                "reverse": 39,
                "block": 34,
                "ground": 53,
                "arial": 39,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-066",
            "superstar_name": "Damien Sandow",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 46,
                "reverse": 35,
                "block": 53,
                "ground": 50,
                "arial": 28,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-067",
            "superstar_name": "Daniel Bryan",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 84,
                "attack": 79,
                "reverse": 80,
                "block": 67,
                "ground": 84,
                "arial": 59,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-068",
            "superstar_name": "Darren Young",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 42,
                "attack": 53,
                "reverse": 40,
                "block": 45,
                "ground": 51,
                "arial": 33,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-069",
            "superstar_name": "David Otunga",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 55,
                "attack": 64,
                "reverse": 51,
                "block": 57,
                "ground": 68,
                "arial": 35,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-070",
            "superstar_name": "Dolph Ziggler",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 61,
                "attack": 77,
                "reverse": 66,
                "block": 54,
                "ground": 79,
                "arial": 50,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-071",
            "superstar_name": "Drew McIntyre",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 50,
                "reverse": 54,
                "block": 46,
                "ground": 53,
                "arial": 32,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-072",
            "superstar_name": "The Rock",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 81,
                "attack": 83,
                "reverse": 78,
                "block": 83,
                "ground": 86,
                "arial": 64,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-073",
            "superstar_name": "Epico",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 43,
                "attack": 61,
                "reverse": 51,
                "block": 40,
                "ground": 50,
                "arial": 72,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-074",
            "superstar_name": "Evan Bourne",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 56,
                "attack": 68,
                "reverse": 59,
                "block": 50,
                "ground": 62,
                "arial": 81,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-075",
            "superstar_name": "Eve",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 42,
                "attack": 57,
                "reverse": 48,
                "block": 36,
                "ground": 53,
                "arial": 62,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-076",
            "superstar_name": "Ezekiel Jackson",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 62,
                "attack": 62,
                "reverse": 52,
                "block": 57,
                "ground": 60,
                "arial": 19,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-077",
            "superstar_name": "The Great Khali",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 70,
                "reverse": 36,
                "block": 55,
                "ground": 75,
                "arial": 15,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-078",
            "superstar_name": "Heath Slater",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 53,
                "attack": 45,
                "reverse": 55,
                "block": 51,
                "ground": 51,
                "arial": 53,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-079",
            "superstar_name": "Hornswoggle",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 57,
                "reverse": 49,
                "block": 44,
                "ground": 51,
                "arial": 56,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-080",
            "superstar_name": "Hunico",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 49,
                "attack": 59,
                "reverse": 53,
                "block": 42,
                "ground": 51,
                "arial": 66,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-081",
            "superstar_name": "Jack Swagger",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 52,
                "attack": 66,
                "reverse": 57,
                "block": 51,
                "ground": 69,
                "arial": 45,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-082",
            "superstar_name": "Jerry Lawler",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 42,
                "attack": 50,
                "reverse": 37,
                "block": 45,
                "ground": 52,
                "arial": 26,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-083",
            "superstar_name": "Jey Uso",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 46,
                "attack": 55,
                "reverse": 52,
                "block": 41,
                "ground": 51,
                "arial": 60,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-084",
            "superstar_name": "Jimmy Uso",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 54,
                "attack": 49,
                "reverse": 57,
                "block": 51,
                "ground": 46,
                "arial": 57,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-085",
            "superstar_name": "Jinder Mahal",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 48,
                "attack": 52,
                "reverse": 41,
                "block": 53,
                "ground": 55,
                "arial": 27,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-086",
            "superstar_name": "John Cena",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 80,
                "attack": 87,
                "reverse": 78,
                "block": 81,
                "ground": 89,
                "arial": 76,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-087",
            "superstar_name": "John Laurinaitis",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 22,
                "attack": 30,
                "reverse": 20,
                "block": 25,
                "ground": 33,
                "arial": 21,
                "star_rating": 1
            }
        },
        {
            "card_id": "SAR-088",
            "superstar_name": "Johnny Curtis",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 33,
                "attack": 37,
                "reverse": 31,
                "block": 37,
                "ground": 35,
                "arial": 33,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-089",
            "superstar_name": "Josh Mathews",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 22,
                "attack": 28,
                "reverse": 21,
                "block": 27,
                "ground": 26,
                "arial": 20,
                "star_rating": 1
            }
        },
        {
            "card_id": "SAR-090",
            "superstar_name": "JTG",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 37,
                "attack": 47,
                "reverse": 43,
                "block": 38,
                "ground": 52,
                "arial": 56,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-091",
            "superstar_name": "Justin Gabriel",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 41,
                "attack": 53,
                "reverse": 54,
                "block": 45,
                "ground": 51,
                "arial": 60,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-092",
            "superstar_name": "Justin Roberts",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 17,
                "attack": 21,
                "reverse": 20,
                "block": 23,
                "ground": 23,
                "arial": 17,
                "star_rating": 1
            }
        },
        {
            "card_id": "SAR-093",
            "superstar_name": "Kaitlyn",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 32,
                "attack": 41,
                "reverse": 39,
                "block": 31,
                "ground": 37,
                "arial": 49,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-094",
            "superstar_name": "Kane",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 75,
                "reverse": 61,
                "block": 67,
                "ground": 78,
                "arial": 65,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-095",
            "superstar_name": "Kelly Kelly",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 58,
                "reverse": 59,
                "block": 53,
                "ground": 52,
                "arial": 68,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-096",
            "superstar_name": "Kofi Kingston",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 73,
                "reverse": 68,
                "block": 60,
                "ground": 67,
                "arial": 77,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-097",
            "superstar_name": "Layla",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 55,
                "attack": 70,
                "reverse": 62,
                "block": 54,
                "ground": 67,
                "arial": 72,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-098",
            "superstar_name": "Lilian Garcia",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 31,
                "attack": 24,
                "reverse": 24,
                "block": 26,
                "ground": 22,
                "arial": 17,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-099",
            "superstar_name": "Mark Henry",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 81,
                "reverse": 61,
                "block": 73,
                "ground": 80,
                "arial": 21,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-100",
            "superstar_name": "Mason Ryan",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 53,
                "attack": 63,
                "reverse": 50,
                "block": 56,
                "ground": 65,
                "arial": 29,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-101",
            "superstar_name": "Matt Striker",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 26,
                "attack": 32,
                "reverse": 22,
                "block": 25,
                "ground": 30,
                "arial": 19,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-102",
            "superstar_name": "Michael Cole",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 35,
                "attack": 24,
                "reverse": 23,
                "block": 26,
                "ground": 38,
                "arial": 22,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-103",
            "superstar_name": "Michael McGillicutty",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 53,
                "attack": 50,
                "reverse": 56,
                "block": 51,
                "ground": 58,
                "arial": 31,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-104",
            "superstar_name": "The Miz",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 74,
                "reverse": 69,
                "block": 61,
                "ground": 78,
                "arial": 50,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-105",
            "superstar_name": "Naomi",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 16,
                "attack": 21,
                "reverse": 24,
                "block": 21,
                "ground": 28,
                "arial": 29,
                "star_rating": 1
            }
        },
        {
            "card_id": "SAR-106",
            "superstar_name": "Natalya",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 57,
                "attack": 42,
                "reverse": 63,
                "block": 53,
                "ground": 51,
                "arial": 45,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-107",
            "superstar_name": "Paul Heyman",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 30,
                "attack": 27,
                "reverse": 23,
                "block": 25,
                "ground": 31,
                "arial": 26,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-108",
            "superstar_name": "Primo",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 45,
                "attack": 55,
                "reverse": 57,
                "block": 41,
                "ground": 52,
                "arial": 68,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-109",
            "superstar_name": "R-Truth",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 61,
                "attack": 73,
                "reverse": 65,
                "block": 60,
                "ground": 69,
                "arial": 75,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-110",
            "superstar_name": "Randy Orton",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 78,
                "attack": 86,
                "reverse": 83,
                "block": 74,
                "ground": 89,
                "arial": 65,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-111",
            "superstar_name": "Rey Mysterio",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 78,
                "reverse": 71,
                "block": 57,
                "ground": 70,
                "arial": 92,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-112",
            "superstar_name": "Ricardo Rodriguez",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 29,
                "attack": 19,
                "reverse": 28,
                "block": 26,
                "ground": 25,
                "arial": 19,
                "star_rating": 1
            }
        },
        {
            "card_id": "SAR-113",
            "superstar_name": "Rosa Mendes",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 33,
                "attack": 39,
                "reverse": 40,
                "block": 36,
                "ground": 47,
                "arial": 41,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-114",
            "superstar_name": "Ryback",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 52,
                "attack": 67,
                "reverse": 45,
                "block": 55,
                "ground": 69,
                "arial": 30,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-115",
            "superstar_name": "Sakamoto",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 35,
                "attack": 24,
                "reverse": 42,
                "block": 30,
                "ground": 31,
                "arial": 36,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-116",
            "superstar_name": "Santino Marella",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 71,
                "attack": 55,
                "reverse": 67,
                "block": 62,
                "ground": 55,
                "arial": 59,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-117",
            "superstar_name": "Sheamus",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 71,
                "attack": 81,
                "reverse": 65,
                "block": 74,
                "ground": 86,
                "arial": 41,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-118",
            "superstar_name": "Sin Cara",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 52,
                "attack": 70,
                "reverse": 56,
                "block": 51,
                "ground": 61,
                "arial": 90,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-119",
            "superstar_name": "Tamina Snuka",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 52,
                "attack": 56,
                "reverse": 43,
                "block": 55,
                "ground": 51,
                "arial": 64,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-120",
            "superstar_name": "Ted DiBiase",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 62,
                "attack": 55,
                "reverse": 56,
                "block": 64,
                "ground": 63,
                "arial": 53,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-121",
            "superstar_name": "Tensai",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 62,
                "attack": 75,
                "reverse": 53,
                "block": 66,
                "ground": 72,
                "arial": 25,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-122",
            "superstar_name": "Theodore Long",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 35,
                "attack": 23,
                "reverse": 26,
                "block": 30,
                "ground": 26,
                "arial": 24,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-123",
            "superstar_name": "Titus O'Neil",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 35,
                "attack": 43,
                "reverse": 31,
                "block": 40,
                "ground": 47,
                "arial": 37,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-124",
            "superstar_name": "Tony Chimel",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 19,
                "attack": 25,
                "reverse": 17,
                "block": 21,
                "ground": 22,
                "arial": 16,
                "star_rating": 1
            }
        },
        {
            "card_id": "SAR-125",
            "superstar_name": "Trent Barreta",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 31,
                "attack": 43,
                "reverse": 43,
                "block": 26,
                "ground": 46,
                "arial": 52,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-126",
            "superstar_name": "Triple H",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 81,
                "attack": 80,
                "reverse": 77,
                "block": 83,
                "ground": 84,
                "arial": 59,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-127",
            "superstar_name": "Tyson Kidd",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 59,
                "attack": 50,
                "reverse": 63,
                "block": 52,
                "ground": 52,
                "arial": 55,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-128",
            "superstar_name": "Undertaker",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 76,
                "attack": 81,
                "reverse": 79,
                "block": 75,
                "ground": 90,
                "arial": 60,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-129",
            "superstar_name": "Vickie Guerrero",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 55,
                "attack": 33,
                "reverse": 35,
                "block": 49,
                "ground": 90,
                "arial": 27,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-130",
            "superstar_name": "Wade Barrett",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 82,
                "attack": 73,
                "reverse": 73,
                "block": 81,
                "ground": 80,
                "arial": 35,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-131",
            "superstar_name": "William Regal",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 61,
                "attack": 54,
                "reverse": 66,
                "block": 54,
                "ground": 53,
                "arial": 29,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-132",
            "superstar_name": "Yoshi Tatsu",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 46,
                "attack": 52,
                "reverse": 55,
                "block": 48,
                "ground": 50,
                "arial": 61,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-133",
            "superstar_name": "Zack Ryder",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 66,
                "reverse": 50,
                "block": 54,
                "ground": 63,
                "arial": 60,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-134",
            "superstar_name": "Iron Sheik",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 58,
                "attack": 41,
                "reverse": 51,
                "block": 56,
                "ground": 50,
                "arial": 31,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-135",
            "superstar_name": "Jake 'The Snake' Roberts",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 59,
                "attack": 71,
                "reverse": 58,
                "block": 63,
                "ground": 73,
                "arial": 47,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-136",
            "superstar_name": "Koko B. Ware",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 67,
                "reverse": 65,
                "block": 55,
                "ground": 51,
                "arial": 69,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-137",
            "superstar_name": "British Bulldog",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 59,
                "attack": 70,
                "reverse": 57,
                "block": 56,
                "ground": 72,
                "arial": 43,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-138",
            "superstar_name": "Sgt. Slaughter",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 65,
                "attack": 51,
                "reverse": 68,
                "block": 61,
                "ground": 56,
                "arial": 28,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-139",
            "superstar_name": "Ravishing Rick Rude",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 54,
                "attack": 62,
                "reverse": 51,
                "block": 57,
                "ground": 65,
                "arial": 39,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-140",
            "superstar_name": "Bam Bam Bigelow",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 50,
                "attack": 60,
                "reverse": 50,
                "block": 54,
                "ground": 57,
                "arial": 62,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-141",
            "superstar_name": "Junkyard Dog",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 52,
                "attack": 43,
                "reverse": 50,
                "block": 54,
                "ground": 48,
                "arial": 33,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-142",
            "superstar_name": "'The Million Dollar Man' Ted DiBiase",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 71,
                "attack": 55,
                "reverse": 73,
                "block": 66,
                "ground": 58,
                "arial": 36,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-143",
            "superstar_name": "Rowdy Roddy Piper",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 61,
                "attack": 73,
                "reverse": 59,
                "block": 56,
                "ground": 71,
                "arial": 40,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-144",
            "superstar_name": "Mr. Wonderful Paul Orndorff",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 60,
                "attack": 60,
                "reverse": 63,
                "block": 54,
                "ground": 58,
                "arial": 31,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-145",
            "superstar_name": "Jimmy 'Superfly' Snuka",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 59,
                "attack": 80,
                "reverse": 63,
                "block": 55,
                "ground": 65,
                "arial": 78,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-146",
            "superstar_name": "Nikolai Volkoff",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 66,
                "attack": 51,
                "reverse": 52,
                "block": 60,
                "ground": 56,
                "arial": 23,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-147",
            "superstar_name": "The 'American Dream' Dusty Rhodes",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 75,
                "reverse": 58,
                "block": 68,
                "ground": 73,
                "arial": 21,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-148",
            "superstar_name": "Bobby 'The Brain' Heenan",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 52,
                "attack": 36,
                "reverse": 33,
                "block": 49,
                "ground": 40,
                "arial": 19,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-149",
            "superstar_name": "Hillbilly Jim",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 57,
                "attack": 50,
                "reverse": 50,
                "block": 53,
                "ground": 55,
                "arial": 20,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-150",
            "superstar_name": "Mr. Perfect Curt Hennig",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 72,
                "attack": 58,
                "reverse": 74,
                "block": 65,
                "ground": 60,
                "arial": 45,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-151",
            "superstar_name": "Barry Windham",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 61,
                "attack": 63,
                "reverse": 52,
                "block": 64,
                "ground": 65,
                "arial": 38,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-152",
            "superstar_name": "Cowboy Bob Orton",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 55,
                "reverse": 54,
                "block": 61,
                "ground": 63,
                "arial": 30,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-153",
            "superstar_name": "Jerry 'The King' Lawler",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 59,
                "attack": 72,
                "reverse": 52,
                "block": 57,
                "ground": 76,
                "arial": 33,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-154",
            "superstar_name": "Arn Anderson",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 59,
                "attack": 66,
                "reverse": 58,
                "block": 50,
                "ground": 60,
                "arial": 31,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-155",
            "superstar_name": "Ricky 'The Dragon' Steamboat",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 73,
                "reverse": 66,
                "block": 60,
                "ground": 67,
                "arial": 76,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-156",
            "superstar_name": "Vader",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 64,
                "reverse": 42,
                "block": 55,
                "ground": 66,
                "arial": 60,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-157",
            "superstar_name": "Gorilla Monsoon",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 53,
                "attack": 67,
                "reverse": 49,
                "block": 57,
                "ground": 60,
                "arial": 42,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-158",
            "superstar_name": "Terry Funk",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 51,
                "reverse": 53,
                "block": 68,
                "ground": 57,
                "arial": 29,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-159",
            "superstar_name": "IRS",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 54,
                "attack": 60,
                "reverse": 45,
                "block": 56,
                "ground": 58,
                "arial": 36,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-160",
            "superstar_name": "Yokozuna",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 58,
                "attack": 73,
                "reverse": 40,
                "block": 64,
                "ground": 76,
                "arial": 34,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-161",
            "superstar_name": "Greg Valentine",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 67,
                "attack": 55,
                "reverse": 69,
                "block": 61,
                "ground": 60,
                "arial": 30,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-162",
            "superstar_name": "Batista",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 74,
                "attack": 83,
                "reverse": 71,
                "block": 78,
                "ground": 85,
                "arial": 50,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-163",
            "superstar_name": "Big Boss Man",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 56,
                "attack": 64,
                "reverse": 43,
                "block": 60,
                "ground": 66,
                "arial": 43,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-164",
            "superstar_name": "Diesel",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 67,
                "attack": 79,
                "reverse": 56,
                "block": 71,
                "ground": 77,
                "arial": 28,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-165",
            "superstar_name": "George 'The Animal' Steele",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 55,
                "attack": 65,
                "reverse": 47,
                "block": 59,
                "ground": 68,
                "arial": 32,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-166",
            "superstar_name": "Papa Shango",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Grappler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 62,
                "attack": 50,
                "reverse": 54,
                "block": 60,
                "ground": 55,
                "arial": 39,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-167",
            "superstar_name": "Paul Bearer",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 50,
                "attack": 30,
                "reverse": 26,
                "block": 42,
                "ground": 28,
                "arial": 17,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-168",
            "superstar_name": "Road Warriors",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 73,
                "reverse": 60,
                "block": 66,
                "ground": 65,
                "arial": 69,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-169",
            "superstar_name": "Shawn Michaels",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 71,
                "attack": 83,
                "reverse": 75,
                "block": 67,
                "ground": 78,
                "arial": 75,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-170",
            "superstar_name": "Trish Stratus",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 50,
                "attack": 66,
                "reverse": 56,
                "block": 52,
                "ground": 57,
                "arial": 65,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-171",
            "superstar_name": "Stone Cold Steve Austin",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 78,
                "attack": 83,
                "reverse": 66,
                "block": 74,
                "ground": 81,
                "arial": 36,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-172",
            "superstar_name": "Dean Malenko",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Technician",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 50,
                "reverse": 68,
                "block": 60,
                "ground": 55,
                "arial": 41,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-173",
            "superstar_name": "The Godfather",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 52,
                "attack": 63,
                "reverse": 50,
                "block": 58,
                "ground": 60,
                "arial": 37,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-174",
            "superstar_name": "Mankind",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Brawler",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 63,
                "attack": 75,
                "reverse": 56,
                "block": 69,
                "ground": 72,
                "arial": 23,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-175",
            "superstar_name": "Kofi Kingston & R-Truth",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 53,
                "attack": 70,
                "reverse": 63,
                "block": 56,
                "ground": 68,
                "arial": 73,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-176",
            "superstar_name": "Dolph Ziggler & Jack Swagger",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Showman",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 64,
                "attack": 58,
                "reverse": 65,
                "block": 62,
                "ground": 63,
                "arial": 50,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-177",
            "superstar_name": "The Usos",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 60,
                "attack": 69,
                "reverse": 59,
                "block": 54,
                "ground": 61,
                "arial": 73,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-178",
            "superstar_name": "Primo & Epico",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 55,
                "attack": 65,
                "reverse": 57,
                "block": 50,
                "ground": 57,
                "arial": 66,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-179",
            "superstar_name": "Hunico & Camacho",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 51,
                "attack": 63,
                "reverse": 54,
                "block": 47,
                "ground": 55,
                "arial": 61,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-180",
            "superstar_name": "Darren Young & Titus O'Neil",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "Powerhouse",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 46,
                "attack": 50,
                "reverse": 47,
                "block": 50,
                "ground": 55,
                "arial": 31,
                "star_rating": 2
            }
        },
        {
            "card_id": "SAR-181",
            "superstar_name": "Justin Gabriel & Tyson Kidd",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "High-Flyer",
            "sub_category": "",
            "move_name": "",
            "special_card": false,
            "stats": {
                "defense": 57,
                "attack": 49,
                "reverse": 61,
                "block": 52,
                "ground": 50,
                "arial": 66,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-182",
            "superstar_name": "Steel Chair",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-183",
            "superstar_name": "Sledgehammer",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-184",
            "superstar_name": "Table",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-185",
            "superstar_name": "Trash Can",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-186",
            "superstar_name": "Ladder",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-187",
            "superstar_name": "Stell Steps",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 5
            }
        },
        {
            "card_id": "SAR-188",
            "superstar_name": "Ring Bell",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-189",
            "superstar_name": "Brass Knuckles",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-190",
            "superstar_name": "Kendo Stick",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-191",
            "superstar_name": "Crutches",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-192",
            "superstar_name": "Announcers Table",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 4
            }
        },
        {
            "card_id": "SAR-193",
            "superstar_name": "Microphone",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-194",
            "superstar_name": "Fire Extinguisher",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-195",
            "superstar_name": "Giutar",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 3
            }
        },
        {
            "card_id": "SAR-196",
            "superstar_name": "TLC Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-197",
            "superstar_name": "Stell Cage Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-198",
            "superstar_name": "Hell In A Cell Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-199",
            "superstar_name": "Stretcher Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-200",
            "superstar_name": "Elimination Chamber Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-201",
            "superstar_name": "Ambulance Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-202",
            "superstar_name": "Falls Count Anywhere Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-203",
            "superstar_name": "Lumberjack Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-204",
            "superstar_name": "No Disqualification Match",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-205",
            "superstar_name": "Royal Rumble",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-206",
            "superstar_name": "Elimination Chamber",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-207",
            "superstar_name": "Wrestlemania XXVIII",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-208",
            "superstar_name": "Exteme Rules",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-209",
            "superstar_name": "Over The Limit",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-210",
            "superstar_name": "NO Way Out",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-211",
            "superstar_name": "Money In The Bank",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-212",
            "superstar_name": "Summer Slam",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-213",
            "superstar_name": "Night Of Champions",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-214",
            "superstar_name": "Hell In A Cell",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-215",
            "superstar_name": "Survivor Series",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        },
        {
            "card_id": "SAR-216",
            "superstar_name": "TLC",
            "collection": "Slam Attax: Rebellion",
            "year": 2012,
            "category": "",
            "sub_category": "",
            "move_name": "",
            "special_card": true,
            "stats": {
                "defense": 0,
                "attack": 0,
                "reverse": 0,
                "block": 0,
                "ground": 0,
                "arial": 0,
                "star_rating": 0
            }
        }
    ]

    if (!Array.isArray(dataArray)) {
        return res.status(400).send({ error: "Request body must be an array of users" });
    }

    try {
        const promises = dataArray.map(async (data) => {

            // 📁 Local image path (adjust folder name if needed)
            const localFilePath = path.join(__dirname, "images", `${data.card_id}.png`);

            // ❗ check if file exists
            if (!fs.existsSync(localFilePath)) {
                console.log("❌ Image not found:", localFilePath);
                return;
            }

            // 📦 Firebase storage path
            const filePath = `WWE/2012/SlamAttax-Rebellion/${data.card_id}.png`;

            const token = uuidv4();

            // 📤 Upload image
            await storage.upload(localFilePath, {
                destination: filePath,
                metadata: {
                    contentType: "image/png",
                    metadata: {
                        firebaseStorageDownloadTokens: token,
                    },
                },
            });

            // 🔗 Generate public URL
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${encodeURIComponent(filePath)}?alt=media&token=${token}`;

            const updatedData = {
                ...data,
                card_image: publicUrl
            };

            console.log("✅ Uploaded:", data.card_id);

            // 📥 Save to Firestore
            return firestore
                .collection("WWE")
                .doc("2012")
                .collection("SlamAttax-Rebellion")
                .doc(data.card_id)
                .set(updatedData);
        });

        await Promise.all(promises);
        res.status(200).send({ message: "All users uploaded successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to upload users", details: error.message });
    }

}