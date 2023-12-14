ffmpeg -i input.mp4 output-default.mp4
ffmpeg -i input.mp4 -c:v libx264 output_libx264.mp4
ffmpeg -i input.mp4 -c:v libx265 output-libx265.mp4
ffmpeg -i input.mp4 -c:v libvpx-vp9 output-libvpx-vp9.webm

ffmpeg -i input.mp4 -c:v libx265 -crf 25 output-libx265.mp4
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -strict -2 output.mp4


pause