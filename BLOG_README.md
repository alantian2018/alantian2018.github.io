# Blog Functionality Guide

Your website now has a built-in blog system that's fully integrated with your Jekyll site. No more external dependencies!

## How It Works

The blog system uses Jekyll's built-in collections and the al-folio theme's blog layout. All blog posts are stored in the `_posts/` directory and automatically appear on your blog page.

## Creating New Blog Posts

### Method 1: Use the Template
1. Copy `_blog-post-template.md`
2. Rename it to `YYYY-MM-DD-your-post-title.md` (use today's date)
3. Place it in the `_posts/` directory
4. Edit the front matter (the section between `---` markers) and content

### Method 2: Create from Scratch
1. Create a new `.md` file in `_posts/`
2. Use this front matter structure:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
tags: [tag1, tag2]
description: "Brief description of your post"
featured: false
thumbnail: /assets/img/your-image.jpg  # Optional
---
```

## Front Matter Options

- **layout**: Always use `post`
- **title**: Your post title
- **date**: Publication date (YYYY-MM-DD format)
- **categories**: Array of categories for organization
- **tags**: Array of tags for searchability
- **description**: Brief summary (appears in previews)
- **featured**: Set to `true` to feature on blog homepage
- **thumbnail**: Optional image path for post previews

## Blog Features

- **Automatic Pagination**: Posts are paginated automatically
- **Tag and Category Pages**: Each tag/category gets its own page
- **Search and Filtering**: Built-in search functionality
- **Responsive Design**: Works on all devices
- **SEO Optimized**: Proper meta tags and structure

## File Naming Convention

Always use this format for your post files:
```
YYYY-MM-DD-title-with-hyphens.md
```

Examples:
- `2024-01-15-welcome-to-my-blog.md`
- `2024-01-20-research-findings.md`
- `2024-02-01-conference-report.md`

## Adding Images

1. Place images in `assets/img/`
2. Reference them in your posts using relative paths:
   - `![Alt text](/assets/img/your-image.jpg)`
   - Or use the thumbnail front matter option

## Publishing

1. Save your post file in `_posts/`
2. Commit and push to GitHub
3. Your post will automatically appear on the blog
4. The blog page is accessible at `/blog/`

## Customization

You can customize the blog appearance by editing:
- `_sass/_layout.scss` - Blog styling
- `blog/index.md` - Blog homepage layout
- `_layouts/post.html` - Individual post layout

## Need Help?

- Check the [Jekyll documentation](https://jekyllrb.com/docs/)
- Review the [al-folio theme documentation](https://github.com/alshedivat/al-folio)
- Look at existing posts in `_posts/` for examples

Happy blogging! 🎉

