Column(
    modifier = Modifier.fillMaxSize(),
    verticalArrangement = Arrangement.Center,
    horizontalAlignment = Alignment.CenterHorizontally
) {
    Row() {
        Text(
            text = "Frank", fontSize = 48.sp, color = Color.Green)
        Text(text = " GP", fontSize = 48.sp, color = Color.Gray)
    }
    Row() {
        Text(text = "Android", fontSize = 24.sp, color = Color.Blue)
        Text(text = " Developer", fontSize = 24.sp, color = Color.Red)
    }
}