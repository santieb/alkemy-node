import dotenv from 'dotenv'
dotenv.config()

import assert from 'assert'
import fetch from 'node-fetch'
import { describe, it } from 'mocha'

describe('#Login()', function () {
  it('Fill in all the fields', async () => {
    const conf = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: '',
        password: 'A4s27WsSt3'
      })
    }

    const url = `http://localhost:${process.env.PORT}/api/auth/login`
    await fetch(url, conf)
      .then(res => res.json())
      .then(data => {
        assert.equal(data.msg, 'Please fill in all fields')
      })
  })

  it('This email does not exist', async () => {
    const conf = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'testtest@gmail.com',
        password: 'A4s27WsSt3'
      })
    }

    const url = `http://localhost:${process.env.PORT}/api/auth/login`
    await fetch(url, conf)
      .then(res => res.json())
      .then(data => {
        assert.equal(data.msg, 'This email does not exist')
      })
  })

  it('Invalid password', async () => {
    const conf = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'test@gmail.com',
        password: 'invalidpass'
      })
    }

    const url = `http://localhost:${process.env.PORT}/api/auth/login`
    await fetch(url, conf)
      .then(res => res.json())
      .then(data => {
        assert.equal(data.msg, 'Invalid password')
      })
  })
})
