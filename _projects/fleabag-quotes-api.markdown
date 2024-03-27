---
title: Fleabag Quotes API
project_url: https://fleabag-quotes.livkndt.com/
github_url: https://github.com/livkndt/fleabag-quotes
description: "💬 Fleabag quotes API. Cheeky little REST API built on Node.js and Express using TypeScript. Designed to return random quote from the critically acclaimed TV series, \"Fleabag\", for your amusement."
tech: typescript, node, express, jest, swagger, husky, terraform, aws
image: projects/fleabag_quotes_hero@5x.png
image_alt: projects/fleabag_quotes_hero@5x.webp
---

# Fleabag Quotes API
A mini node express app that I wrote to serve as a REST API for Fleabag quotes. My aim was to capture some best
practices I've picked up over the years and get back into coding after a stint of heavy management and DevOps focus at 
the start of a new job. Read more in the [blog post](/2023/08/04/fleabag-api.html).

I don't have much time to maintain or improve it, but it still brings me joy from time to time. I'm just sad there's no
more episodes to look forward to 🥲 (but maybe that's the beauty).

#### Contents
- [🔥 Hot Tip](#-hot-tip)
- [🚀 Usage](#-usage)

<hr>

### 🔥 Hot Tip
One thing that brought me a lot of joy was using this as a dynamic cover for Notion pages. I use Notion as my main 
personal documentation tool... Here's how you can do it too:
```
# Get a random image with a width of 1800px and a height of 600px
https://fleabag-quotes.livkndt.com/quotes/random/inspirational?imageWidth=1800&imageHeight=600
```
- Click "Change Cover"
- Select the "Link" tab
- Paste the URL with chosen dimensions (I found 1800x600 to be a good fit)
- Click "Submit"
- Admire your Fleabag quote cover
- Refresh the page to get a new quote

### 🚀 Usage
Get a random quote from the critically acclaimed TV series, "Fleabag":
```
https://fleabag-quotes.livkndt.com/quotes/random
```

Get a random quote as an "inspirational" image:
```
https://fleabag-quotes.livkndt.com/quotes/random/inspirational

https://fleabag-quotes.livkndt.com/quotes/random/inspirational?imageWidth=800

https://fleabag-quotes.livkndt.com/quotes/random/inspirational?imageWidth=800&imageHeight=600
```

Get a list of the characters:
```
https://fleabag-quotes.livkndt.com/quotes/characters
```

Get all the quotes for a particular character:
```
https://fleabag-quotes.livkndt.com/quotes/characters/{character}
```

Get a random quote for a particular character:
```
https://fleabag-quotes.livkndt.com/quotes/characters/{character}/random
```

For full usage, checkout the [Swagger documentation](https://fleabag-quotes.livkndt.com/).