const fs = require('fs');

class Cloth {
  constructor(name, warmth, count) {
    this.name = name;
    this.warmth = warmth;
    this.count = count;
  }
}

const Tops = {
	// summer
	NASA_SHIRT: new Cloth("nasa shirt", 1, 1),
	WHITE_TSHIRT: new Cloth("white t-shirt", 1, 1),
	MAROON_TSHIRT: new Cloth("maroon t-shirt", 1, 1),
	GREEN_TSHIRT: new Cloth("green t-shirt", 1, 1),
	BLACK_TSHIRT: new Cloth("black t-shirt", 1, 1),
	BLACK_VNECK: new Cloth("black v-neck", 1, 1),
	SPRINKLES_TSHIRT: new Cloth("sprinkles t-shirt", 1, 1),
	BLUE_HENLEY: new Cloth("blue henley", 1, 1),
	WHITE_HENLEY: new Cloth("white henley", 1, 1),
	GREEN_HENLEY: new Cloth("green henley", 1, 1),
	PANTONE_292_TSHIRT: new Cloth("pantone 292 t-shirt", 1, 1),
	STRIPED_TSHIRT: new Cloth("blue/white striped shirt", 1, 1),

	// winter
	DENIM_SHIRT: new Cloth("denim shirt", 2, 1),
	COLUMBIA_CC_LONGSLEEVE: new Cloth("columbia cc longsleeve", 2, 1),
	PATAGONIA_LONGSLEEVE: new Cloth("patagonia longsleeve", 2, 1),
	BLUE_FORMAL_SHIRT: new Cloth("blue formal shirt", 2, 1),
	CORDUROY_SHIRT: new Cloth("corduroy shirt", 2, 1),
	RED_FLANNEL: new Cloth("red flannel", 2.5, 1),
	PINSTRIPE_SHIRT: new Cloth("pinstripe shirt", 2, 1),
	YELLOW_STRIPED_SWEATSHIRT: new Cloth("yellow striped sweatshirt", 3, 1),
	BURGANDY_SWEATER: new Cloth("burgandy sweater", 3, 1),
	FESTIVE_SWEATER: new Cloth("festive sweater", 3, 1),
	COLUMBIA_SWEATSHIRT: new Cloth("columbia sweatshirt", 3, 1),
	BLUE_RIBBED_SWEATER: new Cloth("blue ribbed sweater", 3, 1),
	TEXTURED_GRAY_SWEATER: new Cloth("textured gray sweater", 3, 1),
	MARBLED_BLUE_SWEATSHIRT: new Cloth("marbled blue sweatshirt", 2.5, 1),
	DARK_GREEN_SWEATER: new Cloth("dark green sweater", 3, 1),
	EXPRESS_WHITE_UNDERSHIRT: new Cloth("express white undershirt", 2, 1),
	BLACK_RALPH_LAUREN_SWEATSHIRT: new Cloth("black ralph lauren sweatshirt", 2, 1),
	PEANUTS_SWEATSHIRT: new Cloth("peanuts shelter", 3, 1),
}
Object.freeze(Tops);

const Bottoms = {
	// shorts
	WHITE_SHORTS: new Cloth("white shorts", -1, 2),
	LIGHT_BLUE_SHORTS: new Cloth("light blue shorts", -1, 1),
	KHAKI_SHORTS: new Cloth("khaki shorts", -1, 2),
	ORANGE_SHORTS: new Cloth("orange shorts", -1, 3),

	// pants 
	BLUE_JEANS: new Cloth("blue jeans", 0, 4),
	DARK_BLUE_JEANS: new Cloth("dark blue jeans", 0, 4),
	LIGHT_BLUE_JEANS: new Cloth("light blue jeans", 0, 3),
	BLACK_CHINOS: new Cloth("black chinos", 0, 3),
	KHAKIS: new Cloth("khakis", 0, 6),
	SUMMER_KHAKIS: new Cloth("summer khakis", 0, 3),
	BROWN_KHAKIS: new Cloth("brown khakis", 0, 3),
	YELLOWISH_KHAKIS: new Cloth("yellowish khakis", 0, 3),
	GREEN_KHAKIS: new Cloth("green khakis", 0, 3),
	LIGHT_GRAY_SWEATPANTS: new Cloth("light gray sweatpants", 0, 2)
}
Object.freeze(Bottoms);

