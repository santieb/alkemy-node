import dotenv from 'dotenv'
dotenv.config()

import assert from 'assert'
import fetch from 'node-fetch'
import { describe, it } from 'mocha'

describe('#register()', function () {
  it('The email is in use', async () => {
    const conf = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'santiago@gmail.com',
        password: 'A4s27WsSt3'
      })
    }

    const url = `http://localhost:${process.env.PORT}/api/auth/register`
    await fetch(url, conf)
      .then(res => res.json())
      .then(data => {
        assert.equal(data.msg, 'This email already exists')
      })
  })

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

    const url = `http://localhost:${process.env.PORT}/api/auth/register`
    await fetch(url, conf)
      .then(res => res.json())
      .then(data => {
        assert.equal(data.msg, 'Please fill in all fields')
      })
  })

  it('Invalid email', async () => {
    const conf = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'TEST@gmail',
        password: 'A4s27WsSt3'
      })
    }

    const url = `http://localhost:${process.env.PORT}/api/auth/register`
    await fetch(url, conf)
      .then(res => res.json())
      .then(data => {
        assert.equal(data.msg, 'Invalid email')
      })
  })
  it('Password must be at least 6 characters', async () => {
    const conf = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'test2@gmail.com',
        password: 'A4s27'
      })
    }

    const url = `http://localhost:${process.env.PORT}/api/auth/register`
    await fetch(url, conf)
      .then(res => res.json())
      .then(data => {
        assert.equal(data.msg, 'Password must be at least 6 characters')
      })
  })
})
