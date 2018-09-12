const fs = require('fs');

const Tops = {
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
	STRIPED_TSHIRT: "blue/white striped shirt",

	// winter
	RED_FLANNEL: "red flannel",
	PINSTRIPE_SHIRT: "pinstripe shirt",
	YELLOW_STRIPED_SWEATSHIRT: "yellow striped sweatshirt",
	BURGANDY_SWEATER: "burgandy sweater",
	FESTIVE_SWEATER: "festive sweater",
	COLUMBIA_CC_LONGSLEEVE: "columbia cc longsleeve",
	PATAGONIA_LONGSLEEVE: "patagonia longsleeve",
	COLUMBIA_SWEATSHIRT: "columbia sweatshirt",
	BLUE_RIBBED_SWEATER: "blue ribbed sweater",
	TEXTURED_GRAY_SWEATER: "textured gray sweater",
	MARBLED_BLUE_SWEATSHIRT: "marbled blue sweatshirt",
	DARK_GREEN_SWEATER: "dark green sweater",
	EXPRESS_WHITE_UNDERSHIRT: "express white undershirt",
	BLACK_RALPH_LAUREN_SWEATSHIRT: "black ralph lauren sweatshirt",
	BLUE_FORMAL_SHIRT: "blue formal shirt",
	CORDUROY_SHIRT: "corduroy shirt",
	PEANUTS_SWEATSHIRT: "peanuts shelter"
}
Object.freeze(Tops);

const Bottoms = {
	BLUE_JEANS: "blue jeans",
	DARK_BLUE_JEANS: "dark blue jeans",
	LIGHT_BLUE_JEANS: "light blue jeans",
	BLACK_CHINOS: "black chinos",
	KHAKIS: "khakis",
	SUMMER_KHAKIS: "summer khakis",
	BROWN_KHAKIS: "brown khakis",
	YELLOWISH_KHAKIS: "yellowish khakis",
	GREEN_KHAKIS: "green khakis"
}
Object.freeze(Bottoms);

const Jackets = {
	BLACK_JACKET: "black",
	KHAKI_BOMBER: "khaki bomber",
	GREEN_BOMBER: "green bomber",
	ZARA_NAVY_JACKET: "zara navy blue",
	NAVY_SPORTS_COAT: "navy blue sports coat",
	NAVY_WINTER_COAT: "navy winter coat",
	ADI_PATAGONIA: "adi patagonia",
	BLACK_OVERCOAT: "black overcoat"
 }
Object.freeze(Jackets);

const Shoes = {
	WHITE_SNEAKERS: "white",
	BLACK_SNEAKERS: "black",
	BROWN_SHOES: "brown",
	FORMAL_BROWN_SHOES: "formal brown",
	FLIP_FLOPS: "flip flops",
	BOOTS: "boots"
};
Object.freeze(Shoes);

let inventory = {}

for (top of Object.values(Tops)) {
	inventory[top] = 1;
}

for (bottom of Object.values(Bottoms)) {
	inventory[bottom] = 3;
}

inventory[Bottoms.KHAKIS] = 6;

