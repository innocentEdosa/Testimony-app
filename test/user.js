// /* eslint-disable quote-props */
// /* eslint-disable quotes */
// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// // import request from 'request';
// import supertest from 'supertest';

// chai.should();
// const url = 'http://localhost:9999';
// const request = supertest(url);

// describe('Users CRUD and AUTH', () => {
//   describe('User Auth', () => {
//     let responseObj;
//     let responseBody;
//     let requestPost;
//     beforeEach(() => {
//       requestPost = sinon.stub(request, 'post');
//       // this.post = sinon.stub(request, 'post');

//       responseObj = {
//         status: 200,
//       };

//       responseBody = {
//         data: {
//           addUser: {
//             id: '70ee4158-5ff5-46ab-ae45-0c82fd343109',
//             token: 'verify your account to get token',
//           },
//         },
//       };
//     });

//     afterEach(() => {
//       sinon.restore();
//     });

//     it('Should create a new user', () => {
//       const payload = {
//         "query": "mutation createUser ($input: userInputType!) { addUser(input: $input) { id } } ",
//         "variables": {
//           "input": {
//             "email": "ilegbinijiiie@gmail.com",
//             "password": "thisisthepassword",
//           },
//         },
//       };
//       requestPost.yields(null, JSON.stringify(responseBody));
//       request.post('/graphql')
//         .send(payload)
//         .expect(200)
//         .end((err, res) => {
//           // console.log(res);
//         });
//     });
//   });
// });

