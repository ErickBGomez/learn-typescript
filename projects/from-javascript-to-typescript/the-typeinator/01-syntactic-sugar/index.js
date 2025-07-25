// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.

const announceMachines = (announce, ...machines) => {
	let labelsCount = 0;

	for (const machine of machines) {
		let label;

		if (machine.label) {
			label = machine.label;
			labelsCount++;

			return;
		}

		label = `Make: ${machine.make}; Model ${machine.model}`;

		announce(label);
	}

	return labelsCount;
};

module.exports.announceMachines = announceMachines;
