#!/bin/zsh

# Requires ImageMagick to be installed
# brew install imagemagick
# Usage
# aws-vault exec livkndt -- sh image_upload.sh ~/Desktop/resize/C6DF82D5-4AC7-4523-A8C3-2592495AEBD8.jpeg knit_hero 456 456
#==============================================================================

# Function to resize and save an image
resize_and_save() {
    local image_path="$1"
    local name="$2"
    local max_height="$3"
    local max_width="$4"
    local suffix="$5"

    # Extract file extension
    extension="${image_path##*.}"

    # Create output filename
    output_file="${name}${suffix}.${extension}"

    # Resize and save the image
    convert "$image_path" -resize ${max_width}x${max_height} "$output_file"

    echo "Saved: $output_file"

    # Convert the image to WebP format
    webp_file="${output_file%.*}.webp"
    cwebp "$output_file" -o "$webp_file"

    echo "Converted to WebP: $webp_file"

    # Send them up to s3
    aws s3 cp "$output_file" s3://livkndt-personal-website/posts/"$output_file"
    aws s3 cp "$webp_file" s3://livkndt-personal-website/posts/"$webp_file"
}

# Check if at least four arguments were provided
if [ $# -lt 2 ]; then
    echo "Usage: $0 <image_path> <name> <max_width> <max_height>"
    exit 1
fi

# Get the command-line arguments
image_path="$1"
name="$2"
max_height="$3"
max_width="$4"

# Check if the file exists at the specified path
if [ -f "$image_path" ]; then
    echo "Image path: $image_path"
    echo "Name: $name"
    echo "Max Height: $max_height"
    echo "Max Width: $max_width"

    # Resize and save the 100% image
    resize_and_save "$image_path" "$name" "$max_height" "$max_width" "@5x"

    # Resize and save the other images
    resize_and_save "$image_path" "$name" "$((max_height * 80 / 100))" "$((max_width * 80 / 100))" "@4x"
    resize_and_save "$image_path" "$name" "$((max_height * 60 / 100))" "$((max_width * 60 / 100))" "@3x"
    resize_and_save "$image_path" "$name" "$((max_height * 40 / 100))" "$((max_width * 40 / 100))" "@2x"
    resize_and_save "$image_path" "$name" "$((max_height * 20 / 100))" "$((max_width * 20 / 100))" "@1x"
else
    echo "Error: The specified file does not exist."
fi
