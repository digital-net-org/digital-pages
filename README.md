<h1>
    <img width="300" src="https://raw.githubusercontent.com/digital-net-org/.github/refs/heads/master/assets/logo_v2025.svg">
</h1>
<div justify="center">
    <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-blue.svg?color=1d63ed"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/Typescript-blue.svg?color=3178c6"></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-blue.svg?color=00d8ff"></a>
    <a href="https://puckeditor.com/"><img src="https://img.shields.io/badge/Puck-black.svg?color=111111"></a>
</div>

_@digital-net-org/digital-pages_

Backoffice that allows users to create and edit website pages/blog articles through an intuitive interface using the
Puck library.

## :memo: Configuration

You can configurate the application using environment variables and volume while mounting the docker image.

### :whale2: Dockerfile

#### Override public assets

Create a [_volume_](https://docs.docker.com/engine/storage/volumes/) in the container and access path `/app/assets`. You
can replace the following files from here:

| File               | Type       | Description                       |
| ------------------ | ---------- | --------------------------------- |
| `favicon.ico`      | Icon       | The website Favicon.              |
| `styles.theme.css` | Stylesheet | App palette configuration sheet.  |
| `styles.theme.css` | Stylesheet | Puck palette configuration sheet. |

#### Environment variables

| Variable          | Type   | Description                      |
| ----------------- | ------ | -------------------------------- |
| `DIGITAL_API_URL` | string | The base URL of the Digital API. |
