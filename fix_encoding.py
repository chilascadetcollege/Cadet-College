import sys

def fix_mojibake(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The string seems to have been decoded as cp1252 instead of utf-8 at some point
    # We will encode it to cp1252 and decode as utf-8
    
    fixed_content = ""
    for char in content:
        try:
            # Try to encode to cp1252 and decode to utf-8
            cp1252_bytes = char.encode('cp1252')
            fixed_content += cp1252_bytes.decode('utf-8')
        except (UnicodeEncodeError, UnicodeDecodeError):
            # If it fails, keep the original character
            fixed_content += char

    with open(file_path + ".fixed.js", 'w', encoding='utf-8') as f:
        f.write(fixed_content)

    print("Fixed file saved as script.js.fixed.js")

if __name__ == "__main__":
    fix_mojibake("script.js")
