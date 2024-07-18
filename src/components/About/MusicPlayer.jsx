import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../../contexts/languageHooks';

const musicsData = [
    { title: "Surround Sound (feat. 21 Savage And Baby Tate)", artist: "J.I.D", id: 1 },
    { title: "Les masques", artist: "Joysad", id: 2 },
    { title: "Kill Bill", artist: "SZA", id: 3 },
    { title: "Search And Rescue", artist: "Drake", id: 4 },
    { title: "Save Your Tears", artist: "The Weeknd", id: 5 },
    { title: "Come and Get Your Love", artist: "Redbone", id: 6 }
];

const formatFileName = (title) => {
    return title
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-');
};

const MusicPlayer = () => {
    const { t } = useLanguage();
    const [currentMusicIndex, setCurrentMusicIndex] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalDuration, setTotalDuration] = useState(0);
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const musicPlayer = useRef(null);
    const progressBarRef = useRef(null);

    const currentMusic = musicsData[currentMusicIndex - 1];

    const populateUI = useCallback((music) => {
        if (musicPlayer.current) {
            const formattedFileName = formatFileName(music.title);
            musicPlayer.current.src = `./ressources/music/${formattedFileName}.mp3`;
            musicPlayer.current.load();
        }
    }, []);

    useEffect(() => {
        populateUI(currentMusic);
    }, [currentMusic, populateUI]);

    useEffect(() => {
        if (isPlaying) {
            musicPlayer.current.play();
        } else {
            musicPlayer.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying) {
            musicPlayer.current.play();
        }
    }, [currentMusic, isPlaying]);

    const handlePlayPause = () => {
        setIsPlaying((prevIsPlaying) => {
            if (prevIsPlaying) {
                musicPlayer.current.pause();
            } else {
                musicPlayer.current.play();
            }
            return !prevIsPlaying;
        });
    };

    const formatValue = (val) => {
        const currentMin = Math.trunc(val / 60);
        let currentSec = Math.trunc(val % 60);
        if (currentSec < 10) {
            currentSec = `0${currentSec}`;
        }
        return `${currentMin}:${currentSec}`;
    };

    const updateProgress = () => {
        if (!isDragging) {
            setCurrentTime(musicPlayer.current.currentTime);
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setProgress(e);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setProgress(e);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const setProgress = (e) => {
        const rect = progressBarRef.current.getBoundingClientRect();
        const width = rect.width;
        const x = e.clientX - rect.left;
        const newTime = (x / width) * totalDuration;
        musicPlayer.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const changeSong = (direction) => {
        if (shuffle) {
            playAShuffledSong();
            return;
        }

        setCurrentMusicIndex((prevIndex) => {
            if (direction === 'next') {
                return (prevIndex % musicsData.length) + 1;
            } else {
                return prevIndex === 1 ? musicsData.length : prevIndex - 1;
            }
        });
    };

    const playAShuffledSong = () => {
        const musicsWithoutCurrentSong = musicsData.filter((el) => el.id !== currentMusicIndex);
        const randomMusic = musicsWithoutCurrentSong[Math.floor(Math.random() * musicsWithoutCurrentSong.length)];
        setCurrentMusicIndex(randomMusic.id);
    };

    const handleSongEnd = () => {
        if (repeat) {
            musicPlayer.current.currentTime = 0;
            musicPlayer.current.play();
        } else {
            changeSong('next');
        }
    };

    const handlePrevClick = () => {
        if (currentTime > 2) {
            musicPlayer.current.currentTime = 0;
            setCurrentTime(0);
        } else {
            changeSong('prev');
        }
    };

    return (
        <main className="max-w-md mx-auto mt-10">
            <p className="ml-1 mb-2 font-bold text-2xl">{t.playlistText}</p>
            <div className="bg-gradient-to-br from-[#0D0C0F] to-[#29343A] rounded-xl shadow-md overflow-hidden">
                <div className="relative flex">
                    <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: `url(./ressources/thumbs/${formatFileName(currentMusic.title)}.webp)` }} role="img" aria-label={`Album cover of ${currentMusic.title} by ${currentMusic.artist}`}></div>
                    <div className="md:flex-shrink-0 hidden md:block">
                        <img className="w-36 object-cover h-full" src={`./ressources/thumbs/${formatFileName(currentMusic.title)}.webp`} alt={`Album cover of ${currentMusic.title} by ${currentMusic.artist}`} />
                    </div>
                    <div className="relative px-4 py-1 md:p-4 mx-auto w-full bg-black bg-opacity-75 md:bg-opacity-0">
                        <h1 className="block mt-1 text-sm leading-tight font-medium text-white">{currentMusic.title}</h1>
                        <p className="mt-2 text-sm text-gray-500">{currentMusic.artist}</p>
                        <audio ref={musicPlayer} onLoadedMetadata={() => setTotalDuration(musicPlayer.current.duration)} onTimeUpdate={updateProgress} onEnded={handleSongEnd} aria-label="Music player controls"></audio>
                        <div className="relative mt-4">
                            <div
                                className="bg-gray-700 w-full h-1 rounded cursor-pointer"
                                ref={progressBarRef}
                                onMouseDown={handleMouseDown}
                                aria-label="Progress bar"
                                role="progressbar"
                                aria-valuenow={currentTime}
                                aria-valuemin={0}
                                aria-valuemax={totalDuration}
                            >
                                <div className="bg-blue-500 h-1 rounded" style={{ transform: `scaleX(${currentTime / totalDuration})`, transformOrigin: 'left' }}></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-2" aria-live="polite">
                                <span>{formatValue(currentTime)}</span>
                                <span>{formatValue(totalDuration)}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="shuffle" onClick={() => setShuffle(!shuffle)} aria-label={`Shuffle ${shuffle ? 'on' : 'off'}`}>
                                <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.25C0 5.05109 0.0790176 4.86032 0.21967 4.71967C0.360322 4.57902 0.551088 4.5 0.75 4.5H1.5C4.803 4.5 7.2405 6.36 8.811 8.127C9.546 8.955 10.1085 9.78 10.5 10.425C10.89 9.78 11.454 8.955 12.189 8.127C13.7595 6.36 16.197 4.5 19.5 4.5V6C16.803 6 14.7405 7.515 13.311 9.123C12.538 9.9985 11.8742 10.9646 11.334 12C11.8737 13.0354 12.5371 14.0014 13.3095 14.877C14.742 16.485 16.806 18 19.5 18V19.5C16.197 19.5 13.7595 17.64 12.189 15.873C11.5583 15.1592 10.993 14.3901 10.5 13.575C10.11 14.22 9.546 15.045 8.811 15.873C7.2405 17.64 4.803 19.5 1.5 19.5H0.75C0.551088 19.5 0.360322 19.421 0.21967 19.2803C0.0790176 19.1397 0 18.9489 0 18.75C0 18.5511 0.0790176 18.3603 0.21967 18.2197C0.360322 18.079 0.551088 18 0.75 18H1.5C4.197 18 6.2595 16.485 7.689 14.877C8.46195 14.0015 9.1258 13.0354 9.666 12C9.12627 10.9646 8.46292 9.99858 7.6905 9.123C6.258 7.515 4.194 6 1.5 6H0.75C0.551088 6 0.360322 5.92098 0.21967 5.78033C0.0790176 5.63968 0 5.44891 0 5.25Z" fill={shuffle ? "#FFFFFF" : "#545454"} />
                                    <path d="M19.5 8.19899V2.30099C19.5 2.22974 19.5204 2.15996 19.5586 2.09984C19.5969 2.03972 19.6514 1.99174 19.716 1.96153C19.7805 1.93131 19.8523 1.9201 19.923 1.92921C19.9936 1.93833 20.0602 1.96739 20.115 2.01299L23.655 4.96199C23.835 5.11199 23.835 5.38799 23.655 5.53799L20.115 8.48699C20.0602 8.5326 19.9936 8.56166 19.923 8.57077C19.8523 8.57989 19.7805 8.56868 19.716 8.53846C19.6514 8.50824 19.5969 8.46026 19.5586 8.40014C19.5204 8.34002 19.5 8.27025 19.5 8.19899ZM19.5 21.699V15.801C19.5 15.7297 19.5204 15.66 19.5586 15.5998C19.5969 15.5397 19.6514 15.4917 19.716 15.4615C19.7805 15.4313 19.8523 15.4201 19.923 15.4292C19.9936 15.4383 20.0602 15.4674 20.115 15.513L23.655 18.462C23.835 18.612 23.835 18.888 23.655 19.038L20.115 21.987C20.0602 22.0326 19.9936 22.0617 19.923 22.0708C19.8523 22.0799 19.7805 22.0687 19.716 22.0385C19.6514 22.0082 19.5969 21.9603 19.5586 21.9001C19.5204 21.84 19.5 21.7702 19.5 21.699Z" fill={shuffle ? "#FFFFFF" : "#545454"} />
                                </svg>
                            </button>
                            
                            <div className="flex items-center justify-center flex-grow space-x-4 pb-2 md:pb-0">
                                <button className="w-6 h-6 md:w-6 md:h-6" onClick={handlePrevClick} aria-label="Previous song">
                                    <img className='' src="./ressources/icons/prev-icon.svg" alt="Previous song" />
                                </button>
                                <button className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#81F8FA] to-[#ADFBFD] rounded-full p-1 md:p-2" onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
                                    <img className='' src={`./ressources/icons/${isPlaying ? 'pause' : 'play'}-icon.svg`} alt={isPlaying ? "Pause" : "Play"} />
                                </button>
                                <button className="w-6 h-6 md:w-6 md:h-6" onClick={() => changeSong('next')} aria-label="Next song">
                                    <img className='' src="./ressources/icons/next-icon.svg" alt="Next song" />
                                </button>
                            </div>
                            <button className="repeat" onClick={() => setRepeat(!repeat)} aria-label={`Repeat ${repeat ? 'on' : 'off'}`}>
                                <svg className="w-5 h-5" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke={repeat ? "#FFFFFF" : "#545454"} strokeLinecap="round" strokeWidth="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MusicPlayer;
