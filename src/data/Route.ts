export interface instruction {
    stepNumber: number;
    type: string;
    context: string;
    coordinates: object
}

let routeList: {
    [key: string]: Array<instruction>
};

export function addRouteToList(routeName: string, route: Array<instruction>) {
    routeList[routeName] = route;
    return;
}
