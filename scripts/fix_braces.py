import re

path = 'app/ui/page.tsx'

with open(path, 'rb') as f:
    raw = f.read()

# Map of broken patterns to their fixes
fixes = [
    (b'{label</>', b'{label</p>'),
    (b'{children</>', b'{children</div>'),
    (b'{item</>', b'{item</span>'),
    (b'{certificate</>', b'{certificate</p>'),
    (b'{repo</>', b'{repo</span>'),
    (b'{chip</SketchChip>', b'{chip</SketchChip>'),
    (b'{item.year</p>', b'{item.year</p>'),
    (b'{blog</SketchHeading>', b'{blog</SketchHeading>'),
]

for old, new in fixes:
    if old in raw:
        raw = raw.replace(old, new)
        print('Fixed:', old.decode())
    else:
        print('NOT FOUND:', old.decode())

with open(path, 'wb') as f:
    f.write(raw)
print('Done')
