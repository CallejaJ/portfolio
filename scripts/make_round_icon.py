import os
from PIL import Image, ImageDraw

def make_round(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Create a circular mask
        mask = Image.new("L", img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
        
        # Apply the mask
        output = Image.new("RGBA", img.size, (0, 0, 0, 0))
        output.paste(img, (0, 0), mask=mask)
        
        # Resize to standard favicon size (e.g., 512x512) for better quality
        # if the original is very large, but let's keep original size for now.
        
        output.save(output_path, "PNG")
        print(f"Successfully created round icon at {output_path}")
    except Exception as e:
        print(f"Error creating round icon: {e}")

if __name__ == "__main__":
    current_dir = os.getcwd()
    input_file = os.path.join(current_dir, "public", "images", "profile.jpg")
    output_file = os.path.join(current_dir, "public", "images", "profile-round.png")
    
    if os.path.exists(input_file):
        make_round(input_file, output_file)
    else:
        print(f"Input file not found: {input_file}")
