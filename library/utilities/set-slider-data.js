import db from '../../config/data.js';

function setSliderData(scope, unscaledValue) {
	if (scope === 'fader') {
		db.data.gain.current = unscaledValue;
	} else {
		db.data.buffer.elapsedTime = unscaledValue * db.data.buffer.length;
	}
}

export default setSliderData;