# Adminer

https://www.adminer.org/#download

Adminer (formerly phpMinAdmin) is a full-featured database management tool written in PHP. Conversely to phpMyAdmin, it consist of a single file ready to deploy to the target server. Adminer is available for MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Elasticsearch, MongoDB and others via plugin.

# Laragon

https://laragon.org/download/

Modern & Powerful - Easy Operation
Productive. Portable. Fast. Effective. Awesome!

### Open _php.ini_ file

```bash
C:\laragon\bin\php\php-8.1.10-Win32-vs16-x64\php.ini

or

D:\laragon\bin\php\php-8.1.10-Win32-vs16-x64\php.ini

```

### Enable line 940 942

```ini

extension=pdo_pgsql
;extension=pdo_sqlite
extension=pgsql
```
