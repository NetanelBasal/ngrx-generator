import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { {{titleCase name}}Effects } from "{{position "effects"}}/{{lowerCase name}}.effects";
import { {{titleCase name}}Service } from "{{position "services"}}/{{lowerCase name}}.service";
import { Observable } from "rxjs/Observable";

describe('{{titleCase name}}Effects', () => {
  let runner, {{lowerCase name}}Effects, {{lowerCase name}}Service;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      {{titleCase name}}Effects,
      {
        provide: {{titleCase name}}Service,
        useValue: jasmine.createSpyObj('{{lowerCase name}}Service', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    {{lowerCase name}}Effects = TestBed.get({{titleCase name}}Effects);
    {{lowerCase name}}Service = TestBed.get({{titleCase name}}Service);
  });

  describe('{{lowerCase name}}$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});