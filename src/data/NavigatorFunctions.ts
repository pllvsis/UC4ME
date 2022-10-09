import { getCurrentLocation } from "./LocationFunctions"
import { instruction, addRouteToList } from "./Route"

let stepCount: number;
let routeName: string;
let pathSteps: instruction[] = [];

function initializeStepCount() {
    stepCount = 0;
}

export function startRecordRoute(destination: string) {
    routeName = destination;

    initializeStepCount();
    pathSteps = setFirstStep(pathSteps);

    return pathSteps;
}

function setFirstStep(pathSteps: Array<instruction>) {
    const newInstruction: instruction = {
        stepNumber: stepCount,
        type: "start",
        context: "",
        coordinates: getCurrentLocation(),
    }

    pathSteps.push(newInstruction);

    return pathSteps;
}

export function addInstructionToRoute(instruction: string, context = "") {
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

export async function finishAndSaveRoute() {
    stepCount = stepCount + 1;
    
    const newInstruction: instruction = {
        stepNumber: stepCount,
        type: "end",
        context: "",
        coordinates: getCurrentLocation(),
    }

    pathSteps.push(newInstruction);

    await addRouteToList(routeName, pathSteps);
    pathSteps.length = 0;
}