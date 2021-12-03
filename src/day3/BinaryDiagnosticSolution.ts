import { Solution } from '../Solution';
import { data } from './data';

type bit = '0' | '1';

interface Counter {
    '0': number,
    '1': number
}

interface AirTracker {
    '0': string[],
    '1': string[]
}

export class BinaryDiagnosticSolution implements Solution {
    data: string[];

    constructor() {
        this.data = data;
    }

    basicSolver(data: string[]) : number {
        let counter : Counter[] = [];
        let gammaValues : string[] = [];
        let epsilonValues : string[] = [];
        data.forEach(bin => {
            while (counter.length < bin.length) {
                counter.unshift({
                    '0': 0,
                    '1': 1
                });
            }
            let bytes = bin.split('') as bit[];
            bytes.forEach((bit : bit, i : number) => {
                counter[i][bit]++;
            });
        });

        counter.forEach(count => {
            gammaValues.push(count['0'] > count['1'] ? '1' : '0');
            epsilonValues.push(count['0'] < count['1'] ? '1' : '0');
        })

        return parseInt(gammaValues.join(''), 2) * parseInt(epsilonValues.join(''), 2);
    }
    
    augmentedSolver(oxygen: string[], carbon: string[], place = 0) : number {
        if (oxygen.length == 1 && carbon.length == 1) {
            return parseInt(oxygen[0], 2) * parseInt(carbon[0], 2);
        }

        if (oxygen.length > 1) {
            let oxygenTracker : AirTracker = {
                '0': [],
                '1': []
            };

            oxygen.forEach(val => {
                const bits = val.split('') as bit[];
                oxygenTracker[bits[place]].push(val);
            });

            oxygen = oxygenTracker['0'].length > oxygenTracker['1'].length ? 
                oxygenTracker['0'] :
                oxygenTracker['1'];
        }

        if (carbon.length > 1) {
            let carbonTracker : AirTracker = {
                '0': [],
                '1': []
            };

            carbon.forEach(val => {
                const bits = val.split('') as bit[];
                carbonTracker[bits[place]].push(val);
            });

            carbon = carbonTracker['0'].length > carbonTracker['1'].length ?
                carbonTracker['1'] :
                carbonTracker['0'];
        }

        return this.augmentedSolver(oxygen, carbon, place + 1);
    }

    solve() {
        console.log(`Basic: ${this.basicSolver(this.data)}`);
        console.log(`Augmented: ${this.augmentedSolver(this.data, this.data)}`);
    }
}
