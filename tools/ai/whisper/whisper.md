# Whisper en local (offline)

### Transcribir audio a texto usando Whisper de OpenAI

OpenAI liberó el modelo Whisper para que puedas usarlo gratis y sin conexión, solo necesitas Python instalado.

🧱 Requisitos:

- Python 3.8 o superior
- FFmpeg instalado (para procesar audio)
- Git (opcional si instalas desde el repo)

```sh
pip install git+https://github.com/openai/whisper.git
pip install torch  # o pip install torch torchvision torchaudio

ffmpeg -i video.mp4 -t 16 -c copy output.mp4

ffmpeg -i video.mp4 audio.mp3

# 🚀 Usar Whisper (gratis y local)
whisper video.mp4 --model medium --output_format srt --language Spanish
whisper audio.mp3 --model medium --output_format srt --language Spanish
whisper video.mp3 --model small --output_format srt --language Spanish
whisper audio.mp3 --model medium --output_format srt

```
