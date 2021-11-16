import React from "react";
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AsteroidDetailScreen from "../AsteroidDetailScreen";

configure({ adapter : new Adapter() });

const screenProps = {
    navigation: {
        navigate: jest.fn(),
    },
    route: {
        params: {
            asteroidDetail: {
                name: 'Asteroid',
                nasa_jpl_url: '',
                is_potentially_hazardous_asteroid: '',
            }
        }
    },
    id: 'Asteroid Data List'
}

const feature = loadFeature('./app/screens/AsteroidDetailScreen/__tests__/features/AsteroidDetailScreen.scenarios.feature');

defineFeature(feature, (test) => {
    test('User navigates Asteroid Detail', ({ given, when, then }) => {
        let AsteroidDetailScreenWrapper: ShallowWrapper;
        let AsteroidDetailScreenInstance: AsteroidDetailScreen;

        given('I am user loading Asteroid Detail Screen', () => {
            AsteroidDetailScreenWrapper = shallow(<AsteroidDetailScreen {...screenProps} />);
        });

        when('I just navigate to the Asteroid Detail Screen', () => {
            AsteroidDetailScreenInstance = AsteroidDetailScreenWrapper.instance() as AsteroidDetailScreen;
        });

        then('Asteroid Detail Screen will mount with out any errors', () => {
            expect(AsteroidDetailScreenWrapper).toBeTruthy();
            expect(AsteroidDetailScreenWrapper).toMatchSnapshot();
        });

        then('I can unmount the screen with out any errors', () => {
            AsteroidDetailScreenInstance.componentWillUnmount();
            expect(AsteroidDetailScreenWrapper).toBeTruthy();
            expect(AsteroidDetailScreenWrapper).toMatchSnapshot();
        });
    })
})