#!/usr/bin/env python3
"""Fix remaining old URLs in markdown files"""
import re
from pathlib import Path

URL_MAPPINGS = {
    'how-to-create-your-first-payment-form-in-a-minute-and-accept-payments-with-paymattic': 'create-payment-form',
    'how-to-use-the-product-fields': 'use-product-fields',
}

docs_dir = Path('docs')

for file_path in docs_dir.rglob('*.md'):
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Fix relative links with category paths
    for old, new in URL_MAPPINGS.items():
        # Pattern: /category/old-url or /category/old-url.md
        pattern = rf'(\[([^\]]+)\]\(/[^/]+/{re.escape(old)}(\.md)?(#[^\)]+)?\))'
        def replace(m):
            anchor = m.group(4) if m.group(4) else ''
            return f'[{m.group(2)}](/{new}{anchor})'
        content = re.sub(pattern, replace, content)
    
    if content != original:
        file_path.write_text(content, encoding='utf-8')
        print(f"Updated: {file_path}")

print("Done fixing remaining links")

