// Description: Clase que permite obtener los videos más populares de YouTube y mostrarlos en pantalla.
// La clase YouTubeVideoQueue tiene un constructor que recibe una clave de API de YouTube y crea una instancia de la clase Queue.
import { Queue } from './Queue.js';

export class YouTubeVideoQueue {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.videoQueue = new Queue();
    }

    async fetchPopularVideos() {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&key=${this.apiKey}`
            );

            if (!response.ok) {
                throw new Error('Error en la petición a la API');
            }

            const data = await response.json();

            this.videoQueue.clear();

            data.items.forEach(video => {
                this.videoQueue.enqueue({
                    id: video.id,
                    title: video.snippet.title,
                    channelTitle: video.snippet.channelTitle,
                    viewCount: video.statistics.viewCount,
                    thumbnail: video.snippet.thumbnails.default.url
                });
            });

            return this.videoQueue;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    displayVideos() {
        const container = document.getElementById('videos-container');
        container.innerHTML = '';

        const tempQueue = new Queue();
        while (!this.videoQueue.isEmpty()) {
            const video = this.videoQueue.dequeue();
            tempQueue.enqueue(video);

            const videoElement = document.createElement('div');
            videoElement.className = 'video-item';
            videoElement.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
                <p>Canal: ${video.channelTitle}</p>
                <p>Vistas: ${parseInt(video.viewCount).toLocaleString()}</p>
                <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
                    Ver video
                </a>
            `;
            container.appendChild(videoElement);
        }

        this.videoQueue = tempQueue;
    }
}