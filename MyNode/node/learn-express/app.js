const express = require('express'); 
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks');

dotenv.config();
const indexRouter = require('./routes'); // index.js 생략 가능
const userRouter = require('./routes/user');
const app = express();
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 

nunjucks.configure('views', {
	express: app,
	watch: true,
});

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	resave: false, 
	saveUninitialized: false, 
	secret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		secure: false,
	},
	name: 'sessionn-cookie',
}));

app.use((req, res, next) => {
	console.log('모든 요청에 다 실행됩니다.');
	next();
});

app.get('/', (req, res, next) => {
	 console.log('GET / 요청에서만 실행됩니다.');
	 next();
}, (req, res) => {
	throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
	const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
	res.status(404).send('Not Found');
	next(error);
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = process.env.NODE_ENV !== 'production' ? err :{};
	res.status(err.status || 500);
	res.render('error');
});

app.listen(app.get('port'), () => {
	console.log(app.get('port'), '번 포트에서 대기 중');
});