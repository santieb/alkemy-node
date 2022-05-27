import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Delilah Restó API',
      version: '2.0'
    }
  },
  apis: ['swagger.yaml']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

export {
  swaggerDocs,
  swaggerUI
}
