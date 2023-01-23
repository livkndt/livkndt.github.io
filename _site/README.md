# livkndt.github.io
This is the code for my personal website, built using Jekyll and deployed to Github Pages.

![](readme_img/lighthouse_accessibility.svg)
![](readme_img/lighthouse_best-practices.svg)
![](readme_img/lighthouse_performance.svg)
![](readme_img/lighthouse_pwa.svg)
![](readme_img/lighthouse_seo.svg)

## Requirements
- Ruby v2.5.0 or higher (`ruby -v`)
- RubyGems (`gem -v`)
- [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/) (check versions using `gcc -v`,`g++ -v`, and `make -v`)
- [Jekyll](https://jekyllrb.com/docs/installation/) (`gem install jekyll`)

## Installation
```shell
$ bundle exec jekyll serve --livereload
```
Since Jekyll is a static site generator, it has to build the site before we can view it. Run either of the following commands to build your site:

- `jekyll build` - Builds the site and outputs a static site to a directory called _site.

- `jekyll serve` - Does jekyll build and runs it on a local web server at http://localhost:4000, rebuilding the site any time you make a change.

## Modifying Content
There are currently two places to add dynamic content:
1. Positions (`/_positions`)
   - For adding new positions to the list of experience.
2. Posts (`/_posts`)
   - For adding new blog posts
   - Draft blog posts can be added under (`/_drafts`), use `bundle exec jekyll serve --livereload --drafts`

## Development
This project currently uses a modified version of the minima theme that comes out of the box with Jekyll.
All the Sass files live under `/_sass`.

Templates for pages are found under `_layouts` and related partials under `_includes`.
