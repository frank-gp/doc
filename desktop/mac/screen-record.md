```sh
# Grabar desde Terminal (ffmpeg)
brew install ffmpeg

# 2️⃣ Ver dispositivos disponibles
ffmpeg -f avfoundation -list_devices true -i ""

# Grabar pantalla completa
ffmpeg -f avfoundation -framerate 30 -i "0" ~/Desktop/pantalla.mp4

# Grabación + micrófono
ffmpeg -f avfoundation -framerate 30 -i "0:0" ~/Desktop/video_con_audio.mp4

# QuickTime Player (visual)
# open -a "QuickTime Player"
# File → New Screen Recording
# ❗ Permisos (importante)
# System Settings → Privacy & Security → Screen Recording

scp -r m1@62.210.166.227:/Users/m1/Desktop /c/Users/Frank/Desktop/
scp m1@62.210.166.227:/Users/m1/Desktop/pantalla.mp4 /c/Users/Frank/Desktop/


```

# Windows

```sh
# ================================
# 🎥 GRABAR PANTALLA EN WINDOWS 11
# ================================

# 1️⃣ Instalar ffmpeg (elige UNA opción)

# 👉 Con chocolatey
choco install ffmpeg

# 👉 O descargar binarios:
# https://ffmpeg.org/download.html
# (agregar ffmpeg al PATH)


# 2️⃣ Ver dispositivos disponibles (video + audio)
ffmpeg -list_devices true -f dshow -i dummy


# 3️⃣ Grabar PANTALLA COMPLETA
ffmpeg -f gdigrab -framerate 30 -i desktop pantalla.mp4
ffmpeg -f gdigrab -framerate 30 -i desktop /c/Users/Frank/Desktop/pantalla.mp4



# ✅ Cómo saber exactamente coordenadas y tamaño
ffmpeg -f gdigrab -i desktop

# 🔹 Monitor principal
ffmpeg -f gdigrab -framerate 30 -offset_x 0 -offset_y 0 -video_size 1920x1200 \
-i desktop /c/Users/Frank/Desktop/monitor_derecho.mp4

# Monitor secundario
ffmpeg -f gdigrab -framerate 30 -offset_x -1920 -offset_y 0 -video_size 1920x1200 \
-i desktop /c/Users/Frank/Desktop/monitor_izquierdo.mp4



# 4️⃣ Grabar pantalla + micrófono
ffmpeg \
-f gdigrab -framerate 30 -offset_x 0 -video_size 1920x1080 -i desktop \
-f dshow -i audio="Krisp Microphone (Krisp Audio)" \
-c:v libx264 -preset ultrafast \
-c:a aac \
/c/Users/Frank/Desktop/grabacion_con_audio.mp4



# 6️⃣ Detener grabación
# CTRL + C
```
