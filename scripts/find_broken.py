import re
import sys

path = 'app/ui/page.tsx'

with open(path, 'rb') as f:
    raw = f.read()

# Find patterns like {name</tag> that are missing the closing }
pattern = re.compile(rb'\{([A-Za-z]+(?:\.[A-Za-z]+)?)<(/[A-Za-z]+>)')
matches = list(pattern.finditer(raw))
for m in matches:
    s = m.group().decode('utf-8', 'replace')
    print(m.start(), repr(s))
