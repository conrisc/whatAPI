/*
 * What API
 * This is what-api
 *
 * OpenAPI spec version: 1.2.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WhatApi);
  }
}(this, function(expect, WhatApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WhatApi.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('searchSong', function() {
        it('should call searchSong successfully', function(done) {
          // TODO: uncomment, update parameter values for searchSong call and complete the assertions
          /*
          var opts = {};
          opts.id = "id_example";
          opts.skip = 56;
          opts.limit = 56;
          opts.title = "title_example";
          opts.tags = ["tags_example"];
          opts.sort = "sort_example";

          instance.searchSong(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(WhatApi.SongItem);
              expect(data.id).to.be.a('string');
              // expect(data.id).to.be("5daef72831cae99923dad6ez");
              expect(data.title).to.be.a('string');
              // expect(data.title).to.be("G-Eazy - Far alone");
              expect(data.url).to.be.a('string');
              // expect(data.url).to.be("https://youtube.com/watch?v=sxV1_Lr1yf0");
              expect(data.dateAdded).to.be.a('string');
              // expect(data.dateAdded).to.be("Wed Oct 09 2019 13:39:18 GMT+0200 (Central European Summer Time)");
              {
                let dataCtr = data.tags;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  // expect(data).to.be("");
                }
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
