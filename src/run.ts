import { Solution } from './Solution';
import { SonarSweepSolution } from './day1/SonarSweepSolution';
import { DiveSolution } from './day2/DiveSolution';

type inputOptions = 
    '1'|
    '2';

const classMap : Record<inputOptions, Solution> = {
    '1': new SonarSweepSolution,
    '2': new DiveSolution
};

function run(module: Solution) : void{ 
    module.solve();
}

if (process.argv.length < 3) {
    console.error('Day required');
}else {
    const input = process.argv[2] as inputOptions;
    const module = classMap[input];
    run(module);
} 

