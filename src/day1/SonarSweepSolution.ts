import { Solution } from '../Solution';
import { data } from './data';

export class SonarSweepSolution implements Solution {
    data: number[];

    constructor() {
        this.data = data;
    }

    public basicSolver(data: number[]) : number {
        let previous : number | undefined;
        let count = 0;
        data.forEach((val) => {
            if (previous !== undefined && previous < val) {
                count++;
            }

            previous = val;
        });

        return count;
    }

    public augmentedSolver(data: number[]) : number {
        let count = 0;
        for (let i = 0; i < data.length - 3; i++) {
            if (data[i] < data[i + 3]) {
                count++;
            }
        }

        return count;
    }

    public solve() : void {
        console.log(`Basic: ${this.basicSolver(this.data)}`);
        console.log(`Augmented: ${this.augmentedSolver(this.data)}`);
    }
}
