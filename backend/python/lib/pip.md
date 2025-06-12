```sh
pip list
python -m pip list

# Lista detallada con más información (incluye ubicaciones)
pip freeze

# pip show fastapi
pip show fastapi

pip uninstall fastapi

pip freeze > requirements.txt
pip install -r requirements.txt


# Eliminar todos los paquetes instalados
pip freeze > installed.txt
pip uninstall -y -r installed.txt
