import dotenv from 'dotenv'
dotenv.config()
import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const url = `http://localhost:${process.env.PORT}/api`

describe('Movies: ', () => {
  it('Not found | query', (done) => {
    chai.request(url)
      .get('/movies')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .query({ title: 'interstellar' })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })

  it('Not found | idMovie', (done) => {
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

  it('Please fill in all fields', (done) => {
    chai.request(url)
      .post('/movies')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        image: 'https://static.wikia.nocookie.net/disney/images/a/a5/I2_-_Dash.png/revision/latest?cb=20180609164216&path-prefix=es',
        title: 'Peter Pan'
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })

  it('Movie not found', (done) => {
    chai.request(url)
      .put('/movies/250')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        image: 'https://static.wikia.nocookie.net/disney/images/a/a5/I2_-_Dash.png/revision/latest?cb=20180609164216&path-prefix=es',
        weight: 45000,
        history: 'Dashiell is a very rebellious boy, he often gets into trouble and loves to play pranks on his least favorite teacher, Mr. Bernie Kropp. He believes that he should use his superpowers; his mother, Helen Parr / Elastigirl, disagrees. His goal is to compete in sports: his speed power would make him special, but it would give him an unfair advantage and supers have to keep his powers a secret. His mother forbids it on the grounds that "Everyone is special" (which is, as Dash pointed out, the equivalent of saying "No one is").'
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(404)
        done()
      })
  })

  it('Please fill in all fields', (done) => {
    chai.request(url)
      .put('/movies/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        image: '',
        weight: 45000,
        history: 'Dashiell is a very rebellious boy, he often gets into trouble and loves to play pranks on his least favorite teacher, Mr. Bernie Kropp. He believes that he should use his superpowers; his mother, Helen Parr / Elastigirl, disagrees. His goal is to compete in sports: his speed power would make him special, but it would give him an unfair advantage and supers have to keep his powers a secret. His mother forbids it on the grounds that "Everyone is special" (which is, as Dash pointed out, the equivalent of saying "No one is").'
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })

  it('Movie not found', (done) => {
    chai.request(url)
      .delete('/movies/250')
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
      .delete('/movies/characters/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })

  it('Character already added', (done) => {
    chai.request(url)
      .post('/movies/characters/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        characterId: 2
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })

  it('Check the sent data', (done) => {
    chai.request(url)
      .post('/movies/characters/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        characterId: 250
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(500)
        done()
      })
  })

  it('Please fill in all fields', (done) => {
    chai.request(url)
      .delete('/movies/characters/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })

  it('The character is not added', (done) => {
    chai.request(url)
      .delete('/movies/characters/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUzOTQ1MTk5LCJleHAiOjE2NjM5NDUxOTl9.scLRqZdhL250x1ApIzdknLdm6b50HIPVhLcNi-NGnEM')
      .send({
        characterId: 250
      })
      .end((err, res) => {
        if (err) done()
        expect(res).to.have.status(400)
        done()
      })
  })
})
