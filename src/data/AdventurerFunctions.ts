import { instruction } from "./Route"
import { getRoute } from "@/data/Route";

let path: instruction[];

export async function startNavigation(routeName: string) {
    path = await getRoute(routeName);
    return;
}

export function getNextTwoSteps(): string[] {
    const instructionStringList = [];
    
    instructionStringList.push(path["1"].type + path[1].context)
    instructionStringList.push(path["2"].type + path[2].context)

    return instructionStringList;
}

export function endNavigation() {
    return
}