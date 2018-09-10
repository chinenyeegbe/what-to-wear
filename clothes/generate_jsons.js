const fs = require('fs');

const Clothes = {
  top: {
  	// summer
    NASA_SHIRT: "nasa shirt",
    DENIM_SHIRT: "denim shirt",
    WHITE_TSHIRT: "white t-shirt",
    MAROON_TSHIRT: "maroon t-shirt",
    GREEN_TSHIRT: "green t-shirt",
    BLACK_TSHIRT: "black t-shirt",
    BLACK_VNECK: "black v-neck",
    SPRINKLES_TSHIRT: "sprinkles t-shirt",
    BLUE_HENLEY: "blue henley",
    WHITE_HENLEY: "white henley",
    GREEN_HENLEY: "green henley",
    PANTONE_292_TSHIRT: "pantone 292 t-shirt",
    STRIPED_SHIRT: "blue/white striped shirt",

  	// winter
    RED_FLANNEL: "red flannel",
    YELLOW_STRIPED_SWEATSHIRT: "yellow striped sweatshirt",
    BURGANDY_SWEATER: "burgandy sweater",
    FESTIVE_SWEATER: "festive sweater",
    COLUMBIA_CC_LONGSLEEVE: "columbia cc longsleeve",
    COLUMBIA_SWEATSHIRT: "columbia sweatshirt",
    BLUE_RIBBED_SWEATER: "blue ribbed sweater",
    TEXTURED_GRAY_SWEATER: "textured gray sweater",
    MARBLED_BLUE_SWEATSHIRT: "marbled blue sweatshirt",
    DARK_GREEN_SWEATER: "dark green sweater",
    PATAGONIA_LONGSLEEVE: "patagonia longsleeve",
    EXPRESS_WHITE_UNDERSHIRT: "express white undershirt",
    BLACK_RALPH_LAUREN_SWEATSHIRT: "black ralph lauren sweatshirt",
    BLUE_FORMAL_SHIRT: "blue formal shirt",
    CORDUROY_SHIRT: "corduroy shirt"
  },
  bottom: {
    BLUE_JEANS: "blue jeans",
    DARK_BLUE_JEANS: "dark blue jeans",
    LIGHT_BLUE_JEANS: "light blue jeans",
    BLACK_CHINOS: "black chinos",
    KHAKIS: "khakis",
    SUMMER_KHAKIS: "summer khakis",
    BROWN_KHAKIS: "brown khakis",
    YELLOWISH_KHAKIS: "yellowish khakis",
  },
  jacket: {
  	BLACK_JACKET: "black",
  	KHAKI_BOMBER: "khaki bomber",
  	GREEN_BOMBER: "green bomber",
  	NAVY_JACKET: "navy blue",
  	NAVY_SPORTS_COAT: "navy blue sports coat",
  	NAVY_WINTER_COAT: "navy winter coat",
  	ADI_PATAGONIA: "adi patagonia",
  	BLACK_OVERCOAT: "black overcoat"
  },
  shoes: {
  	WHITE_SNEAKERS: "white",
  	BLACK_SNEAKERS: "black",
  	BROWN_SHOES: "brown",
  	FORMAL_BROWN_SHOES: "formal brown",
  	FLIP_FLOPS: "flip flops",
  	BOOTS: "boots"
  }
};
Object.freeze(Clothes);

let inventory = {}

for (top of Object.values(Clothes.top)) {
	inventory[top] = 1;
}

for (bottom of Object.values(Clothes.bottom)) {
	inventory[bottom] = 3;
}

inventory[Clothes.bottom.KHAKIS] = 6;

