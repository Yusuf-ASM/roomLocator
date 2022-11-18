const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;

router.get("/api/", (req, res) => { res.send('welcome to RoomLocator API :)') });
router.get("/api/getroom", (req, res) => { res.send('getroom') });
router.get("/api/getrooms", (req, res) => { res.send('getrooms') });
router.get("/api/roomtable", (req, res) => { res.send('roomtable') });
router.get("/api/whatsin", (req, res) => { res.send('whatsin') });

app.use('/', router);

app.use(function (req, res) {
    res.send('no no no HAHAHAHA');
});

app.listen(8080, () => { console.log('runing'); });
