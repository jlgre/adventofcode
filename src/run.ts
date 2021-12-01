import { Solution } from './Solution';
import { SonarSweepSolution } from './day1/SonarSweepSolution';

type inputOptions = 
    '1';

const classMap : Record<inputOptions, Solution> = {
    '1': new SonarSweepSolution
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

