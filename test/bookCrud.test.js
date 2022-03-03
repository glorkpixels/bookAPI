const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const { expect } = require('chai');
const Book = mongoose.model('Book');
const agent = request.agent(app);

var id ;
describe('Book Create Test', () => {
    it('A book to be inserted', (done) => {
      const bookPost = {
        "Title" : "TEST",
        "Author": {"Name": "J. R. R. TEST Tolkien" , "Country": "TEST United Kingdom" , "BirthDate": "18.18.1900"},
        "Price": 500,
        "ISBN": "ISBN-5050550",
        "Language": "TEST English",
        "NumberOfPages": 550,
        "Publisher": "TEST YKY"
      };
      agent.post('/books/')
        .send(bookPost)
        .expect(200)
        .end((err, res) => { 
            expect(res.body).to.have.property('_id')
            expect(res.body).to.have.property('Author').and.to.have.property('_id')
          done();
        });
    });

    
      after((done) => {
        mongoose.connection.close();
        app.close(done());
      });
    });


    describe('Books Get Test', () => {
      it('All books to be displayed', (done) => {
        agent.get('/books/')
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.deep.equal({});
        done();
      });
      });    
        after((done) => {
          mongoose.connection.close();
          app.close(done());
        });
      });


  
