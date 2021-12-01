import { Solution } from '../Solution';
import { data } from './data';

export class SonarSweepSolution implements Solution {
    data: number[];

    constructor() {
        this.data = data;
    }

    public solver(data: number[]) : number {
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

    public solve() : number {
        return this.solver(this.data);
    }
}
