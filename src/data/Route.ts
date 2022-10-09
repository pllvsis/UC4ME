import { Preferences } from '@capacitor/preferences';

export interface instruction {
    stepNumber: number;
    type: string;
    context: string;
    coordinates: object
}

let routeList: {
    [key: string]: Array<instruction>
};

export async function createRouteList() {
    routeList = {};

    await Preferences.set({
        key: 'routeList',
        value: JSON.stringify(routeList),
    });
}

async function getRouteList() {
    const { value } = await Preferences.get({ key: 'routeList' });

    if (value !== null) {
        routeList = JSON.parse(value);
    }

    return routeList;
}

async function setRouteList(routeList: object) {
    await Preferences.set({
        key: 'routeList',
        value: JSON.stringify(routeList),
    });
}

export async function addRouteToList(routeName: string, route: Array<instruction>) {
    routeList = await getRouteList();
    routeList[routeName] = route;
    await setRouteList(routeList);
    return;
}

export async function getRoute(routeName: string): Promise<instruction[]> {
    routeList = await getRouteList().then();
    return routeList[routeName];
}
