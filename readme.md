# Audio Player
*Audio Player, Version 2.0 | Authored by Nikolas Jeleniauskas*

-----
The following audio player it is built entirely with the Audio API and is written in ES6+ (async/await, modules, etc…). It uses no dependencies.



# Usage
When placing the audio container element in your html template, make sure that the container has `aria-live=polite` so that it can properly announce its change from pending to ready state.



To properly set up the player you will need to add a link to the core.css file (critical CSS), presentational CSS (see below) and a script module at the end of your html file. This module is where the modules are imported, the playlist is defined, and the necessary arguments for the player set: These arguments are the container class for the player, one of three UI configurations (`'minimal', 'basic', 'full'`), and whether the player will loop or not (`true, false`). Beyond this, you may also define a new player template if you wish, otherwise it will default to the first one.



```javascript
<script type="module">
	import AudioPlayer from './audio-player.js';

	const playlist = [
		{
			'title': ',
			'artist': '',
			'src': ''
		}
	];

	const args = {
		container: '',
		playlist: playlist,
		configuration: '',
		template: '',
		loop: false,
	};

	let audioPlayer = new AudioPlayer(args);
</script>
```



Beyond the core CSS, the player will need additional CSS to further control how it looks. There is a default file that may be used, or if you wish, you may ignore this and write your own styles to suit the project requirements. See the template files for the list of classes that can be targeted.



# Operation
When operating the player, the following keys may be used for various controls:
- Play/Pause: `Spacebar`
- Track Controls: `MediaKeyPrevious`, `MediaKeyNext`
- Progress: `ArrowLeft` `ArrowRight`
- Gain Slider: `ArrowLeft` and `ArrowRight`, or `ArrowUp` and `ArrowDown`
- Gain Toggle: `M`



# General Notes
**Module Process**
Throughout the modules, data processing is broken into 3 stages, setting data, updating the UI, and processing the data as audio changes. The functions written follow this taxonomy so that the scope of the function is clear. Owing to this, some functions will look like they are coming from a state, but are instead going to the defined state.



**AudioBufferSourceNode**
An `AudioBufferSourceNode` can only be started/stopped once. Therefore, any start or restart of a buffer needs to initiate an new source node to operate correctly. Essentially, they need to be treated like temporary instances, rather than a dedicated audio buffer (akin to other music programming environments).



**Gain Changes**
When setting gain changes is is sometimes necessary to explicitly set an intitial value with `SetValueAtTime` before using `exponentialRampToValueAtTime` to the new value to avoid errant audio clicks.



**Drag Operations**
It is necessary to clear any document selections when any drag operation is underway. If there is a selection and you attempt a drag operation on a slider, it will drag the current selection, and ignore user events (specifically mouseup).



**Accessiblity**
While not extensively tested, the player should be fully accessible to users (aria-labels, keyboard events, etc…).



**Webkit/iOS/Safari**
The current implementation of this player is slightly suboptimal as the iOS implementation of the Audio API does not adhere to the W3C standard. As such, there are some very buggy behaviors that exists that needed to be fixed, such as unlocking audio processing at the start of the player.



# Future Issues to Resolve
1. A visual indicator that a track is decoding, or in the process of downloading if landed on is needed.

2. At present, changing gain rapidly induces zipper noise. This may be an API-level problem, but should be eventually investigated.