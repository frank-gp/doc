
### Change Password user in postgreSQL

Open _**pg_hba.conf**_ in vscode (15 = version)

```
C:\Program Files\PostgreSQL\15\data\pg_hba.conf
```

Find line 90 in _**pg_hba.conf**_ file

```bash
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
```

change "scram-sha-256" to "trust"

```bash
# IPv6 local connections:
host    all             all             ::1/128                 trust
```

Access in SQL shell without password, and command for change password en shell

```bash
\password
```

Restore Config: change "trust" to "scram-sha-256"
```bash
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
```

---

---

---
