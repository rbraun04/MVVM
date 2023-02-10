import HomeViewModel from "../HomeViewModel";

export default class MockViewModel extends HomeViewModel {

   onClick = (): void => {
       console.log('go away')
   }
}