# 🗜.ml

**🗜.ml** is a modern URL emoji-shortener with support for custom domains. Shorten URLs, manage your links and view the click rate statistics.

_Contributions and bug reports are welcome._

## Table of Contents

- [Key Features](#key-features)
- [Stack](#stack)
- [Setup](#setup)
- [Browser Extensions](#browser-extensions)
- [API](#api)
- [Integrations](#integrations)
- [3rd Party Packages](#3rd-party-packages)
- [Contributing](#contributing)

## Key Features

- Emoji domain.
- Free and open source.
- Custom domain support.
- Custom URLs for shortened links
- Setting password for links.
- Private statistics for shortened URLs.
- View and manage your links.
- RESTful API.

## Stack

- Node (Web server)
- Express (Web server framework)
- Passport (Authentication)
- React (UI library)
- Next (Universal/server-side rendered React)
- Redux (State management)
- styled-components (CSS styling solution library)
- Recharts (Chart library)
- PostgreSQL (database)

## Setup

You need to have [Node.js](https://nodejs.org/), [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed.

1. Clone this repository `git clone https://github.com/emoji-short/xn--d18h.ml`.
2. Rename `.example.env` to `.env` and fill it properly.
3. Install dependencies: `npm install`.
4. Run for development: `npm run dev`.
5. Run for production: `npm run build` then `npm run prod`.
6. If you want run application with PM2 `npm install -g pm2` then `npm start`.

### Docker

You can use Docker to start the app. The simplest way is to just run `docker-compose up` command and then the app should be ready on port "3000".

## Browser Extensions (soon)

Download 🗜.ml's extension for web browsers via below links. You can also find the source code on [🗜.ml-extension](#).

- [Chrome](#)
- [Firefox](#)

## API

In addition to the website, you can use these APIs to create, delete and get URLs.

### Types

```
URL {
  createdAt {string} ISO timestamp of when the URL was created
  id {string} Unique ID of the URL
  target {string} Where the URL will redirect to
  password {boolean} Whether or not a password is required
  count {number} The amount of visits to this URL
  shortUrl {string} The shortened link (Usually https://xn--d18h.ml/id)
}
```

In order to use these APIs you need to generate an API key from settings. Never put this key in the client side of your app or anywhere that is exposed to others.

All API requests and responses are in JSON format.

Include the API key as `X-API-Key` in the header of all below requests. Available API endpoints with body parameters:

**Get shortened URLs list:**

```
GET /api/url/geturls
```

Returns:

```
{
  list {Array<URL>} List of URL objects
  countAll {number} Amount of items in the list
}
```

**Submit a link to be shortened**:

```
POST /api/url/submit
```

Body:

- `target`: Original long URL to be shortened.
- `customurl` (optional): Set a custom URL.
- `password` (optional): Set a password.
- `reuse` (optional): If a URL with the specified target exists returns it, otherwise will send a new shortened URL.

Returns: URL object

**Delete a shortened URL** and **Get stats for a shortened URL:**

```
POST /api/url/deleteurl
GET /api/url/stats
```

Body (or query for GET request)

- `id`: ID of the shortened URL.
- `domain` (optional): Required if a custom domain is used for short URL.

## Integrations

### ShareX

You can use 🗜.ml as your default URL shortener in [ShareX](https://getsharex.com/). If you host your custom instance of 🗜.ml.

## 3rd Party packages
| Language   | Link                                                       | Description                                         |
| ---------- | ---------------------------------------------------------- | --------------------------------------------------- |
| C# (.NET)  | [KuttSharp](https://github.com/0xaryan/KuttSharp)          | .NET package for 🗜.ml url shortener                |
| Python     | [kutt-cli](https://github.com/RealAmirali/kutt-cli)        | Command-line client for 🗜.ml written in Python     |
| Ruby       | [kutt.rb](https://github.com/RealAmirali/kutt.rb)          | 🗜.ml library written in Ruby                       |
| Rust       | [urlshortener](https://github.com/vityafx/urlshortener-rs) | URL shortener library written in Rust               |
| Rust       | [kutt-rs](https://github.com/robatipoor/kutt-rs)           | Command line tool written in Rust                   |
| Node.js    | [node-kutt](https://github.com/ardalanamini/node-kutt)     | Node.js client for 🗜.ml url shortener              |
| Bash       | [kutt-bash](https://git.fossdaily.xyz/caltlgin/kutt-bash)  | Simple command line program for 🗜.ml               |
| JavaScript | [kutt-vscode](https://github.com/mehrad77/kutt-vscode)     | Visual Studio Code extention for 🗜.ml              |
| Java       | [kutt-desktop](https://github.com/cipher812/kutt-desktop)  | A Cross platform Java desktop application for 🗜.ml |
| Go         | [kutt-go](https://github.com/raahii/kutt-go)               | Go client for 🗜.ml url shortener                   |

## Contributing

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs or discussing ideas.

Special thanks to [Thomas](https://github.com/trgwii) and [Muthu](https://github.com/MKRhere).
