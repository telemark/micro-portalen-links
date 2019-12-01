[![Build Status](https://travis-ci.org/telemark/micro-portalen-links.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-links)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-portalen-links

Microservice for portalen links.

Returns an array of links based on roles and ip.

## API

### **/links**

Lists all shortcuts

To filter by roles

#### GET

```bash
?roles=<role1>|<role2>|<role3>
```

#### POST

```JavaScript
{
  roles: [
    'role1',
    'role2',
    'role3'
  ]
}
```

## /view

Renders html of all links

To filter by roles

#### GET

```bash
?roles=<role1>|<role2>|<role3>
```

#### POST

```JavaScript
{
  roles: [
    'role1',
    'role2',
    'role3'
  ]
}
```

```
$ curl http://localhost:3000/links -d '{"roles": ["skole"]}' --header "Content-Type: application/json"
```

To filter by ip

#### GET

```bash
?myIp=127.0.0.1
```

#### POST

```JavaScript
{
  myIp: '127.0.0.1'
}
```

## Development

## Development

You'll need the [now-cli](https://zeit.co/now) installed to do local development.

- Clone the repo
- Install the dependencies ```$ npm i```
- Start the development server ```$ npm run dev```

### Add a new link

- Open the .json-file for the role you will add the link for [lib/data/](lib/data/)
- Add the link

```JavaScript
  {
      "title": "The links title",
      "description": "Links description (keep it short)",
      "system": "What system is the link leading to",
      "url": "Url for the link",
      "icon": "Name for the link icon", // From https://material.io/resources/icons/?style=baseline
      "includeIps": [
        "10.0.*.*", // Support wildcards for range
        "172.16.0.0" // Supports full address
      ] //This optional. Must be an array. If the shortcut is available for all IPs remove the property
    }
```

- Redeploy

### Remove a link

- Remove the link from the role file [lib/data/](lib/data/)
- Redeploy

## Deploy

Make sure the [now.json](now.json) matches your environment.

Run the deploy script.

```$ npm run deploy```

## License

[MIT](LICENSE)