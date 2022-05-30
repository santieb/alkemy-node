
import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const url = 'http://localhost:3001/api'

describe('Movies: ', () => {
  it('Not found', (done) => {
    chai.request(url)
      .get('/movies')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .query({ title: 'interstellar' })
      .end((err, res) => {
        if (err) done()
        console.log(res.body)
        expect(res).to.have.status(400)
        done()
      })
  })

  it('Not found', (done) => {
    chai.request(url)
      .get('/movies/250')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })
})
