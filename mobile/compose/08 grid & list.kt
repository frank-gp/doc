
//@Preview(showBackground = true)
@Composable
fun Grid(){
Column() {
    LazyVerticalGrid(
        columns = GridCells.Fixed(3),
        content = {
            item { Text(text = "LazyVerticalGrid") }
            item { Text(text = "LazyVerticalGrid") }
            item { Text(text = "LazyVerticalGrid") }
            item { Text(text = "LazyVerticalGrid") }
        })
    LazyHorizontalGrid(rows = GridCells.Fixed(4),
        content = {
            item { Text(text = "LazyHorizontalGrid") }
            item { Text(text = "LazyHorizontalGrid") }
            item { Text(text = "LazyHorizontalGrid") }
            item { Text(text = "LazyHorizontalGrid") }
        })
}
}

@Preview(showBackground = true)
@Composable
fun FeedInstagram(){
    val imagesFeed = listOf(
        R.drawable.img1,
        R.drawable.img2,
        R.drawable.img3,
        R.drawable.img4,
        R.drawable.img5,
        R.drawable.img6,
        R.drawable.img7,
        R.drawable.img8,
    )

    LazyVerticalGrid(
        columns = GridCells.Fixed(3),
        content = {
            item {
                Image(painter = painterResource(
                    id = R.drawable.img9),
                    contentDescription = "img")
            }
            items(imagesFeed){
                Image(painter = painterResource(
                    id = it),
                    contentDescription = "img")
            }
        }
    )
}