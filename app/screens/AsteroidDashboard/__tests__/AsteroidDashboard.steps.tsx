import React from "react";
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AsteroidDashboard from "../AsteroidDashboard";

configure({ adapter : new Adapter() });

const screenProps = {
    navigation: {
        navigate: jest.fn(),
    },
    id: 'Asteroid Dashboard'
}

const feature = loadFeature('./app/screens/AsteroidDashboard/__tests__/features/AsteroidDashboard.scenarios.feature');

defineFeature(feature, (test) => {
    test('User navigates Asteroid Dashboard', ({ given, when, then }) => {
        let AsteroidDashboardWrapper: ShallowWrapper;
        let AsteroidDashboardInstance: AsteroidDashboard;

        given('I am user loading Asteroid Dashboard Screen', () => {
            AsteroidDashboardWrapper = shallow(<AsteroidDashboard {...screenProps} />);
        });

        when('I just navigate to the Asteroid Dashboard Screen', () => {
            AsteroidDashboardInstance = AsteroidDashboardWrapper.instance() as AsteroidDashboard;
        });

        then('Asteroid Dashboard will mount with out any errors', () => {
            expect(AsteroidDashboardWrapper).toBeTruthy();
            expect(AsteroidDashboardWrapper).toMatchSnapshot();
        });

        then('I can now enter asteroid id', () => {
            let textInputComponent = AsteroidDashboardWrapper.findWhere((node) => node.prop('testID') === 'searchTextInputID');
            textInputComponent.simulate('changeText', '2000887');
            expect(AsteroidDashboardWrapper).toMatchSnapshot();
        });

        then('I can press the asteroid submit button to fetch the asteroid data', () => {
            let submitButtonComponent = AsteroidDashboardWrapper.findWhere((node) => node.prop('testID') === 'submitButtonTestID');
            submitButtonComponent.simulate('press');
            expect(AsteroidDashboardWrapper).toMatchSnapshot();
        });

        then('I can press the asteroid random button to find the random asteroid list', () => {
            let randomButtonComponent = AsteroidDashboardWrapper.findWhere((node) => node.prop('testID') === 'randomButtonTestID');
            randomButtonComponent.simulate('press');
            expect(AsteroidDashboardWrapper).toMatchSnapshot();
        });

        then('I can unmount the screen with out any errors', () => {
            AsteroidDashboardInstance.componentWillUnmount();
            expect(AsteroidDashboardWrapper).toBeTruthy();
            expect(AsteroidDashboardWrapper).toMatchSnapshot();
        });
    })
})