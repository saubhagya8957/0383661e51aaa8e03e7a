import React from "react";
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AsteroidDataList from "../AsteroidDataList";

configure({ adapter : new Adapter() });

const screenProps = {
    navigation: {
        navigate: jest.fn(),
    },
    route: {
        params: {
            asteroidData: {
                name: 'Asteroid',
                nasa_jpl_url: '',
                is_potentially_hazardous_asteroid: '',
            }
        }
    },
    id: 'Asteroid Data List'
}

const feature = loadFeature('./app/screens/AsteroidDataList/__tests__/features/AsteroidDataList.scenarios.feature');

defineFeature(feature, (test) => {
    test('User navigates Asteroid Specific Data', ({ given, when, then }) => {
        let AsteroidDataListWrapper: ShallowWrapper;
        let AsteroidDataListInstance: AsteroidDataList;

        given('I am user loading Asteroid Specific Data Screen', () => {
            AsteroidDataListWrapper = shallow(<AsteroidDataList {...screenProps} />);
        });

        when('I just navigate to the Asteroid Specific Data Screen', () => {
            AsteroidDataListInstance = AsteroidDataListWrapper.instance() as AsteroidDataList;
        });

        then('Asteroid Specific Data will mount with out any errors', () => {
            expect(AsteroidDataListWrapper).toBeTruthy();
            expect(AsteroidDataListWrapper).toMatchSnapshot();
        });

        then('I can unmount the screen with out any errors', () => {
            AsteroidDataListInstance.componentWillUnmount();
            expect(AsteroidDataListWrapper).toBeTruthy();
            expect(AsteroidDataListWrapper).toMatchSnapshot();
        });
    })
})