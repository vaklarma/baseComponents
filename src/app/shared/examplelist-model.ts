export class ExamplelistModel {
  id: number;
  exampleName: string;
  exampleRouteName: string;
  exampleDescription: string;
  exampleLastModifiedDate: string;
  exampleCreatedDate: string;
  examplePictureUrl: string;

  constructor(param: ExamplelistModel) {
    Object.assign(this, param);
  }
}
