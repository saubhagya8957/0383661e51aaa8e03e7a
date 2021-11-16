import React from "react";
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AsteroidListScreen from "../AsteroidListScreen";

configure({ adapter : new Adapter() });

const screenProps = {
    navigation: {
        navigate: jest.fn(),
    },
    route: {
        params: {
            asteroidDataList: []
        }
    },
    id: 'Asteroid Data List'
}

const feature = loadFeature('./app/screens/AsteroidListScreen/__tests__/features/AsteroidListScreen.scenarios.feature');

defineFeature(feature, (test) => {
    test('User navigates Asteroid List', ({ given, when, then }) => {
        let AsteroidListScreenWrapper: ShallowWrapper;
        let AsteroidListScreenInstance: AsteroidListScreen;

        given('I am user loading Asteroid List Screen', () => {
            AsteroidListScreenWrapper = shallow(<AsteroidListScreen {...screenProps} />);
        });

        when('I just navigate to the Asteroid List Screen', () => {
            AsteroidListScreenInstance = AsteroidListScreenWrapper.instance() as AsteroidListScreen;
        });

        then('Asteroid List Screen will mount with out any errors', () => {
            expect(AsteroidListScreenWrapper).toBeTruthy();
            expect(AsteroidListScreenWrapper).toMatchSnapshot();
        });

        then('I can unmount the screen with out any errors', () => {
            AsteroidListScreenInstance.componentWillUnmount();
            expect(AsteroidListScreenWrapper).toBeTruthy();
            expect(AsteroidListScreenWrapper).toMatchSnapshot();
        });
    })
})