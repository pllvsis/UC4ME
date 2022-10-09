import { getCurrentLocation } from "./LocationFunctions"
import { instruction, addRouteToList } from "./Route"

let stepCount: number;
let routeName: string;

function initializeStepCount() {
    stepCount = 0;
}

export function startRecordRoute(destination: string) {
    routeName = destination;
    
    let pathSteps: instruction[] = [];

    initializeStepCount();
    pathSteps = setFirstStep(pathSteps);

    return pathSteps;
}

function setFirstStep(pathSteps: Array<instruction>) {
    const newInstruction: instruction = {
        stepNumber: stepCount,
        type: "start",
        context: {},
        coordinates: getCurrentLocation(),
    }

    pathSteps.push(newInstruction);

    return pathSteps;
}

export function addInstructionToRoute(pathSteps: Array<instruction>, instruction: string, context: object = {}) {
    stepCount = stepCount + 1;

    const newInstruction: instruction = {
        stepNumber: stepCount,
        type: instruction,
        context: context,
        coordinates: getCurrentLocation(),
    }

    pathSteps.push(newInstruction);

    return pathSteps;
}

export function finishAndSaveRoute(pathSteps: Array<instruction>) {
    stepCount = stepCount + 1;
    
    const newInstruction: instruction = {
        stepNumber: stepCount,
        type: "end",
        context: {},
        coordinates: getCurrentLocation(),
    }

    pathSteps.push(newInstruction);

    addRouteToList(routeName, pathSteps);
}