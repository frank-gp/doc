user = user,
                              isSelected = viewState.selectedUsers.contains(user.id),
                              isSelectionMode = viewState.isSelectionMode,
                              onClick = {
                                  if (viewState.isSelectionMode) {
                                      onIntent(UserListIntent.SelectUser(user.id))
                                  } else {
                                      onIntent(UserListIntent.NavigateToUser(user.id))
                                  }
                              },
                              onLongClick = {
                                  onIntent(UserListIntent.SelectUser(user.id))
                              }
                          )
                      }
                  }
              }
          }
          
          // Selection actions
          if (viewState.isSelectionMode) {
              SelectionActions(
                  selectedCount = viewState.selectedUsers.size,
                  onClearSelection = { onIntent(UserListIntent.ClearSelection) },
                  onDeleteSelected = { onIntent(UserListIntent.DeleteSelectedUsers) }
              )
          }
      }
  }
  ```

### Memory Management y Best Practices
- **Memory Optimization**
  ```kotlin
  // Avoid memory leaks in Composables
  @Composable
  fun TimerScreen() {
      var timeElapsed by remember { mutableStateOf(0) }
      
      // Use rememberUpdatedState for capturing latest values
      val currentOnTick by rememberUpdatedState { timeElapsed++ }
      
      DisposableEffect(Unit) {
          val timer = Timer()
          timer.scheduleAtFixedRate(object : TimerTask() {
              override fun run() {
                  currentOnTick()
              }
          }, 0, 1000)
          
          onDispose {
              timer.cancel() // Always clean up resources
          }
      }
      
      Text("Time elapsed: $timeElapsed seconds")
  }
  
  // Proper coroutine handling
  @Composable
  fun DataLoadingScreen(
      viewModel: DataViewModel = hiltViewModel()
  ) {
      val data by viewModel.data.collectAsState()
      val lifecycleOwner = LocalLifecycleOwner.current
      
      // Use LaunchedEffect with proper keys
      LaunchedEffect(Unit) {
          viewModel.loadData()
      }
      
      // Handle lifecycle-aware operations
      DisposableEffect(lifecycleOwner) {
          val observer = LifecycleEventObserver { _, event ->
              when (event) {
                  Lifecycle.Event.ON_PAUSE -> viewModel.pauseOperations()
                  Lifecycle.Event.ON_RESUME -> viewModel.resumeOperations()
                  else -> {}
              }
          }
          
          lifecycleOwner.lifecycle.addObserver(observer)
          
          onDispose {
              lifecycleOwner.lifecycle.removeObserver(observer)
          }
      }
      
      // UI content
      LazyColumn {
          items(data) { item ->
              DataItem(item = item)
          }
      }
  }
  
  // Image memory optimization
  @Composable
  fun OptimizedImageGrid(
      images: List<String>,
      modifier: Modifier = Modifier
  ) {
      val context = LocalContext.current
      
      // Custom image request for memory optimization
      val imageLoader = remember {
          ImageLoader.Builder(context)
              .memoryCache {
                  MemoryCache.Builder(context)
                      .maxSizePercent(0.25) // Use 25% of available memory
                      .build()
              }
              .diskCache {
                  DiskCache.Builder()
                      .directory(context.cacheDir.resolve("image_cache"))
                      .maxSizeBytes(50 * 1024 * 1024) // 50MB
                      .build()
              }
              .build()
      }
      
      LazyVerticalGrid(
          columns = GridCells.Adaptive(minSize = 150.dp),
          modifier = modifier
      ) {
          items(images) { imageUrl ->
              AsyncImage(
                  model = ImageRequest.Builder(context)
                      .data(imageUrl)
                      .size(300, 300) // Resize for memory efficiency
                      .crossfade(true)
                      .build(),
                  contentDescription = null,
                  imageLoader = imageLoader,
                  modifier = Modifier
                      .aspectRatio(1f)
                      .clip(RoundedCornerShape(8.dp))
              )
          }
      }
  }
  ```

**🛠️ Proyecto Final:** App enterprise completa con todas las técnicas avanzadas

---

## 🛠️ **Herramientas y Ecosystem**

### Development Tools
- **IDEs y Extensions:**
  - Android Studio Arctic Fox+ con Compose preview
  - Layout Inspector para Compose
  - Compose Preview tool
  - Live Edit (experimental)

- **Debugging Tools:**
  - Compose Layout Inspector
  - Recomposition highlighter
  - Semantics tree viewer
  - Performance profiler

### Essential Libraries
- **UI Components:**
  - `androidx.compose.material3:material3`
  - `androidx.compose.material:material-icons-extended`
  - `androidx.constraintlayout:constraintlayout-compose`
  - `com.google.accompanist:accompanist-*` (various utilities)

- **Architecture:**
  - `androidx.lifecycle:lifecycle-viewmodel-compose`
  - `androidx.navigation:navigation-compose`
  - `androidx.hilt:hilt-navigation-compose`
  - `androidx.paging:paging-compose`

- **Networking & Images:**
  - `io.coil-kt:coil-compose`
  - `com.squareup.retrofit2:retrofit`
  - `androidx.compose.foundation:foundation` (AsyncImage)

### Testing Framework
- **Unit Testing:**
  - JUnit, Mockito, Turbine
  - kotlinx-coroutines-test
  - androidx.arch.core:core-testing

- **UI Testing:**
  - androidx.compose.ui:ui-test-junit4
  - androidx.test.espresso:espresso-core
  - Robolectric (for local tests)

---

## 📚 **Recursos de Aprendizaje**

### Documentación Oficial
- **Google Developer Docs:**
  - Jetpack Compose documentation
  - Android Architecture Guidelines
  - Material Design 3 specifications
  - Performance best practices

### Cursos y Tutorials
- **Google Codelabs:**
  - Jetpack Compose pathway
  - Advanced Compose features
  - Testing in Compose
  - Performance optimization

### Comunidades
- **Online Communities:**
  - Android Developers Discord
  - Kotlin Slack #compose channel
  - Reddit r/androiddev
  - Stack Overflow [jetpack-compose] tag

### Blogs y Resources
- **Technical Blogs:**
  - Android Developers Blog
  - Medium publications (ProAndroidDev, etc.)
  - Individual developer blogs
  - Conference talks (Android Dev Summit, etc.)

---

## 💡 **Pro Tips para Jetpack Compose**

### 1. **Performance desde el Inicio**
```kotlin
// ✅ Use stable parameters
@Composable
fun UserCard(
    user: User, // Stable data class
    onClick: () -> Unit, // Stable lambda
    modifier: Modifier = Modifier // Stable modifier
)

// ✅ Extract expensive operations
@Composable
fun ExpensiveContent(data: List<Item>) {
    val processedData = remember(data) {
        data.filter { it.isActive }.sortedBy { it.name }
    }
    
    // Use processedData in UI
}

// ❌ Avoid unstable parameters
@Composable
fun BadExample(
    items: MutableList<String>, // Unstable!
    onClick: (String) -> Unit = { } // Unstable default lambda!
)
```

### 2. **State Management Patterns**
```kotlin
// ✅ Hoist state properly
@Composable
fun SearchScreen() {
    var query by remember { mutableStateOf("") }
    var results by remember { mutableStateOf(emptyList<Result>()) }
    
    SearchContent(
        query = query,
        onQueryChange = { query = it },
        results = results
    )
}

// ✅ Use derivedStateOf for computed values
@Composable
fun FilteredList(items: List<Item>, filter: String) {
    val filteredItems by remember {
        derivedStateOf {
            items.filter { it.name.contains(filter, ignoreCase = true) }
        }
    }
    
    LazyColumn {
        items(filteredItems) { item ->
            ItemRow(item)
        }
    }
}
```

### 3. **Navigation Best Practices**
```kotlin
// ✅ Type-safe navigation arguments
@Composable
fun AppNavigation() {
    NavHost(
        navController = navController,
        startDestination = "home"
    ) {
        composable("home") { HomeScreen(navController) }
        composable(
            "detail/{id}",
            arguments = listOf(navArgument("id") { type = NavType.StringType })
        ) { backStackEntry ->
            val id = backStackEntry.arguments?.getString("id") ?: return@composable
            DetailScreen(id = id)
        }
    }
}

// ✅ Centralized navigation
object NavigationRoutes {
    const val HOME = "home"
    const val DETAIL = "detail/{id}"
    
    fun detail(id: String) = "detail/$id"
}
```

### 4. **Testing Strategies**
```kotlin
// ✅ Test business logic separately
@Test
fun `viewModel should load users correctly`() = runTest {
    // Test ViewModel logic
}

// ✅ Test UI behavior
@Test
fun `clicking user should navigate to detail`() {
    composeTestRule.setContent {
        UserList(onUserClick = mockOnUserClick)
    }
    
    composeTestRule.onNodeWithText("John Doe").performClick()
    
    verify { mockOnUserClick("user123") }
}
```

### 5. **Common Pitfalls**
```kotlin
// ❌ Don't do this
@Composable
fun BadExample() {
    val data = getData() // Calls on every recomposition!
}

// ✅ Do this
@Composable
fun GoodExample() {
    val data by remember { mutableStateOf(getData()) }
    // or
    LaunchedEffect(Unit) {
        // Load data once
    }
}

// ❌ Avoid recreating objects
@Composable
fun BadList(items: List<Item>) {
    LazyColumn {
        items(items) { item ->
            ItemCard(
                item = item,
                onClick = { handleClick(item) } // New lambda every recomposition!
            )
        }
    }
}

