import MockHomeViewModel from './__mocks__/MockViewModel'
import renderer from 'react-test-renderer';
import App from '../../App';

describe('HomeView', ()=> {
    let mockHomeViewModel: MockHomeViewModel

    beforeEach(()=>{
        mockHomeViewModel: new MockHomeViewModel()
    });

    describe('when a viewModel is pass in', ()=>{
        const app = renderer.create(<App/>)
        it('and button is pressed', ()=>{
            expect(mockHomeViewModel.onClick()).toBeCalled()
        })
    })
})