import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type User = {  //Usyn type to prevent the type's merging
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})  // Partial is used to define that some item of User can be blank
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;  //Simulating the api delay on real world

      this.get('/users', function(schema, request){
        const { page = 1, per_page = 10} = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd)
        
        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      });
      
      this.post('/users');

      this.namespace = ''; //Resetting namespace to prevent conflicts with next's api
      this.passthrough();
    }
  })

  return server;
}