// ✅ Stable callbacks
@Composable
fun GoodList(items: List<Item>, onItemClick: (Item) -> Unit) {
    LazyColumn {
        items(items, key = { it.id }) { item ->
            val onClick = remember { { onItemClick(item) } }
            ItemCard(item = item, onClick = onClick)
        }
    }
}
```

---

## 🎯 **Tu Siguiente Paso**

1. **Evalúa tu nivel actual** - ¿Conoces Kotlin? ¿Android básico?
2. **Configura tu entorno** - Android Studio con Compose
3. **Empieza con Kotlin** - Si no lo conoces, dedica tiempo aquí
4. **Construye tu primer "Hello Compose"**
5. **Sigue el roadmap progresivamente**
6. **Construye proyectos prácticos en cada fase**

---

## 📱 **Project Ideas Progression**

### Beginner (Fases 1-4)
1. **Counter App** - State básico, buttons
2. **Login Form** - TextFields, validación
3. **Contact List** - LazyColumn, navigation

### Intermediate (Fases 5-8)
4. **Weather App** - API calls, theming
5. **Task Manager** - CRUD, local storage
6. **Photo Gallery** - Images, grid layouts

### Advanced (Fases 9-12)
7. **Social Media Feed** - Complex state, animations
8. **E-commerce App** - Complete architecture
9. **Chat Application** - Real-time, advanced UI

---

## 📈 **Career Path Jetpack Compose**

### Junior Android Developer (0-2 años)
- **Skills:** Basic Compose, simple apps, UI implementation
- **Focus:** Learning fundamentals, building simple features

### Mid-Level Android Developer (2-4 años)
- **Skills:** Complex UI, architecture patterns, testing
- **Focus:** Feature development, code quality

### Senior Android Developer (4-6 años)
- **Skills:** Performance optimization, custom components, mentoring
- **Focus:** Technical leadership, architecture decisions

### Android Architect/Lead (6+ años)
- **Skills:** System design, team leadership, technology strategy
- **Focus:** Platform decisions, team management

**Salario estimado:**
- Junior: $45,000 - $70,000
- Mid-level: $70,000 - $100,000
- Senior: $100,000 - $140,000
- Lead/Architect: $140,000 - $200,000+

---

## 🚀 **Por qué elegir Jetpack Compose?**

**✅ Ventajas:**
- **Declarative UI** - Más fácil de mantener
- **Less code** - Reduce boilerplate
- **Powerful** - Flexibilidad increíble
- **Modern** - Estado del arte en Android
- **Kotlin-first** - Aprovecha Kotlin al máximo
- **Performance** - Optimizado por Google
- **Future-proof** - Es el futuro de Android UI

**⚠️ Consideraciones:**
- Requiere aprender paradigma declarativo
- Aún evolucionando (breaking changes ocasionales)
- Curva de aprendizaje inicial

¡Jetpack Compose es la tecnología de UI más emocionante y moderna para Android! Te permite crear interfaces increíbles con mucho menos código y mayor flexibilidad. 🎨

¿Qué tipo de app te gustaría construir primero con Compose?| **12. Advanced** | Ongoing | 20-30h/sem | 200+ h | Performance, Custom Components |

**Total:** 12-18 meses (1040-1570 horas)

---

## 🧪 **Fase 11: Testing en Compose (4-5 semanas)**

### Unit Testing
- **ViewModel Testing**
  ```kotlin
  // build.gradle (test dependencies)
  testImplementation 'junit:junit:4.13.2'
  testImplementation 'org.mockito:mockito-core:4.11.0'
  testImplementation 'org.mockito:mockito-inline:4.11.0'
  testImplementation 'org.jetbrains.kotlinx:kotlinx-coroutines-test:1.7.3'
  testImplementation 'androidx.arch.core:core-testing:2.2.0'
  testImplementation 'app.cash.turbine:turbine:1.0.0'
  
  @ExperimentalCoroutinesApi
  class UserListViewModelTest {
      
      @get:Rule
      val instantExecutorRule = InstantTaskExecutorRule()
      
      private val testDispatcher = UnconfinedTestDispatcher()
      
      @Mock
      private lateinit var getUsersUseCase: GetUsersUseCase
      
      @Mock
      private lateinit var deleteUserUseCase: DeleteUserUseCase
      
      private lateinit var viewModel: UserListViewModel
      
      @Before
      fun setup() {
          MockitoAnnotations.openMocks(this)
          Dispatchers.setMain(testDispatcher)
          viewModel = UserListViewModel(getUsersUseCase, deleteUserUseCase)
      }
      
      @After
      fun cleanup() {
          Dispatchers.resetMain()
      }
      
      @Test
      fun `loadUsers should emit loading state then success state`() = runTest {
          // Arrange
          val expectedUsers = listOf(
              User("1", "John Doe", "john@example.com", null),
              User("2", "Jane Smith", "jane@example.com", null)
          )
          whenever(getUsersUseCase()).thenReturn(Resource.Success(expectedUsers))
          
          // Act & Assert
          viewModel.uiState.test {
              // Initial state
              assertEquals(UserListUiState(), awaitItem())
              
              // Trigger load
              viewModel.loadUsers()
              
              // Loading state
              assertEquals(
                  UserListUiState(isLoading = true),
                  awaitItem()
              )
              
              // Success state
              assertEquals(
                  UserListUiState(
                      users = expectedUsers,
                      isLoading = false,
                      error = null
                  ),
                  awaitItem()
              )
          }
      }
      
      @Test
      fun `loadUsers should emit error state when repository fails`() = runTest {
          // Arrange
          val errorMessage = "Network error"
          whenever(getUsersUseCase()).thenReturn(Resource.Error(NetworkError.NoInternet))
          
          // Act & Assert
          viewModel.uiState.test {
              assertEquals(UserListUiState(), awaitItem())
              
              viewModel.loadUsers()
              
              assertEquals(
                  UserListUiState(isLoading = true),
                  awaitItem()
              )
              
              val finalState = awaitItem()
              assertEquals(false, finalState.isLoading)
              assertEquals("No internet connection", finalState.error)
          }
      }
      
      @Test
      fun `onSearchQueryChanged should update search query`() = runTest {
          // Arrange
          val searchQuery = "John"
          
          // Act
          viewModel.onSearchQueryChanged(searchQuery)
          
          // Assert
          viewModel.uiState.test {
              val state = awaitItem()
              assertEquals(searchQuery, state.searchQuery)
          }
      }
      
      @Test
      fun `deleteSelectedUsers should remove users and refresh list`() = runTest {
          // Arrange
          val user1 = User("1", "John", "john@example.com", null)
          val user2 = User("2", "Jane", "jane@example.com", null)
          val updatedUsers = listOf(user2)
          
          whenever(deleteUserUseCase("1")).thenReturn(Resource.Success(Unit))
          whenever(getUsersUseCase()).thenReturn(Resource.Success(updatedUsers))
          
          // Set initial state with selected user
          viewModel.onUserSelected(user1)
          
          // Act
          viewModel.deleteSelectedUsers()
          
          // Assert
          verify(deleteUserUseCase).invoke("1")
          verify(getUsersUseCase, times(2)).invoke() // Initial load + refresh after delete
      }
  }
  ```

### Compose UI Testing
- **Composable Testing**
  ```kotlin
  // build.gradle (androidTest dependencies)
  androidTestImplementation 'androidx.compose.ui:ui-test-junit4:1.5.8'
  androidTestImplementation 'androidx.test.ext:junit:1.1.5'
  androidTestImplementation 'androidx.test.espresso:espresso-core:3.5.1'
  debugImplementation 'androidx.compose.ui:ui-test-manifest:1.5.8'
  
  @RunWith(AndroidJUnit4::class)
  class UserCardTest {
      
      @get:Rule
      val composeTestRule = createComposeRule()
      
      @Test
      fun userCard_displaysUserInformation() {
          // Arrange
          val user = User(
              id = "1",
              name = "John Doe",
              email = "john@example.com",
              avatarUrl = null
          )
          
          // Act
          composeTestRule.setContent {
              MyAppTheme {
                  UserCard(
                      user = user,
                      onClick = {}
                  )
              }
          }
          
          // Assert
          composeTestRule
              .onNodeWithText("John Doe")
              .assertIsDisplayed()
          
          composeTestRule
              .onNodeWithText("john@example.com")
              .assertIsDisplayed()
      }
      
      @Test
      fun userCard_triggersClickCallback() {
          // Arrange
          val user = User("1", "John Doe", "john@example.com", null)
          var clickedUser: User? = null
          
          // Act
          composeTestRule.setContent {
              MyAppTheme {
                  UserCard(
                      user = user,
                      onClick = { clickedUser = user }
                  )
              }
          }
          
          composeTestRule
              .onNodeWithText("John Doe")
              .performClick()
          
          // Assert
          assertEquals(user, clickedUser)
      }
      
      @Test
      fun userCard_hasCorrectSemantics() {
          val user = User("1", "John Doe", "john@example.com", null)
          
          composeTestRule.setContent {
              MyAppTheme {
                  UserCard(user = user, onClick = {})
              }
          }
          
          composeTestRule
              .onNodeWithContentDescription("User avatar")
              .assertIsDisplayed()
          
          composeTestRule
              .onNode(hasClickAction())
              .assertIsDisplayed()
      }
  }
  
  @RunWith(AndroidJUnit4::class)
  class UserListScreenTest {
      
      @get:Rule
      val composeTestRule = createComposeRule()
      
      private lateinit var mockViewModel: UserListViewModel
      
      @Before
      fun setup() {
          mockViewModel = mockk()
      }
      
      @Test
      fun userListScreen_displaysLoadingState() {
          // Arrange
          val loadingState = UserListUiState(isLoading = true)
          every { mockViewModel.uiState } returns MutableStateFlow(loadingState)
          every { mockViewModel.filteredUsers } returns MutableStateFlow(emptyList())
          
          // Act
          composeTestRule.setContent {
              MyAppTheme {
                  UserListScreen(viewModel = mockViewModel)
              }
          }
          
          // Assert
          composeTestRule
              .onNodeWithTag("loading_indicator")
              .assertIsDisplayed()
      }
      
      @Test
      fun userListScreen_displaysUserList() {
          // Arrange
          val users = listOf(
              User("1", "John Doe", "john@example.com", null),
              User("2", "Jane Smith", "jane@example.com", null)
          )
          val successState = UserListUiState(
              users = users,
              isLoading = false,
              error = null
          )
          every { mockViewModel.uiState } returns MutableStateFlow(successState)
          every { mockViewModel.filteredUsers } returns MutableStateFlow(users)
          
          // Act
          composeTestRule.setContent {
              MyAppTheme {
                  UserListScreen(viewModel = mockViewModel)
              }
          }
          
          // Assert
          composeTestRule
              .onNodeWithText("John Doe")
              .assertIsDisplayed()
          
          composeTestRule
              .onNodeWithText("Jane Smith")
              .assertIsDisplayed()
      }
      
      @Test
      fun userListScreen_handlesSearch() {
          // Arrange
          val users = listOf(
              User("1", "John Doe", "john@example.com", null)
          )
          val state = UserListUiState(users = users)
          every { mockViewModel.uiState } returns MutableStateFlow(state)
          every { mockViewModel.filteredUsers } returns MutableStateFlow(users)
          every { mockViewModel.onSearchQueryChanged(any()) } just Runs
          
          // Act
          composeTestRule.setContent {
              MyAppTheme {
                  UserListScreen(viewModel = mockViewModel)
              }
          }
          
          composeTestRule
              .onNodeWithTag("search_field")
              .performTextInput("John")
          
          // Assert
          verify { mockViewModel.onSearchQueryChanged("John") }
      }
      
      @Test
      fun userListScreen_displaysErrorState() {
          // Arrange
          val errorState = UserListUiState(
              isLoading = false,
              error = "Network error occurred"
          )
          every { mockViewModel.uiState } returns MutableStateFlow(errorState)
          every { mockViewModel.filteredUsers } returns MutableStateFlow(emptyList())
          every { mockViewModel.retryLoad() } just Runs
          
          // Act
          composeTestRule.setContent {
              MyAppTheme {
                  UserListScreen(viewModel = mockViewModel)
              }
          }
          
          // Assert
          composeTestRule
              .onNodeWithText("Network error occurred")
              .assertIsDisplayed()
          
          composeTestRule
              .onNodeWithText("Retry")
              .assertIsDisplayed()
              .performClick()
          
          verify { mockViewModel.retryLoad() }
      }
  }
  ```

### Integration Testing
- **Navigation Testing**
  ```kotlin
  @RunWith(AndroidJUnit4::class)
  class NavigationTest {
      
      @get:Rule
      val composeTestRule = createComposeRule()
      
      private lateinit var navController: TestNavHostController
      
      @Before
      fun setupNavHost() {
          composeTestRule.setContent {
              navController = TestNavHostController(LocalContext.current).apply {
                  navigatorProvider.addNavigator(ComposeNavigator())
              }
              MyAppTheme {
                  MyAppNavHost(navController = navController)
              }
          }
      }
      
      @Test
      fun myAppNavHost_verifyStartDestination() {
          composeTestRule
              .onNodeWithTag("home_screen")
              .assertIsDisplayed()
      }
      
      @Test
      fun myAppNavHost_navigateToUserDetail() {
          // Navigate to user list
          composeTestRule
              .onNodeWithText("Users")
              .performClick()
          
          // Click on first user
          composeTestRule
              .onNodeWithText("John Doe")
              .performClick()
          
          // Verify navigation to user detail
          composeTestRule
              .onNodeWithTag("user_detail_screen")
              .assertIsDisplayed()
          
          // Verify correct route
          assertEquals(
              "user_detail/1",
              navController.currentBackStackEntry?.destination?.route
          )
      }
      
      @Test
      fun myAppNavHost_navigateBackFromUserDetail() {
          // Navigate to user detail
          navController.navigate("user_detail/1")
          
          composeTestRule
              .onNodeWithContentDescription("Navigate back")
              .performClick()
          
          // Verify back navigation
          composeTestRule
              .onNodeWithTag("user_list_screen")
              .assertIsDisplayed()
      }
      
      @Test
      fun myAppNavHost_bottomNavigationWorks() {
          // Test bottom navigation
          composeTestRule
              .onNodeWithText("Search")
              .performClick()
          
          composeTestRule
              .onNodeWithTag("search_screen")
              .assertIsDisplayed()
          
          composeTestRule
              .onNodeWithText("Profile")
              .performClick()
          
          composeTestRule
              .onNodeWithTag("profile_screen")
              .assertIsDisplayed()
      }
  }
  ```

### Screenshot Testing
- **Visual Regression Testing**
  ```kotlin
  // build.gradle
  androidTestImplementation 'com.github.sergio-sastre.ComposableScreenshotTester:core:0.0.5'
  
  @RunWith(AndroidJUnit4::class)
  class ScreenshotTest {
      
      @get:Rule
      val composeTestRule = createComposeRule()
      
      @Test
      fun userCard_lightTheme_screenshot() {
          val user = User("1", "John Doe", "john@example.com", null)
          
          composeTestRule.setContent {
              MyAppTheme(darkTheme = false) {
                  Surface {
                      UserCard(
                          user = user,
                          onClick = {}
                      )
                  }
              }
          }
          
          composeTestRule
              .onNodeWithTag("user_card")
              .captureToImage()
              .assertAgainstGolden("user_card_light")
      }
      
      @Test
      fun userCard_darkTheme_screenshot() {
          val user = User("1", "John Doe", "john@example.com", null)
          
          composeTestRule.setContent {
              MyAppTheme(darkTheme = true) {
                  Surface {
                      UserCard(
                          user = user,
                          onClick = {}
                      )
                  }
              }
          }
          
          composeTestRule
              .onNodeWithTag("user_card")
              .captureToImage()
              .assertAgainstGolden("user_card_dark")
      }
      
      @Test
      fun userListScreen_emptyState_screenshot() {
          val emptyState = UserListUiState(
              users = emptyList(),
              isLoading = false,
              error = null
          )
          
          composeTestRule.setContent {
              MyAppTheme {
                  UserListContent(
                      uiState = emptyState,
                      filteredUsers = emptyList(),
                      onSearchQueryChanged = {},
                      onUserClick = {},
                      onRefresh = {}
                  )
              }
          }
          
          composeTestRule
              .onRoot()
              .captureToImage()
              .assertAgainstGolden("user_list_empty")
      }
      
      @Test
      fun userListScreen_loadingState_screenshot() {
          val loadingState = UserListUiState(isLoading = true)
          
          composeTestRule.setContent {
              MyAppTheme {
                  UserListContent(
                      uiState = loadingState,
                      filteredUsers = emptyList(),
                      onSearchQueryChanged = {},
                      onUserClick = {},
                      onRefresh = {}
                  )
              }
          }
          
          composeTestRule
              .onRoot()
              .captureToImage()
              .assertAgainstGolden("user_list_loading")
      }
  }
  ```

**🛠️ Proyecto:** Suite completa de tests para app Compose

---

## 🚀 **Fase 12: Advanced Topics y Performance (Ongoing)**

### Performance Optimization
- **Recomposition Optimization**
  ```kotlin
  // Avoid unnecessary recompositions
  @Composable
  fun OptimizedUserList(
      users: List<User>,
      onUserClick: (User) -> Unit
  ) {
      LazyColumn {
          items(
              items = users,
              key = { user -> user.id } // Important for performance
          ) { user ->
              // Extract to separate composable to limit recomposition scope
              UserListItem(
                  user = user,
                  onClick = remember { { onUserClick(user) } } // Stable callback
              )
          }
      }
  }
  
  @Composable
  private fun UserListItem(
      user: User,
      onClick: () -> Unit
  ) {
      // Use remember for expensive calculations
      val formattedDate = remember(user.createdAt) {
          SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()).format(user.createdAt)
      }
      
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(8.dp)
              .clickable { onClick() }
      ) {
          Row(
              modifier = Modifier.padding(16.dp),
              verticalAlignment = Alignment.CenterVertically
          ) {
              AsyncImage(
                  model = user.avatarUrl,
                  contentDescription = null,
                  modifier = Modifier
                      .size(48.dp)
                      .clip(CircleShape)
              )
              
              Spacer(modifier = Modifier.width(16.dp))
              
              Column(modifier = Modifier.weight(1f)) {
                  Text(
                      text = user.name,
                      style = MaterialTheme.typography.titleMedium
                  )
                  Text(
                      text = user.email,
                      style = MaterialTheme.typography.bodyMedium
                  )
                  Text(
                      text = formattedDate,
                      style = MaterialTheme.typography.bodySmall
                  )
              }
          }
      }
  }
  
  // Use derivedStateOf for computed values
  @Composable
  fun SearchableUserList(
      users: List<User>,
      searchQuery: String
  ) {
      val filteredUsers by remember {
          derivedStateOf {
              if (searchQuery.isEmpty()) {
                  users
              } else {
                  users.filter { user ->
                      user.name.contains(searchQuery, ignoreCase = true) ||
                      user.email.contains(searchQuery, ignoreCase = true)
                  }
              }
          }
      }
      
      LazyColumn {
          items(filteredUsers, key = { it.id }) { user ->
              UserListItem(
                  user = user,
                  onClick = { /* Handle click */ }
              )
          }
      }
  }
  
  // Stable collections to avoid recompositions
  @Immutable
  data class UserListState(
      val users: ImmutableList<User> = persistentListOf(),
      val isLoading: Boolean = false,
      val error: String? = null
  )
  
  // Use @Stable for frequently changing parameters
  @Stable
  interface UserActions {
      fun onUserClick(user: User)
      fun onUserEdit(user: User)
      fun onUserDelete(userId: String)
  }
  ```

### Custom Components
- **Reusable Custom Composables**
  ```kotlin
  // Custom Button with loading state
  @Composable
  fun LoadingButton(
      onClick: () -> Unit,
      modifier: Modifier = Modifier,
      enabled: Boolean = true,
      isLoading: Boolean = false,
      colors: ButtonColors = ButtonDefaults.buttonColors(),
      contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
      content: @Composable RowScope.() -> Unit
  ) {
      Button(
          onClick = onClick,
          modifier = modifier,
          enabled = enabled && !isLoading,
          colors = colors,
          contentPadding = contentPadding
      ) {
          if (isLoading) {
              CircularProgressIndicator(
                  modifier = Modifier.size(16.dp),
                  strokeWidth = 2.dp,
                  color = colors.contentColor
              )
              Spacer(modifier = Modifier.width(8.dp))
          }
          content()
      }
  }
  
  // Custom TextField with validation
  @Composable
  fun ValidatedTextField(
      value: String,
      onValueChange: (String) -> Unit,
      label: String,
      modifier: Modifier = Modifier,
      validator: (String) -> ValidationResult = { ValidationResult.Valid },
      keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
      keyboardActions: KeyboardActions = KeyboardActions.Default,
      visualTransformation: VisualTransformation = VisualTransformation.None,
      leadingIcon: @Composable (() -> Unit)? = null,
      trailingIcon: @Composable (() -> Unit)? = null
  ) {
      var hasBeenFocused by remember { mutableStateOf(false) }
      val validationResult = remember(value) { validator(value) }
      val showError = hasBeenFocused && validationResult is ValidationResult.Invalid
      
      OutlinedTextField(
          value = value,
          onValueChange = onValueChange,
          label = { Text(label) },
          modifier = modifier
              .onFocusChanged { focusState ->
                  if (focusState.isFocused) {
                      hasBeenFocused = true
                  }
              },
          isError = showError,
          supportingText = {
              if (showError) {
                  Text(
                      text = (validationResult as ValidationResult.Invalid).message,
                      color = MaterialTheme.colorScheme.error
                  )
              }
          },
          keyboardOptions = keyboardOptions,
          keyboardActions = keyboardActions,
          visualTransformation = visualTransformation,
          leadingIcon = leadingIcon,
          trailingIcon = trailingIcon
      )
  }
  
  sealed class ValidationResult {
      object Valid : ValidationResult()
      data class Invalid(val message: String) : ValidationResult()
  }
  
  // Custom Card with shimmer loading
  @Composable
  fun ShimmerCard(
      modifier: Modifier = Modifier,
      isLoading: Boolean = true
  ) {
      Card(modifier = modifier) {
          Row(
              modifier = Modifier.padding(16.dp),
              verticalAlignment = Alignment.CenterVertically
          ) {
              Box(
                  modifier = Modifier
                      .size(48.dp)
                      .clip(CircleShape)
                      .shimmer(isLoading)
              )
              
              Spacer(modifier = Modifier.width(16.dp))
              
              Column(modifier = Modifier.weight(1f)) {
                  Box(
                      modifier = Modifier
                          .fillMaxWidth(0.7f)
                          .height(16.dp)
                          .shimmer(isLoading)
                  )
                  Spacer(modifier = Modifier.height(8.dp))
                  Box(
                      modifier = Modifier
                          .fillMaxWidth(0.5f)
                          .height(14.dp)
                          .shimmer(isLoading)
                  )
              }
          }
      }
  }
  
  // Custom Bottom Sheet
  @OptIn(ExperimentalMaterial3Api::class)
  @Composable
  fun CustomBottomSheet(
      isVisible: Boolean,
      onDismiss: () -> Unit,
      content: @Composable ColumnScope.() -> Unit
  ) {
      val bottomSheetState = rememberModalBottomSheetState(
          skipPartiallyExpanded = true
      )
      
      LaunchedEffect(isVisible) {
          if (isVisible) {
              bottomSheetState.show()
          } else {
              bottomSheetState.hide()
          }
      }
      
      if (isVisible) {
          ModalBottomSheet(
              onDismissRequest = onDismiss,
              sheetState = bottomSheetState,
              modifier = Modifier.fillMaxHeight(0.8f)
          ) {
              Column(
                  modifier = Modifier
                      .fillMaxWidth()
                      .padding(16.dp),
                  content = content
              )
          }
      }
  }
  ```

### Advanced Architecture Patterns
- **MVI Architecture**
  ```kotlin
  // MVI State
  data class UserListViewState(
      val users: List<User> = emptyList(),
      val isLoading: Boolean = false,
      val error: String? = null,
      val searchQuery: String = "",
      val selectedUsers: Set<String> = emptySet(),
      val isSelectionMode: Boolean = false
  ) {
      val filteredUsers: List<User>
          get() = users.filter { user ->
              searchQuery.isEmpty() || 
              user.name.contains(searchQuery, ignoreCase = true) ||
              user.email.contains(searchQuery, ignoreCase = true)
          }
  }
  
  // MVI Intent
  sealed class UserListIntent {
      object LoadUsers : UserListIntent()
      object RefreshUsers : UserListIntent()
      data class SearchUsers(val query: String) : UserListIntent()
      data class SelectUser(val userId: String) : UserListIntent()
      object ClearSelection : UserListIntent()
      object DeleteSelectedUsers : UserListIntent()
      data class NavigateToUser(val userId: String) : UserListIntent()
  }
  
  // MVI Effect (One-time events)
  sealed class UserListEffect {
      data class NavigateToUserDetail(val userId: String) : UserListEffect()
      data class ShowSnackbar(val message: String) : UserListEffect()
      object ShowDeleteConfirmation : UserListEffect()
  }
  
  // MVI ViewModel
  class UserListViewModel(
      private val userRepository: UserRepository
  ) : ViewModel() {
      
      private val _viewState = MutableStateFlow(UserListViewState())
      val viewState: StateFlow<UserListViewState> = _viewState.asStateFlow()
      
      private val _effect = Channel<UserListEffect>(Channel.BUFFERED)
      val effect = _effect.receiveAsFlow()
      
      fun handleIntent(intent: UserListIntent) {
          when (intent) {
              is UserListIntent.LoadUsers -> loadUsers()
              is UserListIntent.RefreshUsers -> refreshUsers()
              is UserListIntent.SearchUsers -> updateSearchQuery(intent.query)
              is UserListIntent.SelectUser -> selectUser(intent.userId)
              is UserListIntent.ClearSelection -> clearSelection()
              is UserListIntent.DeleteSelectedUsers -> deleteSelectedUsers()
              is UserListIntent.NavigateToUser -> navigateToUser(intent.userId)
          }
      }
      
      private fun loadUsers() {
          viewModelScope.launch {
              _viewState.value = _viewState.value.copy(isLoading = true)
              
              when (val result = userRepository.getUsers()) {
                  is Resource.Success -> {
                      _viewState.value = _viewState.value.copy(
                          users = result.data,
                          isLoading = false,
                          error = null
                      )
                  }
                  is Resource.Error -> {
                      _viewState.value = _viewState.value.copy(
                          isLoading = false,
                          error = result.error.message
                      )
                  }
                  is Resource.Loading -> {
                      _viewState.value = _viewState.value.copy(isLoading = true)
                  }
              }
          }
      }
      
      private fun updateSearchQuery(query: String) {
          _viewState.value = _viewState.value.copy(searchQuery = query)
      }
      
      private fun selectUser(userId: String) {
          val currentSelection = _viewState.value.selectedUsers.toMutableSet()
          if (currentSelection.contains(userId)) {
              currentSelection.remove(userId)
          } else {
              currentSelection.add(userId)
          }
          
          _viewState.value = _viewState.value.copy(
              selectedUsers = currentSelection,
              isSelectionMode = currentSelection.isNotEmpty()
          )
      }
      
      private fun clearSelection() {
          _viewState.value = _viewState.value.copy(
              selectedUsers = emptySet(),
              isSelectionMode = false
          )
      }
      
      private fun deleteSelectedUsers() {
          viewModelScope.launch {
              _effect.send(UserListEffect.ShowDeleteConfirmation)
          }
      }
      
      private fun navigateToUser(userId: String) {
          viewModelScope.launch {
              _effect.send(UserListEffect.NavigateToUserDetail(userId))
          }
      }
  }
  
  // MVI Screen
  @Composable
  fun UserListScreen(
      viewModel: UserListViewModel = hiltViewModel(),
      onNavigateToUserDetail: (String) -> Unit = {}
  ) {
      val viewState by viewModel.viewState.collectAsState()
      
      // Handle one-time effects
      LaunchedEffect(Unit) {
          viewModel.effect.collect { effect ->
              when (effect) {
                  is UserListEffect.NavigateToUserDetail -> {
                      onNavigateToUserDetail(effect.userId)
                  }
                  is UserListEffect.ShowSnackbar -> {
                      // Show snackbar
                  }
                  is UserListEffect.ShowDeleteConfirmation -> {
                      // Show delete confirmation dialog
                  }
              }
          }
      }
      
      // Initial load
      LaunchedEffect(Unit) {
          viewModel.handleIntent(UserListIntent.LoadUsers)
      }
      
      UserListContent(
          viewState = viewState,
          onIntent = viewModel::handleIntent
      )
  }
  
  @Composable
  private fun UserListContent(
      viewState: UserListViewState,
      onIntent: (UserListIntent) -> Unit
  ) {
      Column(modifier = Modifier.fillMaxSize()) {
          // Search bar
          OutlinedTextField(
              value = viewState.searchQuery,
              onValueChange = { onIntent(UserListIntent.SearchUsers(it)) },
              label = { Text("Search users") },
              modifier = Modifier
                  .fillMaxWidth()
                  .padding(16.dp)
          )
          
          // User list
          when {
              viewState.isLoading && viewState.users.isEmpty() -> {
                  LoadingContent()
              }
              viewState.error != null && viewState.users.isEmpty() -> {
                  ErrorContent(
                      message = viewState.error,
                      onRetry = { onIntent(UserListIntent.LoadUsers) }
                  )
              }
              else -> {
                  LazyColumn {
                      items(
                          items = viewState.filteredUsers,
                          key = { it.id }
                      ) { user ->
                          UserListItem(
                              user = user,
                              isSelected = view      private val _uiState = MutableStateFlow(UserListUiState())
      val uiState: StateFlow<UserListUiState> = _uiState.asStateFlow()
      
      fun loadUsers(refresh: Boolean = false) {
          viewModelScope.launch {
              if (!refresh) {
                  _uiState.value = _uiState.value.copy(isLoading = true)
              } else {
                  _uiState.value = _uiState.value.copy(isRefreshing = true)
              }
              
              when (val result = userRepository.getUsers()) {
                  is Resource.Success -> {
                      _uiState.value = _uiState.value.copy(
                          users = result.data,
                          isLoading = false,
                          isRefreshing = false,
                          error = null
                      )
                  }
                  is Resource.Error -> {
                      val errorMessage = when (result.error) {
                          NetworkError.NoInternet -> "No internet connection"
                          NetworkError.Timeout -> "Request timeout"
                          NetworkError.ServerError -> "Server error occurred"
                          is NetworkError.HttpError -> result.error.message
                          is NetworkError.UnknownError -> "Unknown error occurred"
                      }
                      
                      _uiState.value = _uiState.value.copy(
                          isLoading = false,
                          isRefreshing = false,
                          error = errorMessage
                      )
                  }
                  is Resource.Loading -> {
                      // Already handled above
                  }
              }
          }
      }
      
      fun retryLoad() {
          loadUsers(refresh = false)
      }
      
      fun refreshData() {
          loadUsers(refresh = true)
      }
  }
  
  data class UserListUiState(
      val users: List<User> = emptyList(),
      val isLoading: Boolean = false,
      val isRefreshing: Boolean = false,
      val error: String? = null
  )
  ```

### Image Loading con Coil
- **Image Loading Implementation**
  ```kotlin
  // build.gradle
  implementation "io.coil-kt:coil-compose:2.5.0"
  
  @Composable
  fun UserCard(
      user: User,
      onClick: () -> Unit = {}
  ) {
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(8.dp)
              .clickable { onClick() }
      ) {
          Row(
              modifier = Modifier.padding(16.dp),
              verticalAlignment = Alignment.CenterVertically
          ) {
              // User avatar with Coil
              AsyncImage(
                  model = ImageRequest.Builder(LocalContext.current)
                      .data(user.avatarUrl)
                      .crossfade(true)
                      .placeholder(R.drawable.ic_person_placeholder)
                      .error(R.drawable.ic_person_error)
                      .transformations(
                          CircleCropTransformation()
                      )
                      .build(),
                  contentDescription = "User avatar",
                  contentScale = ContentScale.Crop,
                  modifier = Modifier
                      .size(48.dp)
                      .clip(CircleShape)
              )
              
              Spacer(modifier = Modifier.width(16.dp))
              
              Column(modifier = Modifier.weight(1f)) {
                  Text(
                      text = user.name,
                      style = MaterialTheme.typography.titleMedium
                  )
                  Text(
                      text = user.email,
                      style = MaterialTheme.typography.bodyMedium,
                      color = MaterialTheme.colorScheme.onSurfaceVariant
                  )
              }
          }
      }
  }
  
  // Custom image composable with loading states
  @Composable
  fun NetworkImage(
      imageUrl: String,
      contentDescription: String?,
      modifier: Modifier = Modifier,
      contentScale: ContentScale = ContentScale.Crop,
      placeholder: @Composable () -> Unit = {
          Box(
              modifier = Modifier.fillMaxSize(),
              contentAlignment = Alignment.Center
          ) {
              CircularProgressIndicator()
          }
      },
      error: @Composable () -> Unit = {
          Box(
              modifier = Modifier.fillMaxSize(),
              contentAlignment = Alignment.Center
          ) {
              Icon(
                  Icons.Default.BrokenImage,
                  contentDescription = "Error loading image",
                  tint = MaterialTheme.colorScheme.error
              )
          }
      }
  ) {
      var isLoading by remember { mutableStateOf(true) }
      var isError by remember { mutableStateOf(false) }
      
      Box(modifier = modifier) {
          AsyncImage(
              model = ImageRequest.Builder(LocalContext.current)
                  .data(imageUrl)
                  .crossfade(true)
                  .listener(
                      onStart = { 
                          isLoading = true 
                          isError = false
                      },
                      onSuccess = { _, _ -> 
                          isLoading = false 
                          isError = false
                      },
                      onError = { _, _ -> 
                          isLoading = false 
                          isError = true
                      }
                  )
                  .build(),
              contentDescription = contentDescription,
              contentScale = contentScale,
              modifier = Modifier.fillMaxSize()
          )
          
          if (isLoading) {
              placeholder()
          }
          
          if (isError) {
              error()
          }
      }
  }
  ```

### Paging 3 Integration
- **Infinite Scrolling**
  ```kotlin
  // build.gradle
  implementation "androidx.paging:paging-runtime-ktx:3.2.1"
  implementation "androidx.paging:paging-compose:3.3.0-alpha02"
  
  // Paging Source
  class UserPagingSource(
      private val apiService: ApiService,
      private val query: String
  ) : PagingSource<Int, User>() {
      
      override suspend fun load(params: LoadParams<Int>): LoadResult<Int, User> {
          return try {
              val page = params.key ?: 1
              val response = apiService.getUsers(
                  page = page,
                  limit = params.loadSize,
                  search = query.takeIf { it.isNotBlank() }
              )
              
              if (response.success && response.data != null) {
                  LoadResult.Page(
                      data = response.data,
                      prevKey = if (page == 1) null else page - 1,
                      nextKey = if (response.data.isEmpty()) null else page + 1
                  )
              } else {
                  LoadResult.Error(Exception(response.message))
              }
          } catch (e: Exception) {
              LoadResult.Error(e)
          }
      }
      
      override fun getRefreshKey(state: PagingState<Int, User>): Int? {
          return state.anchorPosition?.let { anchorPosition ->
              val anchorPage = state.closestPageToPosition(anchorPosition)
              anchorPage?.prevKey?.plus(1) ?: anchorPage?.nextKey?.minus(1)
          }
      }
  }
  
  // Repository with Paging
  class UserRepository(
      private val apiService: ApiService
  ) {
      fun getUsersPaged(query: String): Flow<PagingData<User>> {
          return Pager(
              config = PagingConfig(
                  pageSize = 20,
                  enablePlaceholders = false,
                  prefetchDistance = 5
              ),
              pagingSourceFactory = { UserPagingSource(apiService, query) }
          ).flow
      }
  }
  
  // ViewModel with Paging
  class UserListViewModel(
      private val userRepository: UserRepository
  ) : ViewModel() {
      
      private val _searchQuery = MutableStateFlow("")
      val searchQuery: StateFlow<String> = _searchQuery.asStateFlow()
      
      val usersPagingFlow = searchQuery
          .debounce(300) // Debounce search queries
          .distinctUntilChanged()
          .flatMapLatest { query ->
              userRepository.getUsersPaged(query)
          }
          .cachedIn(viewModelScope)
      
      fun onSearchQueryChanged(query: String) {
          _searchQuery.value = query
      }
  }
  
  // Composable with Paging
  @Composable
  fun UserListScreen(
      viewModel: UserListViewModel = hiltViewModel()
  ) {
      val searchQuery by viewModel.searchQuery.collectAsState()
      val usersPagingItems = viewModel.usersPagingFlow.collectAsLazyPagingItems()
      
      Column(modifier = Modifier.fillMaxSize()) {
          // Search field
          OutlinedTextField(
              value = searchQuery,
              onValueChange = viewModel::onSearchQueryChanged,
              label = { Text("Search users") },
              leadingIcon = {
                  Icon(Icons.Default.Search, contentDescription = null)
              },
              modifier = Modifier
                  .fillMaxWidth()
                  .padding(16.dp)
          )
          
          // Paged list
          LazyColumn {
              items(usersPagingItems.itemCount) { index ->
                  val user = usersPagingItems[index]
                  if (user != null) {
                      UserCard(
                          user = user,
                          onClick = { /* Navigate to user detail */ }
                      )
                  } else {
                      // Placeholder while loading
                      UserCardPlaceholder()
                  }
              }
              
              // Loading state for pagination
              when (usersPagingItems.loadState.append) {
                  is LoadState.Loading -> {
                      item {
                          Box(
                              modifier = Modifier
                                  .fillMaxWidth()
                                  .padding(16.dp),
                              contentAlignment = Alignment.Center
                          ) {
                              CircularProgressIndicator()
                          }
                      }
                  }
                  is LoadState.Error -> {
                      item {
                          PagingErrorItem(
                              message = "Error loading more items",
                              onRetry = { usersPagingItems.retry() }
                          )
                      }
                  }
                  is LoadState.NotLoading -> {
                      // No more items to load
                  }
              }
          }
          
          // Pull to refresh
          val pullRefreshState = rememberPullRefreshState(
              refreshing = usersPagingItems.loadState.refresh is LoadState.Loading,
              onRefresh = { usersPagingItems.refresh() }
          )
          
          Box(modifier = Modifier.pullRefresh(pullRefreshState)) {
              // List content here
              
              PullRefreshIndicator(
                  refreshing = usersPagingItems.loadState.refresh is LoadState.Loading,
                  state = pullRefreshState,
                  modifier = Modifier.align(Alignment.TopCenter)
              )
          }
      }
      
      // Handle loading states
      when (usersPagingItems.loadState.refresh) {
          is LoadState.Loading -> {
              if (usersPagingItems.itemCount == 0) {
                  LoadingScreen()
              }
          }
          is LoadState.Error -> {
              if (usersPagingItems.itemCount == 0) {
                  ErrorScreen(
                      message = "Failed to load users",
                      onRetry = { usersPagingItems.refresh() }
                  )
              }
          }
          is LoadState.NotLoading -> {
              if (usersPagingItems.itemCount == 0) {
                  EmptyScreen(message = "No users found")
              }
          }
      }
  }
  
  @Composable
  fun UserCardPlaceholder() {
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(8.dp)
      ) {
          Row(
              modifier = Modifier.padding(16.dp),
              verticalAlignment = Alignment.CenterVertically
          ) {
              // Avatar placeholder
              Box(
                  modifier = Modifier
                      .size(48.dp)
                      .clip(CircleShape)
                      .shimmer()
              )
              
              Spacer(modifier = Modifier.width(16.dp))
              
              Column(modifier = Modifier.weight(1f)) {
                  Box(
                      modifier = Modifier
                          .fillMaxWidth(0.7f)
                          .height(16.dp)
                          .shimmer()
                  )
                  Spacer(modifier = Modifier.height(8.dp))
                  Box(
                      modifier = Modifier
                          .fillMaxWidth(0.5f)
                          .height(14.dp)
                          .shimmer()
                  )
              }
          }
      }
  }
  
  @Composable
  fun PagingErrorItem(
      message: String,
      onRetry: () -> Unit
  ) {
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(16.dp)
      ) {
          Column(
              modifier = Modifier.padding(16.dp),
              horizontalAlignment = Alignment.CenterHorizontally
          ) {
              Text(
                  text = message,
                  style = MaterialTheme.typography.bodyMedium,
                  color = MaterialTheme.colorScheme.error
              )
              Spacer(modifier = Modifier.height(8.dp))
              TextButton(onClick = onRetry) {
                  Text("Retry")
              }
          }
      }
  }
  
  // Shimmer effect extension
  fun Modifier.shimmer(): Modifier = composed {
      var size by remember { mutableStateOf(IntSize.Zero) }
      val transition = rememberInfiniteTransition()
      val startOffsetX by transition.animateFloat(
          initialValue = -2 * size.width.toFloat(),
          targetValue = 2 * size.width.toFloat(),
          animationSpec = infiniteRepeatable(
              animation = tween(1000)
          )
      )
      
      background(
          brush = Brush.linearGradient(
              colors = listOf(
                  Color(0xFFB8B5B5),
                  Color(0xFF8F8B8B),
                  Color(0xFFB8B5B5),
              ),
              start = Offset(startOffsetX, 0f),
              end = Offset(startOffsetX + size.width.toFloat(), size.height.toFloat())
          )
      )
          .onGloballyPositioned {
              size = it.size
          }
  }
  ```

**🛠️ Proyecto:** App con API REST completa, paginación infinita e imágenes

---

## 🎬 **Fase 10: Animations y Gestures (5-6 semanas)**

### Basic Animations
- **Animate*AsState APIs**
  ```kotlin
  @Composable
  fun BasicAnimations() {
      var isExpanded by remember { mutableStateOf(false) }
      var isSelected by remember { mutableStateOf(false) }
      var isVisible by remember { mutableStateOf(true) }
      
      // Animated values
      val size by animateDpAsState(
          targetValue = if (isExpanded) 200.dp else 100.dp,
          animationSpec = tween(
              durationMillis = 500,
              easing = FastOutSlowInEasing
          )
      )
      
      val color by animateColorAsState(
          targetValue = if (isSelected) Color.Red else Color.Blue,
          animationSpec = tween(300)
      )
      
      val alpha by animateFloatAsState(
          targetValue = if (isVisible) 1f else 0f,
          animationSpec = tween(400)
      )
      
      val rotation by animateFloatAsState(
          targetValue = if (isExpanded) 180f else 0f,
          animationSpec = spring(
              dampingRatio = Spring.DampingRatioMediumBouncy,
              stiffness = Spring.StiffnessLow
          )
      )
      
      Column(
          modifier = Modifier
              .fillMaxSize()
              .padding(32.dp),
          horizontalAlignment = Alignment.CenterHorizontally,
          verticalArrangement = Arrangement.spacedBy(20.dp)
      ) {
          // Animated box
          Box(
              modifier = Modifier
                  .size(size)
                  .background(color, RoundedCornerShape(8.dp))
                  .alpha(alpha)
                  .rotate(rotation)
                  .clickable { isExpanded = !isExpanded },
              contentAlignment = Alignment.Center
          ) {
              Text(
                  text = "Tap me!",
                  color = Color.White,
                  fontWeight = FontWeight.Bold
              )
          }
          
          // Control buttons
          Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
              Button(onClick = { isExpanded = !isExpanded }) {
                  Text(if (isExpanded) "Shrink" else "Expand")
              }
              Button(onClick = { isSelected = !isSelected }) {
                  Text(if (isSelected) "Deselect" else "Select")
              }
              Button(onClick = { isVisible = !isVisible }) {
                  Text(if (isVisible) "Hide" else "Show")
              }
          }
      }
  }
  ```

### Advanced Animations
- **Transition y AnimatedContent**
  ```kotlin
  @Composable
  fun AdvancedAnimations() {
      var currentState by remember { mutableStateOf(AnimationState.LOADING) }
      
      // Transition between states
      val transition = updateTransition(targetState = currentState, label = "state")
      
      val backgroundColor by transition.animateColor(
          transitionSpec = { tween(500) },
          label = "background"
      ) { state ->
          when (state) {
              AnimationState.LOADING -> Color.Gray
              AnimationState.SUCCESS -> Color.Green
              AnimationState.ERROR -> Color.Red
          }
      }
      
      val iconRotation by transition.animateFloat(
          transitionSpec = { tween(500) },
          label = "rotation"
      ) { state ->
          when (state) {
              AnimationState.LOADING -> 360f
              AnimationState.SUCCESS -> 0f
              AnimationState.ERROR -> 0f
          }
      }
      
      val scale by transition.animateFloat(
          transitionSpec = { 
              if (targetState == AnimationState.SUCCESS || targetState == AnimationState.ERROR) {
                  spring(dampingRatio = Spring.DampingRatioMediumBouncy)
              } else {
                  tween(300)
              }
          },
          label = "scale"
      ) { state ->
          when (state) {
              AnimationState.LOADING -> 1f
              AnimationState.SUCCESS -> 1.2f
              AnimationState.ERROR -> 1.1f
          }
      }
      
      Column(
          modifier = Modifier.fillMaxSize(),
          horizontalAlignment = Alignment.CenterHorizontally,
          verticalArrangement = Arrangement.Center
      ) {
          // Animated content
          Card(
              modifier = Modifier
                  .size(200.dp)
                  .scale(scale),
              colors = CardDefaults.cardColors(containerColor = backgroundColor)
          ) {
              Box(
                  modifier = Modifier.fillMaxSize(),
                  contentAlignment = Alignment.Center
              ) {
                  // AnimatedContent for changing content
                  transition.AnimatedContent(
                      transitionSpec = {
                          slideInVertically { -it } + fadeIn() with
                                  slideOutVertically { it } + fadeOut()
                      }
                  ) { state ->
                      when (state) {
                          AnimationState.LOADING -> {
                              Icon(
                                  Icons.Default.Refresh,
                                  contentDescription = "Loading",
                                  modifier = Modifier
                                      .size(48.dp)
                                      .rotate(iconRotation),
                                  tint = Color.White
                              )
                          }
                          AnimationState.SUCCESS -> {
                              Icon(
                                  Icons.Default.Check,
                                  contentDescription = "Success",
                                  modifier = Modifier.size(48.dp),
                                  tint = Color.White
                              )
                          }
                          AnimationState.ERROR -> {
                              Icon(
                                  Icons.Default.Close,
                                  contentDescription = "Error",
                                  modifier = Modifier.size(48.dp),
                                  tint = Color.White
                              )
                          }
                      }
                  }
              }
          }
          
          Spacer(modifier = Modifier.height(32.dp))
          
          // Control buttons
          Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
              Button(onClick = { currentState = AnimationState.LOADING }) {
                  Text("Loading")
              }
              Button(onClick = { currentState = AnimationState.SUCCESS }) {
                  Text("Success")
              }
              Button(onClick = { currentState = AnimationState.ERROR }) {
                  Text("Error")
              }
          }
      }
  }
  
  enum class AnimationState {
      LOADING, SUCCESS, ERROR
  }
  ```

### Gesture Handling
- **Touch Gestures**
  ```kotlin
  @Composable
  fun GestureExamples() {
      var offset by remember { mutableStateOf(Offset.Zero) }
      var scale by remember { mutableStateOf(1f) }
      var rotation by remember { mutableStateOf(0f) }
      
      Box(
          modifier = Modifier.fillMaxSize(),
          contentAlignment = Alignment.Center
      ) {
          // Draggable, scalable, rotatable box
          Box(
              modifier = Modifier
                  .size(150.dp)
                  .offset { IntOffset(offset.x.roundToInt(), offset.y.roundToInt()) }
                  .scale(scale)
                  .rotate(rotation)
                  .background(
                      Color.Blue,
                      RoundedCornerShape(16.dp)
                  )
                  .pointerInput(Unit) {
                      detectTransformGestures { _, pan, zoom, rotate ->
                          offset += pan
                          scale *= zoom
                          rotation += rotate
                      }
                  },
              contentAlignment = Alignment.Center
          ) {
              Text(
                  text = "Transform me!",
                  color = Color.White,
                  fontWeight = FontWeight.Bold
              )
          }
          
          // Reset button
          FloatingActionButton(
              onClick = {
                  offset = Offset.Zero
                  scale = 1f
                  rotation = 0f
              },
              modifier = Modifier.align(Alignment.BottomEnd)
          ) {
              Icon(Icons.Default.Refresh, contentDescription = "Reset")
          }
      }
  }
  
  @Composable
  fun SwipeGestureExample() {
      var isExpanded by remember { mutableStateOf(false) }
      var swipeOffset by remember { mutableStateOf(0f) }
      
      val animatedOffset by animateFloatAsState(
          targetValue = if (isExpanded) 200f else swipeOffset,
          animationSpec = spring()
      )
      
      Box(
          modifier = Modifier
              .fillMaxWidth()
              .height(100.dp)
              .background(Color.LightGray)
      ) {
          // Background actions
          Row(
              modifier = Modifier
                  .fillMaxSize()
                  .padding(horizontal = 16.dp),
              horizontalArrangement = Arrangement.End,
              verticalAlignment = Alignment.CenterVertically
          ) {
              IconButton(
                  onClick = { /* Delete action */ },
                  modifier = Modifier
                      .background(Color.Red, CircleShape)
                      .size(40.dp)
              ) {
                  Icon(
                      Icons.Default.Delete,
                      contentDescription = "Delete",
                      tint = Color.White
                  )
              }
          }
          
          // Foreground content
          Card(
              modifier = Modifier
                  .fillMaxSize()
                  .offset { IntOffset(animatedOffset.roundToInt(), 0) }
                  .pointerInput(Unit) {
                      detectHorizontalDragGestures(
                          onDragEnd = {
                              isExpanded = swipeOffset < -100f
                              swipeOffset = 0f
                          }
                      ) { _, dragAmount ->
                          val newOffset = (swipeOffset + dragAmount).coerceAtMost(0f)
                          swipeOffset = newOffset
                      }
                  }
          ) {
              Row(
                  modifier = Modifier
                      .fillMaxSize()
                      .padding(16.dp),
                  verticalAlignment = Alignment.CenterVertically
              ) {
                  Text(
                      text = "Swipe left to reveal actions",
                      style = MaterialTheme.typography.bodyLarge
                  )
              }
          }
      }
  }
  ```

### Custom Drawing y Canvas
- **Canvas Animations**
  ```kotlin
  @Composable
  fun CustomDrawingAnimations() {
      var isAnimating by remember { mutableStateOf(false) }
      
      val infiniteTransition = rememberInfiniteTransition()
      val animatedProgress by infiniteTransition.animateFloat(
          initialValue = 0f,
          targetValue = 1f,
          animationSpec = infiniteRepeatable(
              animation = tween(2000, easing = LinearEasing),
              repeatMode = RepeatMode.Restart
          )
      )
      
      Column(
          modifier = Modifier.fillMaxSize(),
          horizontalAlignment = Alignment.CenterHorizontally,
          verticalArrangement = Arrangement.Center
      ) {
          // Custom progress indicator
          Canvas(
              modifier = Modifier.size(200.dp)
          ) {
              val canvasWidth = size.width
              val canvasHeight = size.height
              val center = Offset(canvasWidth / 2, canvasHeight / 2)
              val radius = minOf(canvasWidth, canvasHeight) / 3
              
              // Background circle
              drawCircle(
                  color = Color.LightGray,
                  radius = radius,
                  center = center,
                  style = Stroke(width = 20.dp.toPx())
              )
              
              // Progress arc
              drawArc(
                  color = Color.Blue,
                  startAngle = -90f,
                  sweepAngle = if (isAnimating) animatedProgress * 360f else 0f,
                  useCenter = false,
                  topLeft = Offset(
                      center.x - radius,
                      center.y - radius
                  ),
                  size = Size(radius * 2, radius * 2),
                  style = Stroke(
                      width = 20.dp.toPx(),
                      cap = StrokeCap.Round
                  )
              )
              
              // Center text
              drawContext.canvas.nativeCanvas.apply {
                  val text = "${(if (isAnimating) animatedProgress else 0f) * 100}%"
                  val paint = android.graphics.Paint().apply {
                      this.color = android.graphics.Color.BLUE
                      textSize = 40.sp.toPx()
                      textAlign = android.graphics.Paint.Align.CENTER
                  }
                  drawText(text, center.x, center.y + 15.dp.toPx(), paint)
              }
          }
          
          Spacer(modifier = Modifier.height(32.dp))
          
          Button(onClick = { isAnimating = !isAnimating }) {
              Text(if (isAnimating) "Stop" else "Start")
          }
      }
  }
  
  @Composable
  fun WaveAnimation() {
      val infiniteTransition = rememberInfiniteTransition()
      val animationProgress by infiniteTransition.animateFloat(
          initialValue = 0f,
          targetValue = 2 * PI.toFloat(),
          animationSpec = infiniteRepeatable(
              animation = tween(3000, easing = LinearEasing)
          )
      )
      
      Canvas(
          modifier = Modifier
              .fillMaxWidth()
              .height(200.dp)
      ) {
          val canvasWidth = size.width
          val canvasHeight = size.height
          val waveLength = canvasWidth / 2
          val amplitude = canvasHeight / 4
          val centerY = canvasHeight / 2
          
          val path = androidx.compose.ui.graphics.Path().apply {
              moveTo(0f, centerY)
              
              for (x in 0..canvasWidth.toInt()) {
                  val y = centerY + amplitude * sin((2 * PI * x / waveLength + animationProgress).toFloat())
                  lineTo(x.toFloat(), y)
              }
          }
          
          drawPath(
              path = path,
              color = Color.Blue,
              style = Stroke(width = 4.dp.toPx(), cap = StrokeCap.Round)
          )
      }
  }
  ```

**🛠️ Proyecto:** App con animaciones complejas, gestures y custom drawing

---

## ⏱️ **Timeline Detallado**

| Fase | Duración | Dedicación | Total Horas | Skills Clave |
|------|----------|------------|-------------|--------------|
| **1. Kotlin Fundamentals** | 4-6 sem | 15-20h/sem | 60-120h | OOP, Lambdas, Coroutines |
| **2. Compose Basics** | 6-8 sem | 20-25h/sem | 120-200h | Composables, Layouts, Modifiers |
| **3. State Management** | 5-6 sem | 20-25h/sem | 100-150h | State, Recomposition, Hoisting |
| **4. Forms/Input** | 4-5 sem | 15-20h/sem | 60-100h | TextField, Validation, Focus |
| **5. Lists** | 4-5 sem | 15-20h/sem | 60-100h | LazyColumn, LazyGrid, Performance |
| **6. Theming/MD3** | 4-5 sem | 15-20h/sem | 60-100h | Material 3, Colors, Typography |
| **7. Navigation** | 4-5 sem | 15-20h/sem | 60-100h | Navigation Compose, Arguments |
| **8. Architecture** | 5-6 sem | 20-25h/sem | 100-150h | ViewModel, Repository, Hilt |
| **9. Networking** | 4-5 sem | 15-20h/sem | 60-100h | Retrofit, Paging, Error Handling |
| **10. Animations** | 5-6 sem | 20-25h/sem | 100-150h | Gestures, Custom Drawing |
| **11. Testing** | 4-5 sem | 15-20h/sem | 60-100h | Unit, UI, Integration |
| **12. Advanced** | Ongoing |                                   launchSingleTop = true
                                  // Restore state when reselecting a previously selected item
                                  restoreState = true
                              }
                          }
                      )
                  }
              }
          }
      ) { paddingValues ->
          NavHost(
              navController = navController,
              startDestination = Screen.Home.route,
              modifier = Modifier.padding(paddingValues)
          ) {
              composable(Screen.Home.route) {
                  HomeScreen(navController)
              }
              
              composable(Screen.Search.route) {
                  SearchScreen(navController)
              }
              
              composable(Screen.Profile.route) {
                  ProfileScreen(
                      onNavigateToSettings = {
                          navController.navigate(Screen.Settings.route)
                      },
                      onNavigateToEdit = {
                          navController.navigate(Screen.EditProfile.route)
                      }
                  )
              }
              
              composable(
                  route = Screen.ProductDetail.route,
                  arguments = listOf(navArgument("productId") { type = NavType.StringType })
              ) { backStackEntry ->
                  val productId = backStackEntry.arguments?.getString("productId") ?: ""
                  ProductDetailScreen(
                      productId = productId,
                      onNavigateBack = { navController.popBackStack() }
                  )
              }
              
              composable(Screen.Settings.route) {
                  SettingsScreen(
                      onNavigateBack = { navController.popBackStack() }
                  )
              }
              
              composable(Screen.EditProfile.route) {
                  EditProfileScreen(
                      onNavigateBack = { navController.popBackStack() },
                      onSaveComplete = { 
                          navController.popBackStack(Screen.Profile.route, inclusive = false)
                      }
                  )
              }
          }
      }
  }
  ```

### Navigation with Arguments y Deep Linking
- **Complex Navigation Patterns**
  ```kotlin
  // Type-safe navigation with arguments
  @Serializable
  data class ProductDetailRoute(val productId: String, val category: String = "")
  
  @Serializable
  data class UserProfileRoute(val userId: String, val tab: String = "posts")
  
  @Composable
  fun TypeSafeNavigation() {
      val navController = rememberNavController()
      
      NavHost(
          navController = navController,
          startDestination = "home"
      ) {
          composable("home") {
              HomeScreen(
                  onProductClick = { productId, category ->
                      navController.navigate(
                          "product_detail/$productId?category=$category"
                      )
                  },
                  onUserClick = { userId ->
                      navController.navigate("user_profile/$userId")
                  }
              )
          }
          
          composable(
              route = "product_detail/{productId}?category={category}",
              arguments = listOf(
                  navArgument("productId") { type = NavType.StringType },
                  navArgument("category") { 
                      type = NavType.StringType
                      defaultValue = ""
                      nullable = true
                  }
              ),
              deepLinks = listOf(
                  navDeepLink { uriPattern = "myapp://product/{productId}" }
              )
          ) { backStackEntry ->
              val productId = backStackEntry.arguments?.getString("productId") ?: ""
              val category = backStackEntry.arguments?.getString("category") ?: ""
              
              ProductDetailScreen(
                  productId = productId,
                  category = category,
                  onNavigateBack = { navController.popBackStack() },
                  onRelatedProductClick = { relatedProductId ->
                      navController.navigate("product_detail/$relatedProductId")
                  }
              )
          }
          
          composable(
              route = "user_profile/{userId}?tab={tab}",
              arguments = listOf(
                  navArgument("userId") { type = NavType.StringType },
                  navArgument("tab") { 
                      type = NavType.StringType
                      defaultValue = "posts"
                  }
              )
          ) { backStackEntry ->
              val userId = backStackEntry.arguments?.getString("userId") ?: ""
              val initialTab = backStackEntry.arguments?.getString("tab") ?: "posts"
              
              UserProfileScreen(
                  userId = userId,
                  initialTab = initialTab,
                  onNavigateBack = { navController.popBackStack() }
              )
          }
      }
  }
  
  // Navigation with complex objects
  @Parcelize
  data class User(
      val id: String,
      val name: String,
      val email: String
  ) : Parcelable
  
  @Composable
  fun NavigationWithObjects() {
      val navController = rememberNavController()
      
      NavHost(
          navController = navController,
          startDestination = "user_list"
      ) {
          composable("user_list") {
              UserListScreen(
                  onUserClick = { user ->
                      // Pass complex object via SavedStateHandle
                      navController.currentBackStackEntry?.savedStateHandle?.set("user", user)
                      navController.navigate("user_detail")
                  }
              )
          }
          
          composable("user_detail") { backStackEntry ->
              val user = navController.previousBackStackEntry
                  ?.savedStateHandle
                  ?.get<User>("user")
              
              if (user != null) {
                  UserDetailScreen(
                      user = user,
                      onNavigateBack = { navController.popBackStack() }
                  )
              } else {
                  // Handle error case
                  ErrorScreen(
                      message = "User not found",
                      onNavigateBack = { navController.popBackStack() }
                  )
              }
          }
      }
  }
  ```

### Navigation Animations
- **Custom Transitions**
  ```kotlin
  @OptIn(ExperimentalAnimationApi::class)
  @Composable
  fun AnimatedNavigation() {
      val navController = rememberNavController()
      
      NavHost(
          navController = navController,
          startDestination = "home"
      ) {
          composable(
              "home",
              enterTransition = {
                  slideInHorizontally(
                      initialOffsetX = { -300 },
                      animationSpec = tween(300)
                  ) + fadeIn(animationSpec = tween(300))
              },
              exitTransition = {
                  slideOutHorizontally(
                      targetOffsetX = { -300 },
                      animationSpec = tween(300)
                  ) + fadeOut(animationSpec = tween(300))
              }
          ) {
              HomeScreen(navController)
          }
          
          composable(
              "detail",
              enterTransition = {
                  slideInHorizontally(
                      initialOffsetX = { it },
                      animationSpec = tween(300)
                  ) + fadeIn(animationSpec = tween(300))
              },
              exitTransition = {
                  slideOutHorizontally(
                      targetOffsetX = { it },
                      animationSpec = tween(300)
                  ) + fadeOut(animationSpec = tween(300))
              },
              popEnterTransition = {
                  slideInHorizontally(
                      initialOffsetX = { -it },
                      animationSpec = tween(300)
                  ) + fadeIn(animationSpec = tween(300))
              },
              popExitTransition = {
                  slideOutHorizontally(
                      targetOffsetX = { it },
                      animationSpec = tween(300)
                  ) + fadeOut(animationSpec = tween(300))
              }
          ) {
              DetailScreen(navController)
          }
      }
  }
  ```

**🛠️ Proyecto:** App con navegación compleja, bottom navigation y deep linking

---

## 🔄 **Fase 8: ViewModel y Architecture (5-6 semanas)**

### ViewModel Integration
- **Basic ViewModel Setup**
  ```kotlin
  // build.gradle
  implementation "androidx.lifecycle:lifecycle-viewmodel-compose:2.7.0"
  implementation "androidx.lifecycle:lifecycle-runtime-compose:2.7.0"
  
  // ViewModel
  class HomeViewModel : ViewModel() {
      private val _uiState = MutableStateFlow(HomeUiState())
      val uiState: StateFlow<HomeUiState> = _uiState.asStateFlow()
      
      private val _isLoading = MutableStateFlow(false)
      val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()
      
      fun loadData() {
          viewModelScope.launch {
              _isLoading.value = true
              try {
                  // Simulate API call
                  delay(2000)
                  _uiState.value = _uiState.value.copy(
                      items = generateSampleData(),
                      isError = false
                  )
              } catch (e: Exception) {
                  _uiState.value = _uiState.value.copy(
                      isError = true,
                      errorMessage = e.message ?: "Unknown error"
                  )
              } finally {
                  _isLoading.value = false
              }
          }
      }
      
      fun onSearchQueryChanged(query: String) {
          _uiState.value = _uiState.value.copy(searchQuery = query)
      }
      
      fun onItemClick(item: Item) {
          // Handle item click
          _uiState.value = _uiState.value.copy(selectedItem = item)
      }
      
      private fun generateSampleData(): List<Item> {
          return (1..20).map { 
              Item(
                  id = it.toString(),
                  title = "Item $it",
                  description = "Description for item $it"
              )
          }
      }
  }
  
  data class HomeUiState(
      val items: List<Item> = emptyList(),
      val searchQuery: String = "",
      val selectedItem: Item? = null,
      val isError: Boolean = false,
      val errorMessage: String = ""
  )
  
  data class Item(
      val id: String,
      val title: String,
      val description: String
  )
  
  // Composable using ViewModel
  @Composable
  fun HomeScreen(
      viewModel: HomeViewModel = viewModel()
  ) {
      val uiState by viewModel.uiState.collectAsState()
      val isLoading by viewModel.isLoading.collectAsState()
      
      LaunchedEffect(Unit) {
          viewModel.loadData()
      }
      
      Column(modifier = Modifier.fillMaxSize()) {
          OutlinedTextField(
              value = uiState.searchQuery,
              onValueChange = viewModel::onSearchQueryChanged,
              label = { Text("Search") },
              modifier = Modifier
                  .fillMaxWidth()
                  .padding(16.dp)
          )
          
          when {
              isLoading -> {
                  Box(
                      modifier = Modifier.fillMaxSize(),
                      contentAlignment = Alignment.Center
                  ) {
                      CircularProgressIndicator()
                  }
              }
              
              uiState.isError -> {
                  Column(
                      modifier = Modifier.fillMaxSize(),
                      horizontalAlignment = Alignment.CenterHorizontally,
                      verticalArrangement = Arrangement.Center
                  ) {
                      Text(
                          text = "Error: ${uiState.errorMessage}",
                          color = MaterialTheme.colorScheme.error
                      )
                      Button(
                          onClick = { viewModel.loadData() },
                          modifier = Modifier.padding(top = 16.dp)
                      ) {
                          Text("Retry")
                      }
                  }
              }
              
              else -> {
                  LazyColumn {
                      items(uiState.items.filter { 
                          it.title.contains(uiState.searchQuery, ignoreCase = true)
                      }) { item ->
                          ItemCard(
                              item = item,
                              onClick = { viewModel.onItemClick(item) }
                          )
                      }
                  }
              }
          }
      }
  }
  
  @Composable
  fun ItemCard(
      item: Item,
      onClick: () -> Unit
  ) {
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(horizontal = 16.dp, vertical = 4.dp)
              .clickable { onClick() }
      ) {
          Column(modifier = Modifier.padding(16.dp)) {
              Text(
                  text = item.title,
                  style = MaterialTheme.typography.titleMedium
              )
              Text(
                  text = item.description,
                  style = MaterialTheme.typography.bodyMedium,
                  color = MaterialTheme.colorScheme.onSurfaceVariant
              )
          }
      }
  }
  ```

### Repository Pattern
- **Repository y UseCase Implementation**
  ```kotlin
  // Data classes
  data class User(
      val id: String,
      val name: String,
      val email: String,
      val avatarUrl: String?
  )
  
  sealed class Result<out T> {
      data class Success<T>(val data: T) : Result<T>()
      data class Error(val exception: Throwable) : Result<Nothing>()
      object Loading : Result<Nothing>()
  }
  
  // Repository Interface
  interface UserRepository {
      suspend fun getUsers(): Result<List<User>>
      suspend fun getUser(id: String): Result<User>
      suspend fun createUser(user: User): Result<User>
      suspend fun updateUser(user: User): Result<User>
      suspend fun deleteUser(id: String): Result<Unit>
  }
  
  // Repository Implementation
  class UserRepositoryImpl(
      private val apiService: ApiService,
      private val localDataSource: LocalDataSource
  ) : UserRepository {
      
      override suspend fun getUsers(): Result<List<User>> {
          return try {
              val users = apiService.getUsers()
              localDataSource.saveUsers(users)
              Result.Success(users)
          } catch (e: Exception) {
              // Try to get cached data
              val cachedUsers = localDataSource.getUsers()
              if (cachedUsers.isNotEmpty()) {
                  Result.Success(cachedUsers)
              } else {
                  Result.Error(e)
              }
          }
      }
      
      override suspend fun getUser(id: String): Result<User> {
          return try {
              val user = apiService.getUser(id)
              localDataSource.saveUser(user)
              Result.Success(user)
          } catch (e: Exception) {
              val cachedUser = localDataSource.getUser(id)
              if (cachedUser != null) {
                  Result.Success(cachedUser)
              } else {
                  Result.Error(e)
              }
          }
      }
      
      override suspend fun createUser(user: User): Result<User> {
          return try {
              val createdUser = apiService.createUser(user)
              localDataSource.saveUser(createdUser)
              Result.Success(createdUser)
          } catch (e: Exception) {
              Result.Error(e)
          }
      }
      
      override suspend fun updateUser(user: User): Result<User> {
          return try {
              val updatedUser = apiService.updateUser(user)
              localDataSource.saveUser(updatedUser)
              Result.Success(updatedUser)
          } catch (e: Exception) {
              Result.Error(e)
          }
      }
      
      override suspend fun deleteUser(id: String): Result<Unit> {
          return try {
              apiService.deleteUser(id)
              localDataSource.deleteUser(id)
              Result.Success(Unit)
          } catch (e: Exception) {
              Result.Error(e)
          }
      }
  }
  
  // Use Cases
  class GetUsersUseCase(private val repository: UserRepository) {
      suspend operator fun invoke(): Result<List<User>> {
          return repository.getUsers()
      }
  }
  
  class GetUserUseCase(private val repository: UserRepository) {
      suspend operator fun invoke(id: String): Result<User> {
          return repository.getUser(id)
      }
  }
  
  class CreateUserUseCase(private val repository: UserRepository) {
      suspend operator fun invoke(user: User): Result<User> {
          return repository.createUser(user)
      }
  }
  ```

### Advanced ViewModel Patterns
- **Complex State Management**
  ```kotlin
  class UserListViewModel(
      private val getUsersUseCase: GetUsersUseCase,
      private val deleteUserUseCase: DeleteUserUseCase
  ) : ViewModel() {
      
      private val _uiState = MutableStateFlow(UserListUiState())
      val uiState: StateFlow<UserListUiState> = _uiState.asStateFlow()
      
      // Derived state for filtered users
      val filteredUsers = combine(
          uiState.map { it.users },
          uiState.map { it.searchQuery },
          uiState.map { it.selectedFilter }
      ) { users, query, filter ->
          users.filter { user ->
              val matchesQuery = query.isEmpty() || 
                  user.name.contains(query, ignoreCase = true) ||
                  user.email.contains(query, ignoreCase = true)
              
              val matchesFilter = when (filter) {
                  UserFilter.ALL -> true
                  UserFilter.ACTIVE -> user.isActive
                  UserFilter.INACTIVE -> !user.isActive
              }
              
              matchesQuery && matchesFilter
          }
      }.stateIn(
          scope = viewModelScope,
          started = SharingStarted.WhileSubscribed(5000),
          initialValue = emptyList()
      )
      
      init {
          loadUsers()
      }
      
      fun loadUsers() {
          viewModelScope.launch {
              _uiState.value = _uiState.value.copy(isLoading = true)
              
              when (val result = getUsersUseCase()) {
                  is Result.Success -> {
                      _uiState.value = _uiState.value.copy(
                          users = result.data,
                          isLoading = false,
                          error = null
                      )
                  }
                  is Result.Error -> {
                      _uiState.value = _uiState.value.copy(
                          isLoading = false,
                          error = result.exception.message
                      )
                  }
                  is Result.Loading -> {
                      _uiState.value = _uiState.value.copy(isLoading = true)
                  }
              }
          }
      }
      
      fun onSearchQueryChanged(query: String) {
          _uiState.value = _uiState.value.copy(searchQuery = query)
      }
      
      fun onFilterChanged(filter: UserFilter) {
          _uiState.value = _uiState.value.copy(selectedFilter = filter)
      }
      
      fun onUserSelected(user: User) {
          val currentSelection = _uiState.value.selectedUsers.toMutableSet()
          if (currentSelection.contains(user)) {
              currentSelection.remove(user)
          } else {
              currentSelection.add(user)
          }
          _uiState.value = _uiState.value.copy(selectedUsers = currentSelection)
      }
      
      fun deleteSelectedUsers() {
          viewModelScope.launch {
              val selectedUsers = _uiState.value.selectedUsers
              _uiState.value = _uiState.value.copy(isDeleting = true)
              
              try {
                  selectedUsers.forEach { user ->
                      when (deleteUserUseCase(user.id)) {
                          is Result.Error -> throw Exception("Failed to delete ${user.name}")
                          else -> { /* Success or Loading handled */ }
                      }
                  }
                  
                  // Refresh the list after deletion
                  loadUsers()
                  _uiState.value = _uiState.value.copy(
                      selectedUsers = emptySet(),
                      isDeleting = false
                  )
              } catch (e: Exception) {
                  _uiState.value = _uiState.value.copy(
                      isDeleting = false,
                      error = e.message
                  )
              }
          }
      }
      
      fun clearError() {
          _uiState.value = _uiState.value.copy(error = null)
      }
  }
  
  data class UserListUiState(
      val users: List<User> = emptyList(),
      val searchQuery: String = "",
      val selectedFilter: UserFilter = UserFilter.ALL,
      val selectedUsers: Set<User> = emptySet(),
      val isLoading: Boolean = false,
      val isDeleting: Boolean = false,
      val error: String? = null
  )
  
  enum class UserFilter {
      ALL, ACTIVE, INACTIVE
  }
  
  // Enhanced User data class
  data class User(
      val id: String,
      val name: String,
      val email: String,
      val avatarUrl: String?,
      val isActive: Boolean = true
  )
  ```

### Hilt Dependency Injection
- **Hilt Setup**
  ```kotlin
  // build.gradle (app level)
  plugins {
      id 'dagger.hilt.android.plugin'
      id 'kotlin-kapt'
  }
  
  dependencies {
      implementation "com.google.dagger:hilt-android:2.48"
      kapt "com.google.dagger:hilt-compiler:2.48"
      implementation "androidx.hilt:hilt-navigation-compose:1.1.0"
  }
  
  // Application class
  @HiltAndroidApp
  class MyApplication : Application()
  
  // Modules
  @Module
  @InstallIn(SingletonComponent::class)
  object NetworkModule {
      
      @Provides
      @Singleton
      fun provideHttpClient(): OkHttpClient {
          return OkHttpClient.Builder()
              .addInterceptor(HttpLoggingInterceptor().apply {
                  level = HttpLoggingInterceptor.Level.BODY
              })
              .build()
      }
      
      @Provides
      @Singleton
      fun provideRetrofit(client: OkHttpClient): Retrofit {
          return Retrofit.Builder()
              .baseUrl("https://api.example.com/")
              .client(client)
              .addConverterFactory(GsonConverterFactory.create())
              .build()
      }
      
      @Provides
      @Singleton
      fun provideApiService(retrofit: Retrofit): ApiService {
          return retrofit.create(ApiService::class.java)
      }
  }
  
  @Module
  @InstallIn(SingletonComponent::class)
  object RepositoryModule {
      
      @Provides
      @Singleton
      fun provideUserRepository(
          apiService: ApiService,
          localDataSource: LocalDataSource
      ): UserRepository {
          return UserRepositoryImpl(apiService, localDataSource)
      }
  }
  
  @Module
  @InstallIn(ViewModelComponent::class)
  object UseCaseModule {
      
      @Provides
      fun provideGetUsersUseCase(repository: UserRepository): GetUsersUseCase {
          return GetUsersUseCase(repository)
      }
      
      @Provides
      fun provideDeleteUserUseCase(repository: UserRepository): DeleteUserUseCase {
          return DeleteUserUseCase(repository)
      }
  }
  
  // ViewModel with Hilt
  @HiltViewModel
  class UserListViewModel @Inject constructor(
      private val getUsersUseCase: GetUsersUseCase,
      private val deleteUserUseCase: DeleteUserUseCase
  ) : ViewModel() {
      // Implementation as shown above
  }
  
  // Activity
  @AndroidEntryPoint
  class MainActivity : ComponentActivity() {
      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
          setContent {
              MyAppTheme {
                  MyApp()
              }
          }
      }
  }
  
  // Composable using Hilt ViewModel
  @Composable
  fun UserListScreen(
      viewModel: UserListViewModel = hiltViewModel()
  ) {
      val uiState by viewModel.uiState.collectAsState()
      val filteredUsers by viewModel.filteredUsers.collectAsState()
      
      // UI implementation
  }
  ```

**🛠️ Proyecto:** App completa con architecture pattern, Repository, y Dependency Injection

---

## 🌐 **Fase 9: Networking y APIs (4-5 semanas)**

### Retrofit Integration
- **API Setup**
  ```kotlin
  // build.gradle
  implementation 'com.squareup.retrofit2:retrofit:2.9.0'
  implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
  implementation 'com.squareup.okhttp3:logging-interceptor:4.11.0'
  
  // Data Models
  data class ApiResponse<T>(
      val success: Boolean,
      val message: String,
      val data: T?
  )
  
  data class User(
      @SerializedName("id") val id: String,
      @SerializedName("name") val name: String,
      @SerializedName("email") val email: String,
      @SerializedName("avatar_url") val avatarUrl: String?,
      @SerializedName("created_at") val createdAt: String,
      @SerializedName("updated_at") val updatedAt: String
  )
  
  data class CreateUserRequest(
      val name: String,
      val email: String,
      val password: String
  )
  
  data class UpdateUserRequest(
      val name: String?,
      val email: String?
  )
  
  // API Interface
  interface ApiService {
      @GET("users")
      suspend fun getUsers(
          @Query("page") page: Int = 1,
          @Query("limit") limit: Int = 20,
          @Query("search") search: String? = null
      ): ApiResponse<List<User>>
      
      @GET("users/{id}")
      suspend fun getUser(@Path("id") id: String): ApiResponse<User>
      
      @POST("users")
      suspend fun createUser(@Body request: CreateUserRequest): ApiResponse<User>
      
      @PUT("users/{id}")
      suspend fun updateUser(
          @Path("id") id: String,
          @Body request: UpdateUserRequest
      ): ApiResponse<User>
      
      @DELETE("users/{id}")
      suspend fun deleteUser(@Path("id") id: String): ApiResponse<Unit>
      
      @Multipart
      @POST("users/{id}/avatar")
      suspend fun uploadAvatar(
          @Path("id") id: String,
          @Part avatar: MultipartBody.Part
      ): ApiResponse<User>
  }
  
  // Network Client Setup
  object NetworkClient {
      private const val BASE_URL = "https://api.example.com/"
      
      private val loggingInterceptor = HttpLoggingInterceptor().apply {
          level = if (BuildConfig.DEBUG) {
              HttpLoggingInterceptor.Level.BODY
          } else {
              HttpLoggingInterceptor.Level.NONE
          }
      }
      
      private val authInterceptor = Interceptor { chain ->
          val request = chain.request().newBuilder()
              .addHeader("Authorization", "Bearer $authToken")
              .addHeader("Content-Type", "application/json")
              .build()
          chain.proceed(request)
      }
      
      private val okHttpClient = OkHttpClient.Builder()
          .addInterceptor(authInterceptor)
          .addInterceptor(loggingInterceptor)
          .connectTimeout(30, TimeUnit.SECONDS)
          .readTimeout(30, TimeUnit.SECONDS)
          .writeTimeout(30, TimeUnit.SECONDS)
          .build()
      
      val retrofit: Retrofit = Retrofit.Builder()
          .baseUrl(BASE_URL)
          .client(okHttpClient)
          .addConverterFactory(GsonConverterFactory.create())
          .build()
      
      val apiService: ApiService = retrofit.create(ApiService::class.java)
  }
  ```

### Repository con Error Handling
- **Network Repository Implementation**
  ```kotlin
  sealed class NetworkError : Exception() {
      object NoInternet : NetworkError()
      object Timeout : NetworkError()
      object ServerError : NetworkError()
      data class HttpError(val code: Int, val message: String) : NetworkError()
      data class UnknownError(val throwable: Throwable) : NetworkError()
  }
  
  sealed class Resource<T> {
      data class Success<T>(val data: T) : Resource<T>()
      data class Error<T>(val error: NetworkError) : Resource<T>()
      data class Loading<T>(val isLoading: Boolean = true) : Resource<T>()
  }
  
  class UserRepositoryImpl(
      private val apiService: ApiService,
      private val connectivityManager: ConnectivityManager
  ) : UserRepository {
      
      override suspend fun getUsers(
          page: Int,
          limit: Int,
          search: String?
      ): Resource<List<User>> {
          return safeApiCall {
              val response = apiService.getUsers(page, limit, search)
              if (response.success && response.data != null) {
                  response.data
              } else {
                  throw Exception(response.message)
              }
          }
      }
      
      override suspend fun createUser(request: CreateUserRequest): Resource<User> {
          return safeApiCall {
              val response = apiService.createUser(request)
              if (response.success && response.data != null) {
                  response.data
              } else {
                  throw Exception(response.message)
              }
          }
      }
      
      private suspend fun <T> safeApiCall(apiCall: suspend () -> T): Resource<T> {
          return try {
              // Check internet connectivity
              if (!isNetworkAvailable()) {
                  Resource.Error(NetworkError.NoInternet)
              } else {
                  Resource.Success(apiCall())
              }
          } catch (e: Exception) {
              Resource.Error(handleException(e))
          }
      }
      
      private fun handleException(exception: Exception): NetworkError {
          return when (exception) {
              is SocketTimeoutException, is ConnectException -> NetworkError.Timeout
              is HttpException -> {
                  when (exception.code()) {
                      in 400..499 -> NetworkError.HttpError(exception.code(), "Client error")
                      in 500..599 -> NetworkError.ServerError
                      else -> NetworkError.UnknownError(exception)
                  }
              }
              else -> NetworkError.UnknownError(exception)
          }
      }
      
      private fun isNetworkAvailable(): Boolean {
          val networkInfo = connectivityManager.activeNetworkInfo
          return networkInfo != null && networkInfo.isConnected
      }
  }
  
  // ViewModel with proper error handling
  class UserListViewModel(
      private val userRepository: UserRepository
  ) : ViewModel() {
      
      private val _uiState =# Roadmap Completo para Jetpack Compose

## 🎯 **Fase 1: Kotlin Fundamentals (4-6 semanas)**

### Kotlin Basics para Compose
- **Sintaxis Moderna**
  ```kotlin
  // Variables y tipos
  val name: String = "Compose"
  var count: Int = 0
  
  // Null safety
  var nullableName: String? = null
  val nonNullName: String = "Jetpack"
  
  // Type inference
  val language = "Kotlin" // String inferred
  val version = 1.8 // Double inferred
  
  // String templates
  println("Hello $name, version $version")
  println("Calculation: ${2 + 2}")
  ```

- **Functions y Lambdas**
  ```kotlin
  // Regular functions
  fun greet(name: String): String {
      return "Hello, $name!"
  }
  
  // Single expression functions
  fun add(a: Int, b: Int) = a + b
  
  // Higher-order functions
  fun performOperation(x: Int, y: Int, operation: (Int, Int) -> Int): Int {
      return operation(x, y)
  }
  
  // Lambda expressions
  val multiply = { a: Int, b: Int -> a * b }
  val result = performOperation(5, 3, multiply)
  
  // Trailing lambda syntax (crucial for Compose)
  listOf(1, 2, 3, 4, 5).filter { it > 3 }
  ```

### Kotlin Advanced Features para Compose
- **Data Classes y Sealed Classes**
  ```kotlin
  // Data classes (perfect for UI state)
  data class User(
      val id: String,
      val name: String,
      val email: String,
      val isOnline: Boolean = false
  )
  
  // Sealed classes (great for UI states)
  sealed class UiState<out T> {
      object Loading : UiState<Nothing>()
      data class Success<T>(val data: T) : UiState<T>()
      data class Error(val message: String) : UiState<Nothing>()
  }
  ```

- **Extension Functions**
  ```kotlin
  // Extensions for better composable APIs
  fun String.isValidEmail(): Boolean {
      return android.util.Patterns.EMAIL_ADDRESS.matcher(this).matches()
  }
  
  fun Int.dp(): Dp = this.dp // Extension for dimensions
  
  // Usage in Compose
  @Composable
  fun EmailField(email: String) {
      if (!email.isValidEmail()) {
          Text("Invalid email", color = Color.Red)
      }
  }
  ```

- **Coroutines Basics**
  ```kotlin
  import kotlinx.coroutines.*
  
  // Suspend functions
  suspend fun fetchUserData(): User {
      delay(1000) // Simulate network call
      return User("1", "John Doe", "john@example.com")
  }
  
  // Coroutine scopes
  class UserRepository {
      private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
      
      suspend fun getUser(id: String): User {
          return withContext(Dispatchers.IO) {
              // Network call
              fetchUserData()
          }
      }
  }
  ```

### Kotlin DSL Concepts
- **DSL Builders** (Foundation for Compose)
  ```kotlin
  // Understanding DSL syntax (like Compose)
  class HtmlBuilder {
      private val elements = mutableListOf<String>()
      
      fun div(content: HtmlBuilder.() -> Unit) {
          elements.add("<div>")
          this.content()
          elements.add("</div>")
      }
      
      fun text(content: String) {
          elements.add(content)
      }
      
      override fun toString() = elements.joinToString("")
  }
  
  fun html(content: HtmlBuilder.() -> Unit): String {
      val builder = HtmlBuilder()
      builder.content()
      return builder.toString()
  }
  
  // Usage (similar to Compose syntax)
  val htmlContent = html {
      div {
          text("Hello World")
      }
  }
  ```

**🛠️ Proyecto Práctico:** Kotlin console app con coroutines y DSL básico

---

## 🏗️ **Fase 2: Compose Fundamentals (6-8 semanas)**

### Environment Setup
- **Project Configuration**
  ```kotlin
  // build.gradle (Module: app)
  android {
      compileSdk 34
      
      defaultConfig {
          minSdk 24
          targetSdk 34
      }
      
      buildFeatures {
          compose true
      }
      
      compileOptions {
          sourceCompatibility JavaVersion.VERSION_17
          targetCompatibility JavaVersion.VERSION_17
      }
      
      kotlinOptions {
          jvmTarget = "17"
      }
      
      composeOptions {
          kotlinCompilerExtensionVersion = "1.5.8"
      }
  }
  
  dependencies {
      implementation platform('androidx.compose:compose-bom:2024.02.00')
      implementation 'androidx.compose.ui:ui'
      implementation 'androidx.compose.ui:ui-tooling-preview'
      implementation 'androidx.compose.material3:material3'
      implementation 'androidx.activity:activity-compose:1.8.2'
      
      debugImplementation 'androidx.compose.ui:ui-tooling'
      debugImplementation 'androidx.compose.ui:ui-test-manifest'
  }
  ```

### Core Compose Concepts
- **Composable Functions**
  ```kotlin
  import androidx.compose.runtime.Composable
  import androidx.compose.material3.*
  import androidx.compose.ui.tooling.preview.Preview
  
  // Basic Composable
  @Composable
  fun Greeting(name: String) {
      Text(text = "Hello $name!")
  }
  
  // Composable with parameters
  @Composable
  fun UserCard(
      name: String,
      email: String,
      isOnline: Boolean = false
  ) {
      Card {
          Column {
              Text(
                  text = name,
                  style = MaterialTheme.typography.headlineSmall
              )
              Text(
                  text = email,
                  style = MaterialTheme.typography.bodyMedium
              )
              if (isOnline) {
                  Text(
                      text = "Online",
                      color = MaterialTheme.colorScheme.primary
                  )
              }
          }
      }
  }
  
  // Preview
  @Preview(showBackground = true)
  @Composable
  fun GreetingPreview() {
      MyAppTheme {
          UserCard(
              name = "John Doe",
              email = "john@example.com",
              isOnline = true
          )
      }
  }
  ```

### Basic UI Elements
- **Text y Typography**
  ```kotlin
  @Composable
  fun TextExamples() {
      Column {
          // Basic text
          Text("Simple text")
          
          // Styled text
          Text(
              text = "Styled Text",
              style = MaterialTheme.typography.headlineLarge,
              color = MaterialTheme.colorScheme.primary
          )
          
          // Custom styling
          Text(
              text = "Custom Text",
              fontSize = 18.sp,
              fontWeight = FontWeight.Bold,
              letterSpacing = 1.2.sp
          )
          
          // Multiline text
          Text(
              text = "This is a very long text that will wrap to multiple lines when it exceeds the available width",
              maxLines = 2,
              overflow = TextOverflow.Ellipsis
          )
          
          // Annotated strings
          val annotatedText = buildAnnotatedString {
              append("Normal text ")
              withStyle(style = SpanStyle(fontWeight = FontWeight.Bold)) {
                  append("Bold text ")
              }
              withStyle(style = SpanStyle(color = Color.Red)) {
                  append("Red text")
              }
          }
          Text(annotatedText)
      }
  }
  ```

- **Buttons y Interactions**
  ```kotlin
  @Composable
  fun ButtonExamples() {
      Column(
          verticalArrangement = Arrangement.spacedBy(8.dp),
          modifier = Modifier.padding(16.dp)
      ) {
          // Basic button
          Button(onClick = { /* Handle click */ }) {
              Text("Click me!")
          }
          
          // Outlined button
          OutlinedButton(onClick = { /* Handle click */ }) {
              Text("Outlined")
          }
          
          // Text button
          TextButton(onClick = { /* Handle click */ }) {
              Text("Text Button")
          }
          
          // Button with icon
          Button(
              onClick = { /* Handle click */ },
              contentPadding = ButtonDefaults.ButtonWithIconContentPadding
          ) {
              Icon(
                  Icons.Default.Favorite,
                  contentDescription = "Favorite",
                  modifier = Modifier.size(ButtonDefaults.IconSize)
              )
              Spacer(Modifier.size(ButtonDefaults.IconSpacing))
              Text("Like")
          }
          
          // Custom button
          Button(
              onClick = { /* Handle click */ },
              colors = ButtonDefaults.buttonColors(
                  containerColor = Color.Red,
                  contentColor = Color.White
              ),
              shape = RoundedCornerShape(12.dp),
              elevation = ButtonDefaults.buttonElevation(
                  defaultElevation = 8.dp,
                  pressedElevation = 4.dp
              )
          ) {
              Text("Custom Button")
          }
      }
  }
  ```

### Layout Composables
- **Column, Row y Box**
  ```kotlin
  @Composable
  fun LayoutExamples() {
      // Column - vertical arrangement
      Column(
          modifier = Modifier.fillMaxSize(),
          verticalArrangement = Arrangement.SpaceBetween,
          horizontalAlignment = Alignment.CenterHorizontally
      ) {
          Text("Top")
          Text("Middle")
          Text("Bottom")
      }
      
      // Row - horizontal arrangement
      Row(
          modifier = Modifier.fillMaxWidth(),
          horizontalArrangement = Arrangement.SpaceEvenly,
          verticalAlignment = Alignment.CenterVertically
      ) {
          Icon(Icons.Default.Home, contentDescription = null)
          Text("Home")
          Icon(Icons.Default.Settings, contentDescription = null)
      }
      
      // Box - overlay/stacking
      Box(
          modifier = Modifier.size(200.dp),
          contentAlignment = Alignment.Center
      ) {
          // Background
          Card(
              modifier = Modifier.fillMaxSize(),
              colors = CardDefaults.cardColors(
                  containerColor = MaterialTheme.colorScheme.primaryContainer
              )
          ) {}
          
          // Foreground content
          Text(
              text = "Centered Text",
              style = MaterialTheme.typography.headlineMedium
          )
          
          // Badge in corner
          Box(
              modifier = Modifier
                  .align(Alignment.TopEnd)
                  .offset(x = 8.dp, y = (-8).dp)
          ) {
              Badge { Text("New") }
          }
      }
  }
  ```

- **Modifiers System**
  ```kotlin
  @Composable
  fun ModifierExamples() {
      Column {
          // Size modifiers
          Box(
              modifier = Modifier
                  .size(100.dp)
                  .background(Color.Red)
          )
          
          // Padding and margin
          Text(
              text = "Padded text",
              modifier = Modifier
                  .padding(16.dp)
                  .background(Color.LightGray)
                  .padding(8.dp)
          )
          
          // Fill modifiers
          Box(
              modifier = Modifier
                  .fillMaxWidth()
                  .height(50.dp)
                  .background(Color.Blue)
          )
          
          // Weight modifier (similar to flex)
          Row(modifier = Modifier.fillMaxWidth()) {
              Box(
                  modifier = Modifier
                      .weight(1f)
                      .height(50.dp)
                      .background(Color.Red)
              )
              Box(
                  modifier = Modifier
                      .weight(2f)
                      .height(50.dp)
                      .background(Color.Green)
              )
          }
          
          // Clickable modifier
          Text(
              text = "Clickable text",
              modifier = Modifier
                  .clickable { /* Handle click */ }
                  .padding(16.dp)
                  .background(
                      color = Color.LightGray,
                      shape = RoundedCornerShape(8.dp)
                  )
                  .padding(8.dp)
          )
      }
  }
  ```

**🛠️ Proyecto:** App de perfil de usuario con layouts básicos

---

## 🎨 **Fase 3: State Management y Recomposition (5-6 semanas)**

### State en Compose
- **Remember y MutableState**
  ```kotlin
  @Composable
  fun CounterExample() {
      // State that survives recomposition
      var count by remember { mutableStateOf(0) }
      
      Column(
          horizontalAlignment = Alignment.CenterHorizontally,
          modifier = Modifier.padding(16.dp)
      ) {
          Text(
              text = "Count: $count",
              style = MaterialTheme.typography.headlineMedium
          )
          
          Row(
              horizontalArrangement = Arrangement.spacedBy(8.dp)
          ) {
              Button(onClick = { count-- }) {
                  Text("-")
              }
              Button(onClick = { count++ }) {
                  Text("+")
              }
          }
      }
  }
  
  // Complex state example
  @Composable
  fun UserFormExample() {
      var name by remember { mutableStateOf("") }
      var email by remember { mutableStateOf("") }
      var isEmailValid by remember { mutableStateOf(true) }
      
      Column(modifier = Modifier.padding(16.dp)) {
          OutlinedTextField(
              value = name,
              onValueChange = { name = it },
              label = { Text("Name") },
              modifier = Modifier.fillMaxWidth()
          )
          
          OutlinedTextField(
              value = email,
              onValueChange = { 
                  email = it
                  isEmailValid = android.util.Patterns.EMAIL_ADDRESS.matcher(it).matches()
              },
              label = { Text("Email") },
              isError = !isEmailValid && email.isNotEmpty(),
              supportingText = {
                  if (!isEmailValid && email.isNotEmpty()) {
                      Text("Invalid email format")
                  }
              },
              modifier = Modifier.fillMaxWidth()
          )
          
          Button(
              onClick = { /* Handle submit */ },
              enabled = name.isNotEmpty() && email.isNotEmpty() && isEmailValid,
              modifier = Modifier
                  .fillMaxWidth()
                  .padding(top = 16.dp)
          ) {
              Text("Submit")
          }
      }
  }
  ```

### State Hoisting
- **Lifting State Up**
  ```kotlin
  // Bad: State managed inside composable
  @Composable
  fun BadCounterExample() {
      var count by remember { mutableStateOf(0) }
      
      Column {
          Text("Count: $count")
          Button(onClick = { count++ }) {
              Text("Increment")
          }
      }
  }
  
  // Good: State hoisted to parent
  @Composable
  fun GoodCounterExample(
      count: Int,
      onIncrement: () -> Unit
  ) {
      Column {
          Text("Count: $count")
          Button(onClick = onIncrement) {
              Text("Increment")
          }
      }
  }
  
  @Composable
  fun CounterScreen() {
      var count by remember { mutableStateOf(0) }
      
      GoodCounterExample(
          count = count,
          onIncrement = { count++ }
      )
  }
  
  // Advanced state hoisting example
  @Composable
  fun TaskList(
      tasks: List<Task>,
      onTaskCompleted: (String) -> Unit,
      onTaskDeleted: (String) -> Unit
  ) {
      LazyColumn {
          items(tasks) { task ->
              TaskItem(
                  task = task,
                  onCompleted = { onTaskCompleted(task.id) },
                  onDeleted = { onTaskDeleted(task.id) }
              )
          }
      }
  }
  
  @Composable
  fun TaskItem(
      task: Task,
      onCompleted: () -> Unit,
      onDeleted: () -> Unit
  ) {
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(horizontal = 16.dp, vertical = 4.dp)
      ) {
          Row(
              modifier = Modifier.padding(16.dp),
              verticalAlignment = Alignment.CenterVertically
          ) {
              // Avatar placeholder
              Box(
                  modifier = Modifier
                      .size(48.dp)
                      .background(
                          color = MaterialTheme.colorScheme.primary,
                          shape = CircleShape
                      ),
                  contentAlignment = Alignment.Center
              ) {
                  Text(
                      text = person.name.first().toString(),
                      color = MaterialTheme.colorScheme.onPrimary,
                      style = MaterialTheme.typography.titleMedium
                  )
              }
              
              Spacer(modifier = Modifier.width(16.dp))
              
              Column(modifier = Modifier.weight(1f)) {
                  Text(
                      text = person.name,
                      style = MaterialTheme.typography.titleMedium
                  )
                  Text(
                      text = person.email,
                      style = MaterialTheme.typography.bodyMedium,
                      color = MaterialTheme.colorScheme.onSurfaceVariant
                  )
              }
              
              IconButton(onClick = { /* Handle more options */ }) {
                  Icon(
                      Icons.Default.MoreVert,
                      contentDescription = "More options"
                  )
              }
          }
      }
  }
  ```

### Advanced LazyColumn Features
- **Headers, Sections, y Different Item Types**
  ```kotlin
  sealed class ListItem {
      data class Header(val title: String) : ListItem()
      data class Person(val person: com.example.Person) : ListItem()
      data class Divider(val text: String = "") : ListItem()
  }
  
  @Composable
  fun ComplexList() {
      val items = remember {
          buildList {
              add(ListItem.Header("Friends"))
              repeat(5) { 
                  add(ListItem.Person(com.example.Person(it, "Friend $it", "friend$it@example.com")))
              }
              add(ListItem.Divider())
              add(ListItem.Header("Colleagues"))
              repeat(10) { 
                  add(ListItem.Person(com.example.Person(it + 5, "Colleague $it", "colleague$it@work.com")))
              }
              add(ListItem.Divider())
              add(ListItem.Header("Family"))
              repeat(3) { 
                  add(ListItem.Person(com.example.Person(it + 15, "Family $it", "family$it@home.com")))
              }
          }
      }
      
      LazyColumn {
          items(items) { item ->
              when (item) {
                  is ListItem.Header -> {
                      Text(
                          text = item.title,
                          style = MaterialTheme.typography.headlineSmall,
                          modifier = Modifier
                              .fillMaxWidth()
                              .background(MaterialTheme.colorScheme.surfaceVariant)
                              .padding(16.dp)
                      )
                  }
                  is ListItem.Person -> {
                      PersonItem(person = item.person)
                  }
                  is ListItem.Divider -> {
                      HorizontalDivider(
                          modifier = Modifier.padding(vertical = 8.dp),
                          thickness = 1.dp,
                          color = MaterialTheme.colorScheme.outline
                      )
                  }
              }
          }
      }
  }
  
  // Sticky headers
  @Composable
  fun StickyHeadersList() {
      val groupedItems = remember {
          (1..100).map { "Item $it" }
              .groupBy { it.first() }
      }
      
      LazyColumn {
          groupedItems.forEach { (initial, items) ->
              stickyHeader {
                  Text(
                      text = "Items starting with '$initial'",
                      modifier = Modifier
                          .fillMaxWidth()
                          .background(MaterialTheme.colorScheme.surface)
                          .padding(16.dp),
                      style = MaterialTheme.typography.titleMedium
                  )
              }
              
              items(items) { item ->
                  Text(
                      text = item,
                      modifier = Modifier
                          .fillMaxWidth()
                          .padding(horizontal = 16.dp, vertical = 8.dp)
                  )
              }
          }
      }
  }
  ```

### LazyRow y Grid Layouts
- **Horizontal Lists**
  ```kotlin
  @Composable
  fun HorizontalListExample() {
      Column {
          Text(
              text = "Categories",
              style = MaterialTheme.typography.headlineSmall,
              modifier = Modifier.padding(16.dp)
          )
          
          LazyRow(
              contentPadding = PaddingValues(horizontal = 16.dp),
              horizontalArrangement = Arrangement.spacedBy(8.dp)
          ) {
              items(categories) { category ->
                  CategoryChip(category = category)
              }
          }
          
          Text(
              text = "Featured Items",
              style = MaterialTheme.typography.headlineSmall,
              modifier = Modifier.padding(16.dp)
          )
          
          LazyRow(
              contentPadding = PaddingValues(horizontal = 16.dp),
              horizontalArrangement = Arrangement.spacedBy(16.dp)
          ) {
              items(featuredItems) { item ->
                  FeaturedItemCard(item = item)
              }
          }
      }
  }
  
  @Composable
  fun CategoryChip(category: String) {
      var isSelected by remember { mutableStateOf(false) }
      
      FilterChip(
          onClick = { isSelected = !isSelected },
          label = { Text(category) },
          selected = isSelected
      )
  }
  
  @Composable
  fun FeaturedItemCard(item: FeaturedItem) {
      Card(
          modifier = Modifier.width(200.dp)
      ) {
          Column {
              // Image placeholder
              Box(
                  modifier = Modifier
                      .fillMaxWidth()
                      .height(120.dp)
                      .background(Color.Gray)
              ) {
                  Text(
                      text = "Image",
                      modifier = Modifier.align(Alignment.Center)
                  )
              }
              
              Column(modifier = Modifier.padding(16.dp)) {
                  Text(
                      text = item.title,
                      style = MaterialTheme.typography.titleMedium,
                      maxLines = 2,
                      overflow = TextOverflow.Ellipsis
                  )
                  Text(
                      text = item.price,
                      style = MaterialTheme.typography.bodyLarge,
                      color = MaterialTheme.colorScheme.primary
                  )
              }
          }
      }
  }
  ```

### LazyVerticalGrid
- **Grid Layouts**
  ```kotlin
  @Composable
  fun PhotoGrid() {
      val photos = remember { (1..50).map { "Photo $it" } }
      
      LazyVerticalGrid(
          columns = GridCells.Adaptive(minSize = 150.dp),
          contentPadding = PaddingValues(16.dp),
          horizontalArrangement = Arrangement.spacedBy(8.dp),
          verticalArrangement = Arrangement.spacedBy(8.dp)
      ) {
          items(photos) { photo ->
              PhotoItem(photo = photo)
          }
      }
  }
  
  @Composable
  fun PhotoItem(photo: String) {
      Card(
          modifier = Modifier.aspectRatio(1f)
      ) {
          Box(
              modifier = Modifier
                  .fillMaxSize()
                  .background(
                      brush = Brush.linearGradient(
                          colors = listOf(Color.Blue, Color.Purple)
                      )
                  ),
              contentAlignment = Alignment.Center
          ) {
              Text(
                  text = photo,
                  color = Color.White,
                  style = MaterialTheme.typography.titleMedium
              )
          }
      }
  }
  
  // Staggered Grid (different heights)
  @OptIn(ExperimentalFoundationApi::class)
  @Composable
  fun StaggeredGrid() {
      val items = remember {
          (1..50).map { 
              StaggeredItem(
                  id = it,
                  text = "Item $it",
                  height = Random.nextInt(100, 300)
              )
          }
      }
      
      LazyVerticalStaggeredGrid(
          columns = StaggeredGridCells.Fixed(2),
          contentPadding = PaddingValues(16.dp),
          horizontalArrangement = Arrangement.spacedBy(8.dp),
          verticalItemSpacing = 8.dp
      ) {
          items(items, key = { it.id }) { item ->
              Card(
                  modifier = Modifier.height(item.height.dp)
              ) {
                  Box(
                      modifier = Modifier.fillMaxSize(),
                      contentAlignment = Alignment.Center
                  ) {
                      Text(text = item.text)
                  }
              }
          }
      }
  }
  ```

### Performance Optimization
- **List Performance Best Practices**
  ```kotlin
  @Composable
  fun OptimizedList() {
      val items = remember { generateLargeDataSet() }
      
      LazyColumn {
          items(
              items = items,
              key = { it.id } // Important for performance
          ) { item ->
              // Extract to separate composable to avoid unnecessary recompositions
              OptimizedListItem(
                  item = item,
                  onItemClick = { /* Handle click */ }
              )
          }
      }
  }
  
  @Composable
  fun OptimizedListItem(
      item: ListItemData,
      onItemClick: (String) -> Unit
  ) {
      // Use const val for static content
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(horizontal = 16.dp, vertical = 4.dp)
              .clickable { onItemClick(item.id) }
      ) {
          Row(
              modifier = Modifier.padding(16.dp),
              verticalAlignment = Alignment.CenterVertically
          ) {
              // Async image loading
              AsyncImage(
                  model = item.imageUrl,
                  contentDescription = null,
                  modifier = Modifier
                      .size(48.dp)
                      .clip(CircleShape),
                  placeholder = painterResource(R.drawable.placeholder)
              )
              
              Spacer(modifier = Modifier.width(16.dp))
              
              Column(modifier = Modifier.weight(1f)) {
                  Text(
                      text = item.title,
                      style = MaterialTheme.typography.titleMedium,
                      maxLines = 1,
                      overflow = TextOverflow.Ellipsis
                  )
                  Text(
                      text = item.subtitle,
                      style = MaterialTheme.typography.bodyMedium,
                      color = MaterialTheme.colorScheme.onSurfaceVariant,
                      maxLines = 1,
                      overflow = TextOverflow.Ellipsis
                  )
              }
          }
      }
  }
  ```

**🛠️ Proyecto:** App de contactos con búsqueda, secciones y grid view

---

## 🎨 **Fase 6: Theming y Material Design 3 (4-5 semanas)**

### Material Design 3 Setup
- **Color System**
  ```kotlin
  // Theme setup
  @Composable
  fun MyAppTheme(
      darkTheme: Boolean = isSystemInDarkTheme(),
      dynamicColor: Boolean = true,
      content: @Composable () -> Unit
  ) {
      val colorScheme = when {
          dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
              val context = LocalContext.current
              if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
          }
          darkTheme -> DarkColorScheme
          else -> LightColorScheme
      }
      
      MaterialTheme(
          colorScheme = colorScheme,
          typography = Typography,
          shapes = Shapes,
          content = content
      )
  }
  
  // Custom color schemes
  private val LightColorScheme = lightColorScheme(
      primary = Color(0xFF6750A4),
      onPrimary = Color(0xFFFFFFFF),
      primaryContainer = Color(0xFFEADDFF),
      onPrimaryContainer = Color(0xFF21005D),
      secondary = Color(0xFF625B71),
      onSecondary = Color(0xFFFFFFFF),
      secondaryContainer = Color(0xFFE8DEF8),
      onSecondaryContainer = Color(0xFF1D192B),
      tertiary = Color(0xFF7D5260),
      onTertiary = Color(0xFFFFFFFF),
      tertiaryContainer = Color(0xFFFFD8E4),
      onTertiaryContainer = Color(0xFF31111D),
      error = Color(0xFFBA1A1A),
      onError = Color(0xFFFFFFFF),
      errorContainer = Color(0xFFFFDAD6),
      onErrorContainer = Color(0xFF410002),
      background = Color(0xFFFFFBFE),
      onBackground = Color(0xFF1C1B1F),
      surface = Color(0xFFFFFBFE),
      onSurface = Color(0xFF1C1B1F),
      surfaceVariant = Color(0xFFE7E0EC),
      onSurfaceVariant = Color(0xFF49454F),
      outline = Color(0xFF79747E),
      outlineVariant = Color(0xFFCAC4D0)
  )
  
  private val DarkColorScheme = darkColorScheme(
      primary = Color(0xFFD0BCFF),
      onPrimary = Color(0xFF371E73),
      primaryContainer = Color(0xFF4F378B),
      onPrimaryContainer = Color(0xFFEADDFF),
      secondary = Color(0xFFCCC2DC),
      onSecondary = Color(0xFF332D41),
      secondaryContainer = Color(0xFF4A4458),
      onSecondaryContainer = Color(0xFFE8DEF8),
      tertiary = Color(0xFFEFB8C8),
      onTertiary = Color(0xFF492532),
      tertiaryContainer = Color(0xFF633B48),
      onTertiaryContainer = Color(0xFFFFD8E4),
      error = Color(0xFFFFB4AB),
      onError = Color(0xFF690005),
      errorContainer = Color(0xFF93000A),
      onErrorContainer = Color(0xFFFFDAD6),
      background = Color(0xFF10131C),
      onBackground = Color(0xFFE6E1E5),
      surface = Color(0xFF10131C),
      onSurface = Color(0xFFE6E1E5),
      surfaceVariant = Color(0xFF49454F),
      onSurfaceVariant = Color(0xFFCAC4D0),
      outline = Color(0xFF938F99),
      outlineVariant = Color(0xFF49454F)
  )
  ```

- **Typography System**
  ```kotlin
  val Typography = Typography(
      displayLarge = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 57.sp,
          lineHeight = 64.sp,
          letterSpacing = -0.25.sp,
      ),
      displayMedium = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 45.sp,
          lineHeight = 52.sp,
          letterSpacing = 0.sp,
      ),
      displaySmall = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 36.sp,
          lineHeight = 44.sp,
          letterSpacing = 0.sp,
      ),
      headlineLarge = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 32.sp,
          lineHeight = 40.sp,
          letterSpacing = 0.sp,
      ),
      headlineMedium = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 28.sp,
          lineHeight = 36.sp,
          letterSpacing = 0.sp,
      ),
      headlineSmall = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 24.sp,
          lineHeight = 32.sp,
          letterSpacing = 0.sp,
      ),
      titleLarge = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 22.sp,
          lineHeight = 28.sp,
          letterSpacing = 0.sp,
      ),
      titleMedium = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Medium,
          fontSize = 16.sp,
          lineHeight = 24.sp,
          letterSpacing = 0.15.sp,
      ),
      titleSmall = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Medium,
          fontSize = 14.sp,
          lineHeight = 20.sp,
          letterSpacing = 0.1.sp,
      ),
      bodyLarge = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 16.sp,
          lineHeight = 24.sp,
          letterSpacing = 0.5.sp,
      ),
      bodyMedium = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 14.sp,
          lineHeight = 20.sp,
          letterSpacing = 0.25.sp,
      ),
      bodySmall = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Normal,
          fontSize = 12.sp,
          lineHeight = 16.sp,
          letterSpacing = 0.4.sp,
      ),
      labelLarge = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Medium,
          fontSize = 14.sp,
          lineHeight = 20.sp,
          letterSpacing = 0.1.sp,
      ),
      labelMedium = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Medium,
          fontSize = 12.sp,
          lineHeight = 16.sp,
          letterSpacing = 0.5.sp,
      ),
      labelSmall = TextStyle(
          fontFamily = FontFamily.Default,
          fontWeight = FontWeight.Medium,
          fontSize = 11.sp,
          lineHeight = 16.sp,
          letterSpacing = 0.5.sp,
      )
  )
  
  // Custom fonts
  val CustomFontFamily = FontFamily(
      Font(R.font.opensans_regular, FontWeight.Normal),
      Font(R.font.opensans_medium, FontWeight.Medium),
      Font(R.font.opensans_bold, FontWeight.Bold)
  )
  ```

### Material 3 Components
- **Cards y Surfaces**
  ```kotlin
  @Composable
  fun MaterialComponentsShowcase() {
      LazyColumn(
          modifier = Modifier.padding(16.dp),
          verticalArrangement = Arrangement.spacedBy(16.dp)
      ) {
          item {
              Text(
                  text = "Material 3 Components",
                  style = MaterialTheme.typography.headlineLarge
              )
          }
          
          // Cards
          item {
              Text(
                  text = "Cards",
                  style = MaterialTheme.typography.headlineMedium
              )
              
              Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                  // Elevated Card
                  ElevatedCard {
                      Text(
                          text = "Elevated Card",
                          modifier = Modifier.padding(16.dp)
                      )
                  }
                  
                  // Filled Card
                  Card(
                      colors = CardDefaults.cardColors(
                          containerColor = MaterialTheme.colorScheme.surfaceVariant
                      )
                  ) {
                      Text(
                          text = "Filled Card",
                          modifier = Modifier.padding(16.dp)
                      )
                  }
                  
                  // Outlined Card
                  OutlinedCard {
                      Text(
                          text = "Outlined Card",
                          modifier = Modifier.padding(16.dp)
                      )
                  }
              }
          }
          
          // Buttons
          item {
              Text(
                  text = "Buttons",
                  style = MaterialTheme.typography.headlineMedium
              )
              
              Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                  Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                      Button(onClick = {}) {
                          Text("Filled")
                      }
                      FilledTonalButton(onClick = {}) {
                          Text("Tonal")
                      }
                      OutlinedButton(onClick = {}) {
                          Text("Outlined")
                      }
                  }
                  
                  Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                      ElevatedButton(onClick = {}) {
                          Text("Elevated")
                      }
                      TextButton(onClick = {}) {
                          Text("Text")
                      }
                  }
              }
          }
          
          // FABs
          item {
              Text(
                  text = "Floating Action Buttons",
                  style = MaterialTheme.typography.headlineMedium
              )
              
              Row(
                  horizontalArrangement = Arrangement.spacedBy(8.dp),
                  verticalAlignment = Alignment.CenterVertically
              ) {
                  SmallFloatingActionButton(onClick = {}) {
                      Icon(Icons.Default.Add, contentDescription = null)
                  }
                  
                  FloatingActionButton(onClick = {}) {
                      Icon(Icons.Default.Add, contentDescription = null)
                  }
                  
                  LargeFloatingActionButton(onClick = {}) {
                      Icon(Icons.Default.Add, contentDescription = null)
                  }
                  
                  ExtendedFloatingActionButton(
                      onClick = {},
                      text = { Text("Extended") },
                      icon = { Icon(Icons.Default.Add, contentDescription = null) }
                  )
              }
          }
      }
  }
  ```

### Custom Theme Implementation
- **Theme Customization**
  ```kotlin
  // Custom theme values
  data class CustomColors(
      val success: Color,
      val onSuccess: Color,
      val warning: Color,
      val onWarning: Color,
      val info: Color,
      val onInfo: Color
  )
  
  val LocalCustomColors = compositionLocalOf {
      CustomColors(
          success = Color.Unspecified,
          onSuccess = Color.Unspecified,
          warning = Color.Unspecified,
          onWarning = Color.Unspecified,
          info = Color.Unspecified,
          onInfo = Color.Unspecified
      )
  }
  
  val LightCustomColors = CustomColors(
      success = Color(0xFF4CAF50),
      onSuccess = Color.White,
      warning = Color(0xFFFF9800),
      onWarning = Color.White,
      info = Color(0xFF2196F3),
      onInfo = Color.White
  )
  
  val DarkCustomColors = CustomColors(
      success = Color(0xFF81C784),
      onSuccess = Color.Black,
      warning = Color(0xFFFFB74D),
      onWarning = Color.Black,
      info = Color(0xFF64B5F6),
      onInfo = Color.Black
  )
  
  @Composable
  fun MyAppTheme(
      darkTheme: Boolean = isSystemInDarkTheme(),
      content: @Composable () -> Unit
  ) {
      val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme
      val customColors = if (darkTheme) DarkCustomColors else LightCustomColors
      
      CompositionLocalProvider(
          LocalCustomColors provides customColors
      ) {
          MaterialTheme(
              colorScheme = colorScheme,
              typography = Typography,
              shapes = Shapes,
              content = content
          )
      }
  }
  
  // Usage
  object MyAppTheme {
      val customColors: CustomColors
          @Composable
          get() = LocalCustomColors.current
  }
  
  @Composable
  fun CustomThemedContent() {
      val customColors = MyAppTheme.customColors
      
      Card(
          colors = CardDefaults.cardColors(
              containerColor = customColors.success
          )
      ) {
          Text(
              text = "Success message",
              color = customColors.onSuccess,
              modifier = Modifier.padding(16.dp)
          )
      }
  }
  ```

### Shape System
- **Custom Shapes**
  ```kotlin
  val Shapes = Shapes(
      extraSmall = RoundedCornerShape(4.dp),
      small = RoundedCornerShape(8.dp),
      medium = RoundedCornerShape(12.dp),
      large = RoundedCornerShape(16.dp),
      extraLarge = RoundedCornerShape(28.dp)
  )
  
  // Custom shapes
  val CustomShapes = Shapes(
      extraSmall = CutCornerShape(4.dp),
      small = RoundedCornerShape(
          topStart = 8.dp,
          topEnd = 8.dp,
          bottomStart = 0.dp,
          bottomEnd = 0.dp
      ),
      medium = RoundedCornerShape(
          topStart = 12.dp,
          topEnd = 12.dp,
          bottomStart = 4.dp,
          bottomEnd = 4.dp
      ),
      large = RoundedCornerShape(
          topStart = 16.dp,
          topEnd = 0.dp,
          bottomStart = 0.dp,
          bottomEnd = 16.dp
      ),
      extraLarge = CircleShape
  )
  
  @Composable
  fun ShapeShowcase() {
      LazyColumn(
          modifier = Modifier.padding(16.dp),
          verticalArrangement = Arrangement.spacedBy(16.dp)
      ) {
          item {
              Text(
                  text = "Shape System",
                  style = MaterialTheme.typography.headlineMedium
              )
          }
          
          item {
              Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                  listOf(
                      "XS" to MaterialTheme.shapes.extraSmall,
                      "S" to MaterialTheme.shapes.small,
                      "M" to MaterialTheme.shapes.medium,
                      "L" to MaterialTheme.shapes.large,
                      "XL" to MaterialTheme.shapes.extraLarge
                  ).forEach { (label, shape) ->
                      Box(
                          modifier = Modifier
                              .size(60.dp)
                              .background(
                                  color = MaterialTheme.colorScheme.primary,
                                  shape = shape
                              ),
                          contentAlignment = Alignment.Center
                      ) {
                          Text(
                              text = label,
                              color = MaterialTheme.colorScheme.onPrimary,
                              style = MaterialTheme.typography.labelSmall
                          )
                      }
                  }
              }
          }
      }
  }
  ```

**🛠️ Proyecto:** App con tema completo customizado y modo oscuro

---

## 🚀 **Fase 7: Navigation Compose (4-5 semanas)**

### Navigation Setup
- **Basic Navigation**
  ```kotlin
  // build.gradle
  implementation "androidx.navigation:navigation-compose:2.7.6"
  
  // Navigation setup
  @Composable
  fun MyApp() {
      val navController = rememberNavController()
      
      NavHost(
          navController = navController,
          startDestination = "home"
      ) {
          composable("home") {
              HomeScreen(
                  onNavigateToProfile = { userId ->
                      navController.navigate("profile/$userId")
                  },
                  onNavigateToSettings = {
                      navController.navigate("settings")
                  }
              )
          }
          
          composable(
              route = "profile/{userId}",
              arguments = listOf(navArgument("userId") { type = NavType.StringType })
          ) { backStackEntry ->
              val userId = backStackEntry.arguments?.getString("userId") ?: ""
              ProfileScreen(
                  userId = userId,
                  onNavigateBack = {
                      navController.popBackStack()
                  }
              )
          }
          
          composable("settings") {
              SettingsScreen(
                  onNavigateBack = {
                      navController.popBackStack()
                  }
              )
          }
      }
  }
  ```

### Advanced Navigation Patterns
- **Nested Navigation y Bottom Navigation**
  ```kotlin
  sealed class Screen(val route: String) {
      object Home : Screen("home")
      object Search : Screen("search")
      object Profile : Screen("profile")
      object Settings : Screen("settings")
      
      // Nested screens
      object ProductDetail : Screen("product/{productId}") {
          fun createRoute(productId: String) = "product/$productId"
      }
      
      object EditProfile : Screen("profile/edit")
  }
  
  @Composable
  fun MainScreen() {
      val navController = rememberNavController()
      
      Scaffold(
          bottomBar = {
              BottomAppBar {
                  val currentDestination = navController.currentBackStackEntryAsState()
                  val currentRoute = currentDestination.value?.destination?.route
                  
                  listOf(
                      Screen.Home to Icons.Default.Home,
                      Screen.Search to Icons.Default.Search,
                      Screen.Profile to Icons.Default.Person
                  ).forEach { (screen, icon) ->
                      NavigationBarItem(
                          icon = { Icon(icon, contentDescription = null) },
                          label = { Text(screen.route.capitalize()) },
                          selected = currentRoute == screen.route,
                          onClick = {
                              navController.navigate(screen.route) {
                                  // Pop up to start destination to avoid building up a large stack
                                  popUpTo(navController.graph.findStartDestination().id) {
                                      saveState = true
                                  }
                                  // Avoid multiple copies of the same destination when reselecting
                                  launch
              Checkbox(
                  checked = task.isCompleted,
                  onCheckedChange = { onCompleted() }
              )
              Text(
                  text = task.title,
                  modifier = Modifier.weight(1f),
                  textDecoration = if (task.isCompleted) {
                      TextDecoration.LineThrough
                  } else {
                      TextDecoration.None
                  }
              )
              IconButton(onClick = onDeleted) {
                  Icon(Icons.Default.Delete, contentDescription = "Delete")
              }
          }
      }
  }
  ```

### derivedStateOf y rememberSaveable
- **Derived State**
  ```kotlin
  @Composable
  fun SearchableList(items: List<String>) {
      var searchQuery by remember { mutableStateOf("") }
      
      // Derived state - only recomputes when searchQuery or items change
      val filteredItems by remember {
          derivedStateOf {
              if (searchQuery.isEmpty()) {
                  items
              } else {
                  items.filter { it.contains(searchQuery, ignoreCase = true) }
              }
          }
      }
      
      Column {
          OutlinedTextField(
              value = searchQuery,
              onValueChange = { searchQuery = it },
              label = { Text("Search") },
              modifier = Modifier.fillMaxWidth()
          )
          
          LazyColumn {
              items(filteredItems) { item ->
                  Text(
                      text = item,
                      modifier = Modifier.padding(16.dp)
                  )
              }
          }
      }
  }
  
  // rememberSaveable for surviving configuration changes
  @Composable
  fun PersistentCounter() {
      var count by rememberSaveable { mutableStateOf(0) }
      
      Column {
          Text("Count: $count (survives rotation)")
          Button(onClick = { count++ }) {
              Text("Increment")
          }
      }
  }
  
  // Custom Saver
  data class User(val name: String, val age: Int)
  
  val UserSaver = Saver<User?, List<Any>>(
      save = { user -> if (user != null) listOf(user.name, user.age) else emptyList() },
      restore = { list -> if (list.isNotEmpty()) User(list[0] as String, list[1] as Int) else null }
  )
  
  @Composable
  fun UserProfile() {
      var user by rememberSaveable(stateSaver = UserSaver) { 
          mutableStateOf(User("John", 25)) 
      }
      
      // UI code here
  }
  ```

**🛠️ Proyecto:** App de lista de tareas con búsqueda y persistencia de estado

---

## 📝 **Fase 4: Forms y User Input (4-5 semanas)**

### Input Components
- **TextField Variations**
  ```kotlin
  @Composable
  fun TextFieldExamples() {
      var basicText by remember { mutableStateOf("") }
      var outlinedText by remember { mutableStateOf("") }
      var passwordText by remember { mutableStateOf("") }
      var passwordVisible by remember { mutableStateOf(false) }
      
      Column(
          modifier = Modifier.padding(16.dp),
          verticalArrangement = Arrangement.spacedBy(16.dp)
      ) {
          // Basic TextField
          TextField(
              value = basicText,
              onValueChange = { basicText = it },
              label = { Text("Basic TextField") },
              modifier = Modifier.fillMaxWidth()
          )
          
          // Outlined TextField
          OutlinedTextField(
              value = outlinedText,
              onValueChange = { outlinedText = it },
              label = { Text("Outlined TextField") },
              supportingText = { Text("Helper text") },
              modifier = Modifier.fillMaxWidth()
          )
          
          // Password Field
          OutlinedTextField(
              value = passwordText,
              onValueChange = { passwordText = it },
              label = { Text("Password") },
              visualTransformation = if (passwordVisible) {
                  VisualTransformation.None
              } else {
                  PasswordVisualTransformation()
              },
              keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
              trailingIcon = {
                  val image = if (passwordVisible) {
                      Icons.Filled.Visibility
                  } else {
                      Icons.Filled.VisibilityOff
                  }
                  
                  IconButton(onClick = { passwordVisible = !passwordVisible }) {
                      Icon(imageVector = image, contentDescription = null)
                  }
              },
              modifier = Modifier.fillMaxWidth()
          )
      }
  }
  ```

### Form Validation
- **Validation Logic**
  ```kotlin
  data class FormState(
      val name: String = "",
      val email: String = "",
      val phone: String = "",
      val age: String = ""
  ) {
      val isNameValid: Boolean
          get() = name.length >= 2
      
      val isEmailValid: Boolean
          get() = android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()
      
      val isPhoneValid: Boolean
          get() = phone.length >= 10
      
      val isAgeValid: Boolean
          get() = age.toIntOrNull()?.let { it in 18..100 } ?: false
      
      val isFormValid: Boolean
          get() = isNameValid && isEmailValid && isPhoneValid && isAgeValid
  }
  
  @Composable
  fun ValidatedForm() {
      var formState by remember { mutableStateOf(FormState()) }
      var hasAttemptedSubmit by remember { mutableStateOf(false) }
      
      Column(
          modifier = Modifier
              .padding(16.dp)
              .fillMaxWidth(),
          verticalArrangement = Arrangement.spacedBy(16.dp)
      ) {
          // Name field
          OutlinedTextField(
              value = formState.name,
              onValueChange = { formState = formState.copy(name = it) },
              label = { Text("Name") },
              isError = hasAttemptedSubmit && !formState.isNameValid,
              supportingText = {
                  if (hasAttemptedSubmit && !formState.isNameValid) {
                      Text("Name must be at least 2 characters")
                  }
              },
              modifier = Modifier.fillMaxWidth()
          )
          
          // Email field
          OutlinedTextField(
              value = formState.email,
              onValueChange = { formState = formState.copy(email = it) },
              label = { Text("Email") },
              keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),
              isError = hasAttemptedSubmit && !formState.isEmailValid,
              supportingText = {
                  if (hasAttemptedSubmit && !formState.isEmailValid) {
                      Text("Please enter a valid email address")
                  }
              },
              modifier = Modifier.fillMaxWidth()
          )
          
          // Phone field
          OutlinedTextField(
              value = formState.phone,
              onValueChange = { 
                  // Only allow digits
                  if (it.all { char -> char.isDigit() }) {
                      formState = formState.copy(phone = it)
                  }
              },
              label = { Text("Phone") },
              keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Phone),
              isError = hasAttemptedSubmit && !formState.isPhoneValid,
              supportingText = {
                  if (hasAttemptedSubmit && !formState.isPhoneValid) {
                      Text("Phone must be at least 10 digits")
                  }
              },
              modifier = Modifier.fillMaxWidth()
          )
          
          // Age field
          OutlinedTextField(
              value = formState.age,
              onValueChange = { 
                  if (it.all { char -> char.isDigit() } && it.length <= 3) {
                      formState = formState.copy(age = it)
                  }
              },
              label = { Text("Age") },
              keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
              isError = hasAttemptedSubmit && !formState.isAgeValid,
              supportingText = {
                  if (hasAttemptedSubmit && !formState.isAgeValid) {
                      Text("Age must be between 18 and 100")
                  }
              },
              modifier = Modifier.fillMaxWidth()
          )
          
          // Submit button
          Button(
              onClick = {
                  hasAttemptedSubmit = true
                  if (formState.isFormValid) {
                      // Handle form submission
                      println("Form submitted: $formState")
                  }
              },
              modifier = Modifier.fillMaxWidth()
          ) {
              Text("Submit")
          }
          
          // Form validity indicator
          if (hasAttemptedSubmit) {
              Card(
                  colors = CardDefaults.cardColors(
                      containerColor = if (formState.isFormValid) {
                          Color.Green.copy(alpha = 0.1f)
                      } else {
                          Color.Red.copy(alpha = 0.1f)
                      }
                  )
              ) {
                  Text(
                      text = if (formState.isFormValid) {
                          "✅ Form is valid"
                      } else {
                          "❌ Please fix the errors above"
                      },
                      modifier = Modifier.padding(16.dp)
                  )
              }
          }
      }
  }
  ```

### Input Focus y Keyboard
- **Focus Management**
  ```kotlin
  @Composable
  fun FocusExample() {
      val focusManager = LocalFocusManager.current
      val (nameRef, emailRef, passwordRef) = remember { FocusRequester.createRefs() }
      
      var name by remember { mutableStateOf("") }
      var email by remember { mutableStateOf("") }
      var password by remember { mutableStateOf("") }
      
      Column(
          modifier = Modifier.padding(16.dp),
          verticalArrangement = Arrangement.spacedBy(8.dp)
      ) {
          OutlinedTextField(
              value = name,
              onValueChange = { name = it },
              label = { Text("Name") },
              keyboardOptions = KeyboardOptions(
                  imeAction = ImeAction.Next
              ),
              keyboardActions = KeyboardActions(
                  onNext = { emailRef.requestFocus() }
              ),
              modifier = Modifier
                  .fillMaxWidth()
                  .focusRequester(nameRef)
          )
          
          OutlinedTextField(
              value = email,
              onValueChange = { email = it },
              label = { Text("Email") },
              keyboardOptions = KeyboardOptions(
                  keyboardType = KeyboardType.Email,
                  imeAction = ImeAction.Next
              ),
              keyboardActions = KeyboardActions(
                  onNext = { passwordRef.requestFocus() }
              ),
              modifier = Modifier
                  .fillMaxWidth()
                  .focusRequester(emailRef)
          )
          
          OutlinedTextField(
              value = password,
              onValueChange = { password = it },
              label = { Text("Password") },
              visualTransformation = PasswordVisualTransformation(),
              keyboardOptions = KeyboardOptions(
                  keyboardType = KeyboardType.Password,
                  imeAction = ImeAction.Done
              ),
              keyboardActions = KeyboardActions(
                  onDone = { focusManager.clearFocus() }
              ),
              modifier = Modifier
                  .fillMaxWidth()
                  .focusRequester(passwordRef)
          )
          
          Row(
              horizontalArrangement = Arrangement.spacedBy(8.dp)
          ) {
              Button(onClick = { nameRef.requestFocus() }) {
                  Text("Focus Name")
              }
              Button(onClick = { focusManager.clearFocus() }) {
                  Text("Clear Focus")
              }
          }
      }
  }
  ```

**🛠️ Proyecto:** App de registro con validación completa y manejo de focus

---

## 📋 **Fase 5: Lists y LazyColumn/LazyRow (4-5 semanas)**

### LazyColumn Basics
- **Simple Lists**
  ```kotlin
  @Composable
  fun SimpleListExample() {
      val items = remember { 
          (1..100).map { "Item #$it" }
      }
      
      LazyColumn {
          items(items) { item ->
              Text(
                  text = item,
                  modifier = Modifier
                      .fillMaxWidth()
                      .padding(16.dp)
              )
          }
      }
  }
  
  // With custom data
  data class Person(
      val id: Int,
      val name: String,
      val email: String,
      val avatarUrl: String? = null
  )
  
  @Composable
  fun PersonList() {
      val people = remember {
          (1..50).map { 
              Person(
                  id = it,
                  name = "Person $it",
                  email = "person$it@example.com"
              )
          }
      }
      
      LazyColumn {
          items(people, key = { it.id }) { person ->
              PersonItem(person = person)
          }
      }
  }
  
  @Composable
  fun PersonItem(person: Person) {
      Card(
          modifier = Modifier
              .fillMaxWidth()
              .padding(horizontal = 16.dp, vertical = 4.dp)
              .clickable { /* Handle click */ }
      ) {
          Row(
              modifier = Modifier.padding(16.dp),
              verticalAlignment = Alignment.CenterVertically
          ) {