import {Injectable} from '@angular/core';
import {ExamplelistModel} from './examplelist-model';

@Injectable({
  providedIn: 'root'
})
export class ExamplelistService {
  private _exampleList: ExamplelistModel[];

  constructor() {

    this._exampleList = [
      {
        'id': 1,
        'exampleName': 'A példa címe',
        'exampleRouteName': 'listdemo',
        'exampleDescription': 'Első példa',
        'exampleCreatedDate': '2018.01.03',
        'exampleLastModifiedDate': '2018.05.06',
        'examplePictureUrl': 'valami.hu/kep'
      },
      {
        'id': 2,
        'exampleName': 'A  második példa címe',
        'exampleRouteName': 'buttons',
        'exampleDescription': 'Második példa',
        'exampleCreatedDate': '2018.01.03',
        'exampleLastModifiedDate': '2018.05.06',
        'examplePictureUrl': 'valami.hu/kep'
      },
      {
        'id': 3,
        'exampleName': 'A  harmadik példa címe',
        'exampleRouteName': 'listcss',
        'exampleDescription': 'harmadik példa',
        'exampleCreatedDate': '2018.01.03',
        'exampleLastModifiedDate': '2018.05.06',
        'examplePictureUrl': 'valami.hu/kep'
      },
      {
        'id': 4,
        'exampleName': 'A  negyedik példa címe',
        'exampleRouteName': 'error',
        'exampleDescription': 'negyedik példa',
        'exampleCreatedDate': '2018.01.03',
        'exampleLastModifiedDate': '2018.05.06',
        'examplePictureUrl': 'valami.hu/kep',
      },
      {
        'id': 5,
        'exampleName': 'A  ötödik példa címe',
        'exampleRouteName': 'error',
        'exampleDescription': 'ötödik példa',
        'exampleCreatedDate': '2018.01.03',
        'exampleLastModifiedDate': '2018.05.06',
        'examplePictureUrl': 'valami.hu/kep'
      },
    ];
  }

  getAllExamples(): ExamplelistModel[] {
    return this._exampleList;
  }
}
