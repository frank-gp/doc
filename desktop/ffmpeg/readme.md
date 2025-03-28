## Download FFMPEG

https://www.ffmpeg.org/download.html

## Download FFMPEG install-ffmpeg.zip

https://mega.nz/folder/rPIRxbjJ#b2LbcriqBfiRnXTpDz5Qpg/folder/bCpF3SjJ

## FFMPEG Commands

```sh
ffmpeg -i input.mp4 -ab 256k -vn -c:a copy output.m4a


ffmpeg -i 01.jpg -c:v libwebp -lossless 1 output.webp
ffmpeg -i 01.jpg -c:v libwebp output.webp


ffmpeg -i input.mp4 output.mp3
```

```sh
@REM ========== Documentation... ==========
@REM -vn === no video
@REM -s === size (ratio)
@REM -ss === start sequen
@REM -c:a === codex audio
@REM -c:v === codex video
@REM -r === ratio
@REM -b:v 1M === bitrate video

@REM ========== Documentation. ==========

@REM ========== Basic ==========

@REM /// image and audio to video
ffmpeg -i image.png -i audio.mp3 output.mp4

@REM /// convert video to audio
ffmpeg -i video.mp4 to audio.mp3

@REM /// convert image & audio to video
ffmpeg -loop 1 -framerate 1 -i img.png -i audio.mp3 -shortest output.mp4

@REM /// Concatenate mp4 files using FFmpeg
ffmpeg -f concat -safe 0 -i fileList.txt -c copy mergedVideo.mp4
:: create fileList.txt with list of videos...
:: file video-monkey.mp4
:: file video-lights.mp4

@REM /// How to concatenate two MP4 files using FFmpeg?
ffmpeg -i video-monkey.mp4 -c copy intermediate1.ts
ffmpeg -i video-lights.mp4 -c copy intermediate2.ts
ffmpeg -i "concat:intermediate1.ts|intermediate2.ts" -c copy output3.mp4




@REM /// normalize audio
ffmpeg -i audio.wav -filter:a "volume=0.5" audio.mp3
ffmpeg -i audio.wav -af "volume=3dB" audio-3db.mp3
@REM ========== normalize video ==========
ffmpeg -i video.mp4 -af "volume=5dB" -c:v copy -c:a aac -b:a 192k output.mp4
ffmpeg -i audio.wav -filter:a "dynaudnorm=p=0.9:s=5" output4.mp3




<!-- ========== Example ========== -->

ffmpeg -framerate 1 -pattern_type glob -i 'image.jpg' \
  -i audio.mp3 -c:a copy -shortest -c:v libx264 -pix_fmt yuv420p video.mp4


ffmpeg -framerate 1 -f image2 -i ./image.jpg -i audio.mp3 output.mp4
ffmpeg -framerate 1 -f image2 -i image.jpg -i 5.mp3 output.mp4

ffmpeg -framerate 30 -pattern_type glob -i 'image.jpg' \
  -c:v libx264 -pix_fmt yuv420p out.mp4

ffmpeg -framerate 1 -i image.jpg -i A20_01_Pro.mp3 output.mp4
ffmpeg -framerate 1 -i image.jpg -i 'audioaaa.mp3' -t 00:03:00 output.mp4
ffmpeg -i image.jpg -t 00:03:00 image.mp4

ffmpeg -i image.jpg -i audio.mp3 -b:v 2M -b:a 192k output.mp4

ffmpeg -i audio5.mp3 -i image.jpg output.mp4
ffmpeg -i pro.mp3 -i image.jpg output.mp4

ffmpeg -i music.mp4 output.webm
ffmpeg -i image.jpg image.webp
ffmpeg -i music.mp4 music.mp3


ffmpeg -filter_complex ddagrab=output_idx=1:framerate=60, hwdownload, format=bgra -c:v h264_nven c -crf 18 output5.mp4

ffmpeg -i 'elizabeths-001.jpg' 'image1.webp'

ffplay output.mp4
ffprobe output.mp4

ffmpeg -i image.jpg -i audio5.mp3 -vcodec libx264 -acodec aac output.mp4

ffmpeg -r 29.97 -i image.jpg -i audio5.mp3 -c:v hevc output.mp4







@REM ========== developer ==========

ffmpeg -i output.m4a -i image.jpg output.webm
ffmpeg -i output.m4a -i image.jpg output.mkv

ffmpeg -i output.mp4 output.mkv


ffmpeg -i output.mkv -c:v vp9 -c:a libvorbis output.mp4
ffmpeg -i audio5.mp3 -i image.jpg -c:v vp9 -c:a libvorbis output.mp4

ffmpeg -i audio5.mp3 -c:a ac3 -b:a 160k output.m4a

ffmpeg -i audio5.mp3 -i image.jpg -c:a copy -c:v copy output.mkv
ffmpeg -i audio5.mp3 -i image.jpg -c:a copy -c:v copy output.mp4
ffmpeg -i audio5.mp3 -i image.jpg -c:v copy output.mkv
ffmpeg -i audio5.mp3 -i image.jpg -c:v copy output.mp4

ffmpeg -i audio5.mp3 -i image.jpg -c:v vp9  -c:a copy output.webm
ffmpeg -i audio5.mp3 -i image.jpg -c:v vp9  -c:a libvorbis -b:a 192k output.webm
ffmpeg -i audio5.mp3 -i image.jpg -c:v copy  -c:a libvorbis -b:a 192k output.mkv
ffmpeg -i audio5.mp3 -i image.jpg -c:v vp9  -c:a libvorbis -b:a 192k output.mp4
ffmpeg -i audio5.mp3 -i image.jpg -c:a copy -b:a 192k -c:v libx264 -b:v 1M output.mp4
ffmpeg -i audio5.mp3 -i image.jpg -c:a copy -b:a 192k -c:v libx264 -b:v 1M -r 30 -s 848x480 output.mp4
ffmpeg -i audio5.mp3 -i image.jpg -c:a libvorbis -c:v libx264 -r 24 output.mp4
ffmpeg -i music.mp3 -i image.jpg -s 720x720 output.mp4
ffmpeg -i music.mp3 -i image.jpg -ss 00:00:00 -t 00:04:00 output.mp4
ffmpeg -i monkey.mp4 -ss 00:00:00 -t 00:00:01 output.mp4
ffmpeg -i music.mp3 -i image.jpg -ss 00:00:00 output.mp4
ffmpeg -i music2.mp4 -vn audio.mp3
ffmpeg -i audio.mp3 -i screen.png video.mp4

@REM ffmpeg -i screen.png -i music1.mp3 output.mp4

ffmpeg -r 1 -i screen%04d.png -pix_fmt yuv420p -t 00:01:00 output.mp4
ffmpeg -i music1.mp3 -r 1 -i screen%04d.png -pix_fmt yuv420p -t 00:02:00 output.mp4

ffmpeg -loop 1 -f image2 -i screen0001.png -i music1.mp3 output.mp4

ffmpeg -loop 1 -f image2 -i screen0001.png -i music1.mp3 -vf crop=in_w:in_w*9/16,scale=1920:1080,fps=fps=30 -pix_fmt yuv420p -vcodec libx264 -shortest output.mp4

@REM ffmpeg -loop 1 -f image2 -i screen0001.png -i wordmagic5.mp3 -vf crop=in_w:in_w*9/16,scale=1920:1080,fps=fps=30 -pix_fmt yuv420p -vcodec libx264 -shortest output.mp4

ffmpeg -loop 1 -f image2 -i screen0001.png -i wordmagic5.mp3 -vf crop=in_w:in_w*9/16,scale=1920:1080,fps=fps=1 -pix_fmt yuv420p -vcodec libx264 -shortest output.mp4

@REM ffmpeg -loop 1 -i screen0001.png -i wordmagic2.mp3 -vf fps=fps=1 -shortest output.mp4

ffmpeg -loop 1 -framerate 1 -i screen0001.png -i wordmagic2.mp3 -t 130  output.mp4
ffmpeg -loop 1 -framerate 1 -i screen0001.png -i wordmagic2.mp3 -shortest output.mp4
@REM ffmpeg -loop 1 -framerate 1 -i screen0001.png -i dulceysabrosa.mp3 -shortest dulceysabrosa.mp4


@REM ffmpeg -re -stream_loop -1 -i screen0001.png -i wordmagic2.mp3 -shortest output.mp4
ffmpeg -stream_loop -1 -i screen0001.png -i wordmagic2.mp3 -shortest output.mp4


ffmpeg -framerate 1 -i screen0001.png -i wordmagic2.mp3 -shortest output6.mp4




@REM ========== Add Subtitles to a Video ==========
@REM https://fireship.io/lessons/ffmpeg-useful-techniques/
@REM https://shotstack.io/learn/use-ffmpeg-to-convert-images-to-video/
ffmpeg -i in.srt smart.ass
ffmpeg -i in.mp4 -vf ass=smart.ass out.mp4



@REM ========== -filter ==========
ffmpeg -i monkey.mp4 -filter:a "volume=0.5" monkey-volumen.mp4
ffmpeg -i monkey.mp4 -filter:v "crop=1280:720:0:0" -t 00:01:00 monkey.mkv



@REM ========== reemplace audio... ==========
ffmpeg -i music2.mp4 -i proverb.mp3 -map 0:v:0 -map 1:a:0 -c:v copy video.mp4
ffmpeg -i monkey.mp4 -i audio5.mp3 -map 0:v:0 -map 1:a:0 -c:v copy video.mp4
@REM ========== reemplace audio. ==========

@REM ========== watermark ==========
ffmpeg -i monkey.mp4 -i monkey.jpg -filter_complex "overlay=50:50" output.mkv


@REM ========== Documentation... ==========
@REM -vn === no video
@REM -s === size (ratio)
@REM -ss === start sequen
@REM -c:a === codex audio
@REM -c:v === codex video
@REM -r === ratio
@REM -b:v 1M === bitrate video

@REM ========== Documentation. ==========


ffmpeg -i image.jpg -i music.mp3 output.mp4

```
