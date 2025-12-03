```sh
# Redefinir el comando pip para que te dé un error si no estás en un venv
# vim  (~/.bashrc o ~/.bash_profile):
pip() {
  if [ -z "$VIRTUAL_ENV" ]; then
    echo "🚫 No estás en un entorno virtual. Usa: python -m venv venv && source venv/Scripts/activate"
    return 1
  else
    command pip "$@"
  fi
}

# ¿Cómo ver si estás en el entorno global?
python -c "import sys; print(sys.prefix)"

echo $VIRTUAL_ENV

# listar los paquetes instalados en el entorno global, si tienes el alias de protección
python -m pip list

```
