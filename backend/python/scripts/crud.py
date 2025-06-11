movies = [
    {"id": 1, "title": "The Shawshank Redemption", "year": 1994},
    {"id": 2, "title": "The Godfather", "year": 1972},
    {"id": 3, "title": "The Dark Knight", "year": 2008}    
]

def getAll():
    """
    Retorna la lista completa de películas.
    """
    return movies

def findOne(movie_id: int):
    """
    Encuentra y retorna una película por su ID.
    Retorna None si no se encuentra la película.
    """
    for movie in movies:
        if movie["id"] == movie_id:
            return movie
    return None

def findOneYear(year: int):
    """
    Encuentra y retorna una lista de películas lanzadas en el año especificado.
    Retorna una lista vacía si no hay películas en ese año.
    """
    result = []
    for movie in movies:
        if movie["year"] == year:
            result.append(movie)
    return result

def create(title: str, year: int):
    """
    Añade una nueva película a la lista con un ID generado automáticamente.
    Retorna la película añadida.
    """
    # Encuentra el ID más grande existente y le suma 1 para el nuevo ID
    new_id = max([movie["id"] for movie in movies]) + 1 if movies else 1
    
    new_movie = {"id": new_id, "title": title, "year": year}
    movies.append(new_movie)
    return new_movie

def update(movie_id: int, new_title: str = None, new_year: int = None):
    """
    Actualiza el título y/o el año de una película existente por su ID.
    Retorna la película actualizada o None si no se encuentra.
    """
    for movie in movies:
        if movie["id"] == movie_id:
            if new_title is not None:
                movie["title"] = new_title
            if new_year is not None:
                movie["year"] = new_year
            return movie
    return None

def delete(movie_id: int):
    """
    Elimina una película de la lista por su ID.
    Retorna la película eliminada si se encuentra, None si no.
    """
    for index, movie in enumerate(movies):
        if movie["id"] == movie_id:
            return movies.pop(index) 
    return None

# --- Ejemplos de uso ---

print("--- Todas las películas ---")
print(getAll())

print("\n--- Encontrar película por ID (ID 2) ---")
print(findOne(2))

print("\n--- Encontrar película por ID (ID 99 - No existente) ---")
print(findOne(99))

print("\n--- Encontrar películas por Año (1994) ---")
print(findOneYear(1994))

print("\n--- Encontrar películas por Año (2000 - No existente) ---")
print(findOneYear(2000))

print("\n--- Añadir nueva película 'Interstellar', 2014 ---")
added_movie = create("Interstellar", 2014)
print(added_movie)
print(getAll())

print("\n--- Actualizar película con ID 1 ('The Shawshank Redemption (Editado)', 1995) ---")
updated_movie = update(1, new_title="The Shawshank Redemption (Editado)", new_year=1995)
print(updated_movie)
print(findOne(1))

print("\n--- Eliminar película con ID 3 ('The Dark Knight') ---")
deleted_movie = delete(3)
print(deleted_movie)
print(getAll())

print("\n--- Intentar eliminar película con ID 99 (No existente) ---")
not_found_delete = delete(99)
print(not_found_delete)