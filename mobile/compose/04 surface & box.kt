Surface(
    color = Color.Blue,
    modifier = Modifier
        .width(75.dp)
        .height(75.dp)
) {
    Text(text = "Surface")
}
Box(
    modifier = Modifier
        .background(Color.Green)
        .width(75.dp)
        .height(75.dp)
) {
    Text(text = "Box")
}