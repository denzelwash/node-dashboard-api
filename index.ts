import express, { Request, Response, NextFunction } from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  res.send(err.message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
