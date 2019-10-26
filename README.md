[![Build Status](https://travis-ci.org/telemark/micro-portalen-links.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-links)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-portalen-links

Microservice for portalen links


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
curl http://localhost:3000/links -d '{"roles": ["skole"]}' --header "Content-Type: application/json"
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

## License

[MIT](LICENSE)