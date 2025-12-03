ffmpeg -i input_video.mp4 -af "acompressor=threshold=0.02:ratio=5:attack=200:release=1000" output_video.mp4
pause