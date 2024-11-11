const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: 'GET',
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

mainApp.use(cors(corsOptions));