const Jackets = {
	BLACK_JACKET: new Cloth("black", 2.5, 100),
	KHAKI_BOMBER: new Cloth("khaki bomber", 2, 100),
	GREEN_BOMBER: new Cloth("green bomber", 2, 100),
	ZARA_NAVY_JACKET: new Cloth("zara navy blue", 3, 300),
	NAVY_SPORTS_COAT: new Cloth("navy blue sports coat", 3, 300),
	NAVY_WINTER_COAT: new Cloth("navy winter coat", 4, 300),
	ADI_PATAGONIA: new Cloth("adi patagonia", 3, 10),
	BLACK_OVERCOAT: new Cloth("black overcoat", 3.5, 300)
 }
Object.freeze(Jackets);

const outfits = [
		// summer
		{
			top: Tops.NASA_SHIRT,
			bottom: Bottoms.LIGHT_BLUE_JEANS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.GREEN_BOMBER],
			shoes: "white",
			socks: "white or gray",
			formalness: 1,
			quality: 3,
			trendy: 2
		}, 
		// winter
		{
			top: Tops.RED_FLANNEL,
			bottom: Bottoms.DARK_BLUE_JEANS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.ZARA_NAVY_JACKET, Jackets.BLACK_JACKET],
			shoes: "brown",
			socks: "any",
			formalness: 2,
			quality: 3,
			trendy: 1
		},	{
			top: Tops.RED_FLANNEL,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.ZARA_NAVY_JACKET],
			shoes: "brown",
			socks: "any",
			formalness: 2,
			quality: 3,
			trendy: 1
		}, {
			top: Tops.YELLOW_STRIPED_SWEATSHIRT,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: "black",
			socks: "white or gray",
			formalness: 1,
			quality: 3,
			trendy: 3
		}, {
			top: Tops.YELLOW_STRIPED_SWEATSHIRT,
			bottom: Bottoms.BLUE_JEANS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "black",
			socks: "white or gray",
			formalness: 1,
			quality: 3,
			trendy: 3
		},{
			top: Tops.YELLOW_STRIPED_SWEATSHIRT,
			bottom: Bottoms.YELLOWISH_KHAKIS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "black",
			socks: "white or gray",
			formalness: 1,
			quality: 3,
			trendy: 3
		},{
			top: Tops.BURGANDY_SWEATER,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT],
			shoes: "brown or black",
			socks: "black",
			formalness: 2,
			quality: 2,
			trendy: 2
		},{
			top: Tops.BURGANDY_SWEATER,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.BLACK_OVERCOAT, Jackets.ZARA_NAVY_JACKET, Jackets.BLACK_JACKET],
			shoes: "brown or black",
			socks: "black",
			formalness: [2, 2, 1],
			quality: 2,
			trendy: 2
		}, {
			top: Tops.MARBLED_BLUE_SWEATSHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: "",
			shoes: "white",
			socks: "white/gray",
			formalness: 2,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.FESTIVE_SWEATER,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: "white",
			socks: "gray",
			formalness: 1,
			quality: 1,
			trendy: 3, 
		}, {
			top: Tops.FESTIVE_SWEATER,
			bottom: Bottoms.BLUE_JEANS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: "white",
			socks: "gray",
			formalness: 1,
			quality: 1,
			trendy: 3, 
		}, {
			top: Tops.TEXTURED_GRAY_SWEATER,
			bottom: Bottoms.LIGHT_BLUE_JEANS,
			jacket: ["", Jackets.BLACK_OVERCOAT],
			shoes: "khaki boots",
			socks: "any",
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.COLUMBIA_CC_LONGSLEEVE,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "white",
			socks: "gray",
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.PATAGONIA_LONGSLEEVE,
			bottom: Bottoms.DARK_BLUE_JEANS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "white",
			socks: "gray",
			formalness: 1,
			quality: 2,
			trendy: 2
		},{
			top: Tops.PATAGONIA_LONGSLEEVE,
			bottom: Bottoms.GREEN_KHAKIS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "white",
			socks: "gray",
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLUE_RIBBED_SWEATER,
			bottom: Bottoms.BROWN_KHAKIS,
			jacket: ["", "black", "black overcoat", Jackets.NAVY_WINTER_COAT],
			shoes: "brown",
			socks: "black",
			formalness: [1, 1, 2, 1],
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLUE_RIBBED_SWEATER,
			bottom: Bottoms.YELLOWISH_KHAKIS,
			jacket: ["", "black", "black overcoat", Jackets.NAVY_WINTER_COAT],
			shoes: "brown",
			socks: "black",
			formalness: [1, 1, 2],
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLACK_RALPH_LAUREN_SWEATSHIRT,
			bottom: Bottoms.BLUE_JEANS,
			jacket: ["", Jackets.KHAKI_BOMBER],
			shoes: "brown shoes",
			socks: "black",
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLACK_RALPH_LAUREN_SWEATSHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.ZARA_NAVY_JACKET, Jackets.KHAKI_BOMBER, Jackets.NAVY_WINTER_COAT],
			shoes: ["brown shoes", "white shoes"],
			socks: ["black", "black", "white/gray", "white/gray"],
			formalness: 2,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.COLUMBIA_SWEATSHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.KHAKI_BOMBER, Jackets.NAVY_WINTER_COAT],
			shoes: ["brown shoes", "white shoes"],
			socks: ["black", "black", "white/gray"],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLUE_FORMAL_SHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: ["black overcoat", "black", ""],
			shoes: "suede or black",
			socks: "any",
			formalness: 3,
			quality: 2,
			trendy: 1
		}, {
			top: Tops.DARK_GREEN_SWEATER,
			bottom: Bottoms.KHAKIS,
			jacket: [Jackets.BLACK_OVERCOAT, ""],
			shoes: "brown",
			socks: "any",
			accessories: "black scarf",
			formalness: [3, 2],
			quality: 3,
			trendy: 2
		}, {
			top: Tops.EXPRESS_WHITE_UNDERSHIRT,
			bottom: Bottoms.DARK_BLUE_JEANS,
			jacket: [Jackets.ADI_PATAGONIA, Jackets.BLACK_JACKET, ""],
			shoes: "white",
			socks: "white/gray",
			formalness: 1,
			quality: 2,
			trendy: [2, 3]
		}, {
			top: Tops.CORDUROY_SHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: [Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET, ""],
			shoes: "white",
			socks: "white/gray",
			formalness: 3,
			quality: 2,
			trendy: 3
		}, {
			top: Tops.CORDUROY_SHIRT,
			bottom: Bottoms.YELLOWISH_KHAKIS,
			jacket: Jackets.KHAKI_BOMBER,
			shoes: "white",
			socks: "white/gray",
			formalness: 3,
			quality: 2,
			trendy: 3
		},  {
			top: Tops.PEANUTS_SWEATSHIRT,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: [Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: "white",
			socks: "white/gray",
			formalness: 1,
			quality: 2,
			trendy: 3
		}, {
			top: Tops.WHITE_TSHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: Tops.DENIM_SHIRT,
			shoes: "white or brown",
			socks: "white/gray",
			formalness: 2,
			quality: 3,
			trendy: 3
		}, {
			top: Tops.DENIM_SHIRT,
			bottom: Bottoms.KHAKIS,
			shoes: "white or brown",
			socks: "white/gray",
			formalness: 2,
			quality: 2,
			trendy: 1
		}
]
Object.freeze(outfits)

