const express = require('express')
const path = require('path')
const app = express()

app.set("port", process.env.PORT ??= 12010) //프로세스의 환경변수에 PORT가 있으면 그걸 쓰고 없으면 12010을 쓴다
const _path = path.join(__dirname, './dist')

app.use(express.static(_path))
const PORT = app.get("port")

app.listen(PORT, () => {
  console.log(`real Server Running at http://127.0.0.1:${PORT}/`);
  console.log(`http://127.0.0.1:${PORT}/join`);
  console.log(`http://127.0.0.1:${PORT}/login`);
})