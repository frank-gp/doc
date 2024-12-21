## Backup in Custom Format (.dump)

```sh
pg_dump -h localhost -p 5432 -U postgres -F c -b -v -f backup_dump.dump postgres
```

## Restore from Custom Format (.dump)

```sh
pg_restore -h localhost -p 5432 -U postgres -d postgres -v backup_dump.dump
```

## Backup in Plain SQL Format (.sql)

```sh
pg_dump -h localhost -p 5432 -U postgres -F p -f backup_plain.sql postgres
```

## Restore from Plain SQL Format (.sql)

```sh
psql -h localhost -p 5432 -U postgres -d postgres -f backup_plain.sql
```

# Delete Database

```sh
# Conéctate a PostgreSQL:
psql -h localhost -p 5432 -U postgres -d postgres
```

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

DROP DATABASE mydatabase;
CREATE DATABASE mydatabase;
```
