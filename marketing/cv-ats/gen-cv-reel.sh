#!/bin/bash
# Reel CV-ATS: pasa las 6 historias como slideshow con fundidos (sin audio;
# añade la música desde la app de Instagram, como con los otros reels).
# Uso: bash marketing/cv-ats/gen-cv-reel.sh   (desde la raíz del repo, requiere ffmpeg)
set -e
DIR="marketing/cv-ats/salida"
mkdir -p "$DIR/04-reels"

make_reel () {
  lang=$1
  H="$DIR/02-historias/$lang"
  frames=$(ls "$H"/story-*.png | sort | head -5)
  oferta="$H/story-oferta.png"
  inputs=""
  for f in $frames $oferta; do inputs="$inputs -loop 1 -t 3 -i $f"; done
  ffmpeg -y $inputs -filter_complex "\
[0][1]xfade=transition=fade:duration=0.5:offset=2.5[v1];\
[v1][2]xfade=transition=fade:duration=0.5:offset=5.0[v2];\
[v2][3]xfade=transition=fade:duration=0.5:offset=7.5[v3];\
[v3][4]xfade=transition=fade:duration=0.5:offset=10.0[v4];\
[v4][5]xfade=transition=fade:duration=0.5:offset=12.5,format=yuv420p[v]" \
    -map "[v]" -r 30 -c:v libx264 -preset veryfast -crf 20 "$DIR/04-reels/reel-cv-$lang.mp4"
  echo "OK reel $lang"
}

make_reel es
make_reel en
