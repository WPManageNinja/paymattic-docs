# WordPress to VitePress Migration Instructions

## Project Requirements

### URL and File Structure
1. **File Organization**
   - Files will be organized in category folders: `/docs/{category-name}/{doc-name}.md`
   - Example: `/docs/getting-started-with-paymattic/paymattic-introduction.md`
   - Files are created based on WordPress `<link>` tags
   - Example: If `<link>https://paymattic.com/docs/paymattic-introduction/</link>`, create file as above

2. **URL Structure**
   - Must maintain flat URL structure (no category nesting in URLs)
   - ✅ Correct URL: `https://domain.com/docs/paymattic-introduction`
   - ❌ Incorrect URL: `https://domain.com/docs/getting-started-with-paymattic/paymattic-introduction`
   - Files are organized in category folders but URLs remain flat

### Content Conversion
1. **HTML to Markdown Conversion**
   - Convert all HTML content to clean Markdown format
   - No HTML tags should remain in the final content
   - Use proper Markdown syntax for:
     - Headers (`#`, `##`, etc.)
     - Lists (`-`, `1.`, etc.)
     - Links (`[]()`)
     - Images (`![]()`)
     - Code blocks (`` ``` ``)
     - Tables (`|` syntax)
     - Blockquotes (`>`)

2. **VitePress-Specific Formatting**
   - Use VitePress-specific markdown features
   - Convert callouts to VitePress style:
     ```markdown
     ::: info
     Information content
     :::
     
     ::: warning
     Warning content
     :::
     
     ::: danger
     Important alert
     :::
     ```
   - Use VitePress components where applicable
   - Implement proper frontmatter structure

3. **Internal Links**
   - Convert all internal documentation links to new VitePress format
   - Old format: `https://paymattic.com/docs/some-doc`
   - New format: `/some-doc`
   - Ensure all internal links are relative paths
   - Maintain link integrity across all documents

### Image Handling
1. **Image Storage Structure**
   ```
   /docs/public/images/{category-name}/{doc-name}/{image-name}
   ```
   Example:
   ```
   /docs/public/images/getting-started-with-paymattic/paymattic-introduction/example.jpg
   ```

2. **Image Migration Process**
   - Download all images from WordPress
   - Organize into appropriate category/doc folders
   - Update image references in markdown:
     ```markdown
     Old: <img src="https://paymattic.com/wp-content/uploads/2023/example.jpg">
     New: ![](/images/getting-started-with-paymattic/paymattic-introduction/example.jpg)
     ```
   - Maintain original image names
   - Verify image integrity after download

### Content Preservation
1. **Content Integrity**
   - Preserve all original content meaning and structure
   - Maintain heading hierarchy
   - Keep all lists, tables, and formatting
   - Preserve code blocks and syntax highlighting

### Category Management
1. **Category Information**
   - Categories from WordPress (e.g., `<category domain="doc_category">`) must be preserved
   - Categories used for file organization and navigation, but not URLs
   - Example category format in XML:
     ```xml
     <category domain="doc_category" nicename="getting-started-with-paymattic">
         <![CDATA[Getting Started with Paymattic]]>
     </category>
     ```

## Project Structure
```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   └── theme/            # Custom theme components
├── {category-name}/       # Documents organized by category
│   └── {doc-name}.md     # Individual doc files
├── public/
│   └── images/
│       └── {category-name}/
│           └── {doc-name}/
│               └── {image-files}
```

## Migration Steps

1. **Initial Setup**
   - Set up VitePress project structure
   - Configure basic project settings
   - Create required directories
   - Install necessary dependencies

2. **Content Processing**
   - Parse WordPress XML export
   - Extract document links, categories, and content
   - Create category folders
   - Convert HTML to Markdown
   - Process internal links
   - Create markdown files in appropriate category folders

3. **Image Migration**
   - Extract image URLs from content
   - Download all images
   - Create category and doc-based folders
   - Organize images in appropriate folders
   - Update image references in markdown files
   - Verify image integrity

4. **URL Configuration**
   - Set up flat URL structure in VitePress
   - Configure proper routing to ignore category folders in URLs
   - Ensure SEO compatibility
   - Verify internal links

5. **Navigation Setup**
   - Implement category-based navigation
   - Maintain flat URLs while showing category structure
   - Set up sidebar and navigation components

6. **Verification**
   - Verify all content is preserved
   - Check markdown conversion quality
   - Test internal links
   - Verify image references and display
   - Test URL structure
   - Validate category organization
   - Ensure SEO compatibility

## Configuration Example

```typescript
// .vitepress/config.ts
export default {
  // Base configuration
  base: '/',
  
  // Flat URL structure while supporting category-based organization
  rewrites: {
    // Map nested files to flat URLs
    ':category/:doc': ':doc',
    // Fallback for direct files
    ':doc': ':doc'
  },
  
  // Markdown configuration
  markdown: {
    // Configure markdown options
    lineNumbers: true,
    // Add any required markdown plugins
  },
  
  // Other configurations...
}
```

## Frontmatter Example

```markdown
---
title: "Paymattic Introduction"
category: "Getting Started with Paymattic"
description: "Original meta description for SEO"
# The URL will still be /docs/paymattic-introduction
# despite being in /docs/getting-started-with-paymattic/paymattic-introduction.md
---
```

## Content Conversion Examples

### Headers
```markdown
Old:
<h1>Main Title</h1>
<h2>Subtitle</h2>

New:
# Main Title
## Subtitle
```

### Lists
```markdown
Old:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

New:
- Item 1
- Item 2
```

### Links
```markdown
Old:
<a href="https://paymattic.com/docs/another-doc">Link Text</a>

New:
[Link Text](/another-doc)
```

### Images
```markdown
Old:
<img src="https://paymattic.com/wp-content/uploads/2023/image.jpg" alt="Description">

New:
![Description](/images/category-name/doc-name/image.jpg)
```

This document serves as a reference for maintaining consistency in the documentation migration process and future updates. 