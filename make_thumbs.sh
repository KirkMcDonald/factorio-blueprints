#!/bin/bash
for im in $(ls images); do
    if [ ! -f thumbs/$im ]; then
        convert images/$im -resize 80x80\> thumbs/$im
    fi
done
