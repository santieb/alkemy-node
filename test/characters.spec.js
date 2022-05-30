import dotenv from 'dotenv'
dotenv.config()
import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const url = `http://localhost:${process.env.PORT}/api`

describe('Characters: ', () => {
  it('Character not found | query', (done) => {
    chai.request(url)
      .get('/characters')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .query({ name: 'john snow' })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(404)
        done()
      })
  })

  it('Character not found | idcharacter', (done) => {
    chai.request(url)
      .post('/characters/250')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(404)
        done()
      })
  })

  it('Please fill in all fields', (done) => {
    chai.request(url)
      .post('/characters')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        image: 'https://static.wikia.nocookie.net/disney/images/a/a5/I2_-_Dash.png/revision/latest?cb=20180609164216&path-prefix=es',
        name: 'Peter Pan'
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })

  it('Character not found', (done) => {
    chai.request(url)
      .put('/characters/250')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        image: 'https://static.wikia.nocookie.net/disney/images/a/a5/I2_-_Dash.png/revision/latest?cb=20180609164216&path-prefix=es'
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(404)
        done()
      })
  })

  it('Character not found', (done) => {
    chai.request(url)
      .delete('/characters/250')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(404)
        done()
      })
  })
})