const outfits = [
		// summer
		{
			top: Tops.NASA_SHIRT,
			bottom: Bottoms.LIGHT_BLUE_JEANS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.GREEN_BOMBER],
			warmth: [1, 2, 2],
			shoes: Shoes.WHITE_SNEAKERS,
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
			shoes: Shoes.BROWN_SHOES,
			socks: "any",
			warmth: [2, 5, 4, 3],
			formalness: 2,
			quality: 3,
			trendy: 1
		},	{
			top: Tops.RED_FLANNEL,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.ZARA_NAVY_JACKET],
			shoes: Shoes.BROWN_SHOES,
			socks: "any",
			warmth: [2, 5, 4],
			formalness: 2,
			quality: 3,
			trendy: 1
		}, {
			top: Tops.YELLOW_STRIPED_SWEATSHIRT,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: Shoes.BLACK_SNEAKERS,
			socks: "white or gray",
			warmth: [3, 5, 4],
			formalness: 1,
			quality: 3,
			trendy: 3
		}, {
			top: Tops.YELLOW_STRIPED_SWEATSHIRT,
			bottom: Bottoms.BLUE_JEANS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: Shoes.BLACK_SNEAKERS,
			socks: "white or gray",
			warmth: [3, 5, 4, 3.5],
			formalness: 1,
			quality: 3,
			trendy: 3
		},{
			top: Tops.YELLOW_STRIPED_SWEATSHIRT,
			bottom: Bottoms.YELLOWISH_KHAKIS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: Shoes.BLACK_SNEAKERS,
			socks: "white or gray",
			warmth: [3, 5, 4, 3],
			formalness: 1,
			quality: 3,
			trendy: 3
		},{
			top: Tops.BURGANDY_SWEATER,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT],
			shoes: "brown or black",
			socks: "black",
			warmth: [3, 5],
			formalness: 2,
			quality: 2,
			trendy: 2
		},{
			top: Tops.BURGANDY_SWEATER,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.BLACK_OVERCOAT, Jackets.ZARA_NAVY_JACKET, Jackets.BLACK_JACKET],
			shoes: "brown or black",
			socks: "black",
			warmth: [3, 5, 4, 4],
			formalness: [2, 2, 1],
			quality: 2,
			trendy: 2
		}, {
			top: Tops.MARBLED_BLUE_SWEATSHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: "",
			shoes: "white",
			socks: "white/gray",
			warmth: 4,
			formalness: 2,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.FESTIVE_SWEATER,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: "white",
			socks: "gray",
			warmth: [3, 5, 4],
			formalness: 1,
			quality: 1,
			trendy: 3, 
		}, {
			top: Tops.FESTIVE_SWEATER,
			bottom: Bottoms.BLUE_JEANS,
			jacket: ["", Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: "white",
			socks: "gray",
			warmth: [3, 5, 4],
			formalness: 1,
			quality: 1,
			trendy: 3, 
		}, {
			top: Tops.TEXTURED_GRAY_SWEATER,
			bottom: Bottoms.LIGHT_BLUE_JEANS,
			jacket: ["", Jackets.BLACK_OVERCOAT],
			shoes: "khaki boots",
			socks: "any",
			warmth: [3, 4],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.COLUMBIA_CC_LONGSLEEVE,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "white",
			socks: "gray",
			warmth: [2, 3],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.PATAGONIA_LONGSLEEVE,
			bottom: Bottoms.DARK_BLUE_JEANS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "white",
			socks: "gray",
			warmth: [2, 3],
			formalness: 1,
			quality: 2,
			trendy: 2
		},{
			top: Tops.PATAGONIA_LONGSLEEVE,
			bottom: Bottoms.GREEN_KHAKIS,
			jacket: ["", Jackets.BLACK_JACKET, Jackets.KHAKI_BOMBER],
			shoes: "white",
			socks: "gray",
			warmth: [2, 3],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLUE_RIBBED_SWEATER,
			bottom: Bottoms.BROWN_KHAKIS,
			jacket: ["", "black", "black overcoat", Jackets.NAVY_WINTER_COAT],
			shoes: "brown",
			socks: "black",
			warmth: [2, 3, 4.5, 5],
			formalness: [1, 1, 2, 1],
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLUE_RIBBED_SWEATER,
			bottom: Bottoms.YELLOWISH_KHAKIS,
			jacket: ["", "black", "black overcoat", Jackets.NAVY_WINTER_COAT],
			shoes: "brown",
			socks: "black",
			warmth: [2, 3, 4],
			formalness: [1, 1, 2],
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLACK_RALPH_LAUREN_SWEATSHIRT,
			bottom: Bottoms.BLUE_JEANS,
			jacket: ["", Jackets.KHAKI_BOMBER],
			shoes: Shoes.BROWN_SHOES,
			socks: "black",
			warmth: [2, 3],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLACK_RALPH_LAUREN_SWEATSHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.ZARA_NAVY_JACKET, Jackets.KHAKI_BOMBER, Jackets.NAVY_WINTER_COAT],
			shoes: [Shoes.BROWN_SHOES, Shoes.BROWN_SHOES, Shoes.WHITE_SNEAKERS, Shoes.WHITE_SNEAKERS],
			socks: ["black", "black", "white/gray", "white/gray"],
			warmth: [2, 3.5, 3, 4.5],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.COLUMBIA_SWEATSHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: ["", Jackets.KHAKI_BOMBER, Jackets.NAVY_WINTER_COAT],
			shoes: [Shoes.BROWN_SHOES, Shoes.BROWN_SHOES, Shoes.WHITE_SNEAKERS],
			socks: ["black", "black", "white/gray"],
			warmth: [2.5, 3.5, 5],
			formalness: 1,
			quality: 2,
			trendy: 2
		}, {
			top: Tops.BLUE_FORMAL_SHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: ["black overcoat", "black", ""],
			shoes: "suede or black",
			socks: "any",
			warmth: [5, 3, 2],
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
			warmth: [5, 3],
			formalness: [3, 2],
			quality: 3,
			trendy: 2
		}, {
			top: Tops.EXPRESS_WHITE_UNDERSHIRT,
			bottom: Bottoms.DARK_BLUE_JEANS,
			jacket: [Jackets.ADI_PATAGONIA, Jackets.BLACK_JACKET, ""],
			shoes: "white",
			socks: "white/gray",
			warmth: [4, 3, 2],
			formalness: 2,
			quality: 2,
			trendy: [2, 3]
		}, {
			top: Tops.CORDUROY_SHIRT,
			bottom: Bottoms.KHAKIS,
			jacket: [Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET, ""],
			shoes: "white",
			socks: "white/gray",
			warmth: [5, 3, 2],
			formalness: 2,
			quality: 2,
			trendy: 3
		}, {
			top: Tops.CORDUROY_SHIRT,
			bottom: Bottoms.YELLOWISH_KHAKIS,
			jacket: Jackets.KHAKI_BOMBER,
			shoes: "white",
			socks: "white/gray",
			warmth: 2.5,
			formalness: 2,
			quality: 2,
			trendy: 3
		},  {
			top: Tops.PEANUTS_SWEATSHIRT,
			bottom: Bottoms.BLACK_CHINOS,
			jacket: [Jackets.NAVY_WINTER_COAT, Jackets.BLACK_JACKET],
			shoes: "white",
			socks: "white/gray",
			warmth: [5, 4],
			formalness: 1,
			quality: 2,
			trendy: 3
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





