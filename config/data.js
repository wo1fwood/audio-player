/* ============================================================================
 * Information Database Object
 * ============================================================================
 * This object should be used as the single endpoint between any modules
 * within the audio-player.
 *
 * props.strings are used to populate data-attribute names for UI elements.
 * This allows easy editing and targeting of them should they need adjustment.
 *
 */
const db = {
	container: null,
	playlist: null,
	files: [],

	props: {
		configuration: 'full',
		template: 'one',
		rootClassName: 'audio',
		strings: {
			prefix: 'data-ap',
			status: 'data-ap-status',
			control: 'data-ap-control',
			symbol: 'data-ap-symbol',
			hidden: 'data-hidden',
		},
		offset: 0.05,

		//player config props
		showMetadata: true,
		stepControls: false,
		progressOptions: 'slider',
		gainOptions: 'slider',
		loop: false,
	},

	map: {
		//status nodes
		title: 'title',
		artist: 'artist',
		timeCurrent: 'time-current',
		timeTotal: 'time-total',
		progressCurrent: 'progress-current',
		progressHandle: 'progress-handle',
		faderCurrent: 'gain-current',
		faderHandle: 'gain-handle',

		//control nodes
		main: 'main',
		previous: 'previous',
		next: 'next',
		progress: 'progress',
		fader: 'fader',
		gain: 'gain',

		//symbol nodes
		play: 'play',
		pause: 'pause',
		gainZero: 'gain-zero',
		gainOne: 'gain-one',
		gainTwo: 'gain-two'
	},

	//interface objects
	loader: undefined,
	player: undefined,
	nodes: {},
	symbols: {},

	//dynamic event handlers
	handler: {
		dragEvent: null,
		stepEvent: null,
		setEvent: null
	},

	//status monitors
	monitor: {
		fetch: null,
		time: null,
		gain: null,
	},

	//digital signal processing endpoints
	dsp: {
		context: undefined,
		buffers: [],
		source: null,
		gain: undefined,
	},

	//operational data
	data: {
		tracks: 0,
		buffer: {
			track: 0,
			length: 0,
			startTime: 0,
			elapsedTime: 0,
		},
		metadata: {
			title: '',
			artist: '',
		},
		gain: {
			current: 1,
			last: 0,
		}
	},

	status: {
		initial: true,
		unlocked: false,
		interactable: false,
		targetBuffer: 0,
		targetSlider: null,
		dsp: 'idle',
		buffer: 'pending',
		changingTrack: false,
		stepping: false,
		observing: false,
		isTouchEvent: false,
	}
};

export default db;