const outfits = [
		{
			top: Clothes.top.RED_FLANNEL,
			bottom: Clothes.bottom.DARK_BLUE_JEANS,
			jacket: [Clothes.jacket.NAVY_WINTER_COAT, Clothes.jacket.BLACK_JACKET],
			shoes: Clothes.shoes.BROWN_SHOES,
			socks: "any",
			warmth: [5, 3],
			formalness: 2,
			quality: 3,
			trendy: 1
		},	{
			top: Clothes.top.RED_FLANNEL,
			bottom: Clothes.bottom.BLACK_CHINOS,
			jacket: Clothes.jacket.NAVY_WINTER_COAT,
			shoes: Clothes.shoes.BROWN_SHOES,
			socks: "any",
			warmth: 3,
			formalness: 2,
			quality: 3,
			trendy: 1
		}, {
			top: Clothes.top.NASA_SHIRT,
			bottom: Clothes.bottom.LIGHT_BLUE_JEANS,
			jacket: ["", Clothes.jacket.BLACK_JACKET, Clothes.jacket.GREEN_BOMBER],
			warmth: [1, 2, 2],
			shoes: Clothes.shoes.WHITE_SNEAKERS,
			socks: "white or gray",
			formalness: 1,
			quality: 3,
			trendy: 2
		}, {
			top: Clothes.top.YELLOW_STRIPED_SWEATSHIRT,
			bottom: Clothes.bottom.BLACK_CHINOS,
			jacket: [Clothes.jacket.NAVY_WINTER_COAT, Clothes.jacket.BLACK_JACKET],
			shoes: Clothes.shoes.BLACK_SNEAKERS,
			socks: "white or gray",
			warmth: [5, 4],
			formalness: 1,
			quality: 3,
			trendy: 3
		},{
			top: Clothes.top.BURGANDY_SWEATER,
			bottom: Clothes.bottom.BLACK_CHINOS,
			jacket: [Clothes.jacket.BLACK_OVERCOAT, Clothes.jacket.BLACK_JACKET],
			shoes: "brown or black",
			socks: "black",
			warmth: [5, 3],
			formalness: 2,
			quality: 2,
			trendy: 2
		}, {
			top: Clothes.top.MARBLED_BLUE_SWEATSHIRT,
			bottom: Clothes.bottom.DARK_KHAKIS,
			jacket: Clothes.jacket.NAVY_SPORTS_COAT,
			shoes: "black or brown",
			socks: "white or gray",
			warmth: 4,
			formalness: 2,
			quality: 2,
			trendy: 2
		}, {
			top: Clothes.top.FESTIVE_SWEATER,
			bottom: Clothes.bottom.BLACK_CHINOS,
			jacket: [Clothes.jacket.NAVY_WINTER_COAT, Clothes.jacket.BLACK_JACKET],
			shoes: "white",
			socks: "gray",
			warmth: [5, 4],
			formalness: 1,
			quality: 2,
			trendy: 3, 
		}, {
			top: Clothes.top.TEXTURED_GRAY_SWEATER,
			bottom: Clothes.bottom.LIGHT_BLUE_JEANS,
			jacket: Clothes.jacket.BLACK_OVERCOAT,
			shoes: "khaki boots",
			socks: "any",
			warmth: 4,
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Clothes.top.COLUMBIA_CC_LONGSLEEVE,
			bottom: Clothes.bottom.DARK_KHAKIS,
			jacket: ["", Clothes.jacket.BLACK_JACKET],
			shoes: "white",
			socks: "gray",
			warmth: [2, 3],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Clothes.top.BLUE_RIBBED_SWEATER,
			bottom: Clothes.bottom.BROWN_KHAKIS,
			jacket: ["", "black", "black overcoat"],
			shoes: "brown",
			socks: "black",
			warmth: [2, 3, 4],
			formalness: [1, 1, 2],
			quality: 2,
			trendy: 2
		}, {
			top: Clothes.top.BLACK_RALPH_LAUREN_SWEATSHIRT,
			bottom: Clothes.bottom.BLUE_JEANS,
			shoes: Clothes.shoes.BROWN_SHOES,
			socks: "black",
			warmth: 2,
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Clothes.top.BLUE_FORMAL_SHIRT,
			bottom: Clothes.bottom.KHAKIS,
			jacket: ["black overcoat", "black", ""],
			shoes: "suede or black",
			socks: "any",
			warmth: [5, 3, 2],
			formalness: 3,
			quality: 2,
			trendy: 1
		}, {
			top: Clothes.top.DARK_GREEN_SWEATER,
			bottom: Clothes.bottom.KHAKIS,
			jacket: ["black overcoat", ""],
			shoes: "brown",
			socks: "any",
			warmth: [5, 3],
			formalness: [3, 2],
			quality: 3,
			trendy: 2
		}
]
Object.freeze(outfits)

expandedOutfits = []
clothes = {"top": {}, "bottom": {}}

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

		if (! doneIterating)
			expandedOutfits.push(toAdd)
	}
}


fs.writeFileSync('./outfits.json', JSON.stringify(expandedOutfits, null, 2), 'utf-8')
fs.writeFileSync('./inventory.json', JSON.stringify(inventory, null, 2), 'utf-8')