const extract = cloth => { return {[cloth.name]: cloth.count} };
let inventory = {}
console.log(Object.values(Tops).map(extract))
Object.assign(inventory, ...Object.values(Tops).map(extract));
Object.assign(inventory, ...Object.values(Bottoms).map(extract));
Object.assign(inventory, ...Object.values(Jackets).map(extract));

expandedOutfits = []

for (outfit of outfits) {	
	let doneIterating = false
	let i = 0

	while (! doneIterating) {
		let toAdd = {}
		doneIterating = true

		for (prop of Object.keys(outfit)) {
			if (Array.isArray(outfit[prop])){

				if(i >= outfit[prop].length){
					doneIterating = true
					break
				}

				toAdd[prop] = outfit[prop][i]
				doneIterating = false
			} else {
				toAdd[prop] = outfit[prop]
			}
		}

		i += 1

		if (! doneIterating) {
			warmth = 0;

			for (key of Object.keys(toAdd)){

				if (typeof toAdd[key] === 'object'){
					warmth += toAdd[key].warmth
					toAdd[key] = toAdd[key].name
				}
			}

			toAdd["warmth"] = warmth;
			expandedOutfits.push(toAdd)
		}
	}
}


fs.writeFileSync('./outfits.json', JSON.stringify(expandedOutfits, null, 2), 'utf-8')
fs.writeFileSync('./inventory.json', JSON.stringify(inventory, null, 2), 'utf-8')





