const file64String = "1234567890";
// "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
// ^^100 chars

type patternAnalysisRecord = {
	count: number;
	size: number;
};

function PatternAnalysis(file64String: string) {
	const patternDict: Record<string, patternAnalysisRecord> = {};
	const maxPatternLength = Math.trunc(file64String.length / 2);

	// let sizeOfPattern = 2

	for (let sizeOfPattern = 2; sizeOfPattern <= maxPatternLength; sizeOfPattern++) {
		console.log("------------" + sizeOfPattern + "------------");
		for (let i = 0; i < file64String.length; i++) {
			let currentPattern = file64String.substring(i, i + sizeOfPattern);
			if (currentPattern.length < sizeOfPattern) {
				break;
			}
			console.log(currentPattern);
		}
		console.log("------------------------");
	}
}

PatternAnalysis(file64String);
