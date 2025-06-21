# Hello, World

```xml
<Grid>
    <StackPanel VerticalAlignment="Center" HorizontalAlignment="Center">
        <Button Content="Click Me!" Width="120" Height="40" Click="Button_Click"/>
        <TextBlock x:Name="MessageText" FontSize="24" Margin="0,20,0,0" TextAlignment="Center"/>
    </StackPanel>
</Grid>
```

```csharp
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageText.Text = "Hello, World!";
    }
}
```

# Presiona F5 o haz clic en Iniciar (▶️)

```sh
dotnet run
```
