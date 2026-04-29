# Timeweb Deploy

Репозиторий настроен на автоматический деплой статического сайта на Timeweb VPS по SSH.

Текущее целевое подключение:

- Host: `72.56.37.198`
- User: `root`
- Port: `22`
- Release path: `/var/www/woodholding/releases/<commit-sha>`
- Active path: `/var/www/woodholding/current`

Что нужно добавить в GitHub перед первым деплоем:

1. Repository secret `TIMEWEB_PASSWORD`
   В него нужно вставить реальный root-пароль от сервера.
2. Repository variable `TIMEWEB_SITE_URL` (рекомендуется)
   Укажите реальный публичный URL сайта.
   Если переменная не задана, workflow использует `http://72.56.37.198`.
3. Repository variable `TIMEWEB_SERVER_NAME` (рекомендуется)
   Укажите домен для `server_name` в nginx.
   Если переменная не задана, используется `72.56.37.198`.

Как это работает:

1. Push в `main` запускает workflow `.github/workflows/timeweb.yml`.
2. Workflow собирает `_site` из содержимого репозитория.
3. Скрипт `scripts/prepare-timeweb-artifact.mjs` переписывает `canonical`, `og:url`, `sitemap.xml`, `robots.txt` и другие абсолютные URL под Timeweb.
4. GitHub Actions подключается к VPS, устанавливает `nginx` и `rsync`, если нужно, и выкатывает новый релиз.
5. Активный релиз переключается через симлинк `/var/www/woodholding/current`.

Что важно для SEO:

- Пока сайт открывается только по IP, canonical будет указывать на IP-адрес.
- Для полноценного SEO нужно привязать домен и затем задать `TIMEWEB_SITE_URL` как `https://ваш-домен`.
- После перевода на Timeweb имеет смысл отключить GitHub Pages в настройках репозитория, чтобы не держать второй публичный дубль сайта.
