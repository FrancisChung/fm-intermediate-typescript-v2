// Nullish Coalescing

function setVolume(v: number) : void {}

type PlayerConfig = {
    volume?: 0 | 25 | 50 | 75 | 100
}

function initializePlayer(config: PlayerConfig) : void {
    // const vol = typeof config.volume === 'undefined' ? 50 : config.volume
    const vol = config.volume ?? 50
    setVolume(vol)
}

export default {}