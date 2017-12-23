import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrudService } from './crud.service';

describe('Service: CrudService', () => {

  let injector: TestBed;
  let service: CrudService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrudService]
    });
    injector = getTestBed();
    service = injector.get(CrudService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // --------------------Example------------------------

  // const data = {
  //   'title': 'Book Title',
  //   'author': 'John Smith',
  //   'volumeId': '12345'
  // };

  // const books = {
  //   items: [
  //     {id: '12345', volumeInfo: {title: 'Title'}},
  //     {id: '67890', volumeInfo: {title: 'Another Title'}}
  //   ]
  // };

  // const queryTitle = 'Book Title';

  // it('should call the search api and return the search results', (done) => {
  //   backend.connections.subscribe((connection: MockConnection) => {
  //     const options = new ResponseOptions({
  //       body: JSON.stringify(books)
  //     });
  //     connection.mockRespond(new Response(options));
  //     expect(connection.request.method).toEqual(RequestMethod.Get);
  //     expect(connection.request.url).toEqual(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}`);
  //   });

  //   service
  //     .searchBooks(queryTitle)
  //     .subscribe((res) => {
  //       expect(res).toEqual(books.items);
  //       done();
  //     });
  // });

});