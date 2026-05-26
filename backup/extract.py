import re

with open('/Users/ted/Documents/dek/index.html', 'r') as f:
    content = f.read()

style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
if style_match:
    with open('/Users/ted/Documents/dek/styles.css', 'w') as f:
        f.write(style_match.group(1).strip() + '\n')

script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
if script_match:
    with open('/Users/ted/Documents/dek/scripts.js', 'w') as f:
        f.write(script_match.group(1).strip() + '\n')

new_content = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="styles.css">', content, flags=re.DOTALL)
new_content = re.sub(r'<script>.*?</script>', '<script src="scripts.js"></script>', new_content, flags=re.DOTALL)

with open('/Users/ted/Documents/dek/index.html', 'w') as f:
    f.write(new_content)

print("Extraction complete.")
