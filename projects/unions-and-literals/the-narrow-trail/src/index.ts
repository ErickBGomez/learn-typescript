export function runCommands() {
	let availableResource: "food" | "water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;

	while (day <= 7) {
		// Roll dice (from 1 to 6, both inclusive)
		const diceValue = Math.floor(Math.random() * 6) + 1;

		switch (diceValue) {
			case 1: // Set availableResource to food
				availableResource = "food";
				break;

			case 2: // Set availableResource to water
				availableResource = "water";
				break;

			// Values 3 - 6: Resupply
			default:
				if (!availableResource) {
					// Set food or water based on dice value, if available resource is not set yet
					availableResource = diceValue % 2 === 0 ? "food" : "water";
				} else {
					// If availableResource is already set, increase food or water resource based on current dice roll value
					if (availableResource === "food") {
						food += diceValue;
					} else if (availableResource === "water") {
						water += diceValue;
					}

					// Unset availableResource ONLY when it had a value already set before.
					availableResource = undefined;
				}
		}

		// Reduce food and water resources when dice turn ends
		food--;
		water--;

		// Game over check, return false when one of the resources reaches to 0
		if (food <= 0 || water <= 0) return false;

		// Increase day count if the game still continues
		day++;
	}

	// Return true if the player reaches day 7 with remaining food or water
	return true;
}
