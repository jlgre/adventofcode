import { Solution } from '../Solution';
import { data } from './data';

type direction = 'forward' | 'down' | 'up';

interface CourseStep {
    direction: direction;
    distance: number;
}

export class DiveSolution implements Solution {
    data: string[];

    constructor() {
        this.data = data;
    }

    morphRawDataToCourseSteps(data: string[]) : CourseStep[] {
        let output : CourseStep[] = [];
        data.forEach(val => {
            output.push({
                direction: val.split(' ')[0] as direction,
                distance: parseInt(val.split(' ')[1])
            });
        })
        return output;
    }

    getLocationAfterFollowingCourseBasic(course: CourseStep[]) : [number, number]{
        let horizontal = 0;
        let depth = 0;
        course.forEach(step => {
            switch(step.direction) {
                case 'forward': {
                    horizontal += step.distance;
                    break;
                }
                case 'down': {
                    depth += step.distance;
                    break;
                }
                case 'up': {
                    depth -= step.distance;
                    break;
                }
            }
        });

        return [horizontal, depth];
    }

    getLocationAfterFollowingCourseAugmented(course: CourseStep[]) : [number, number]{
        let horizontal = 0;
        let depth = 0;
        let aim = 0;
        course.forEach(step => {
            switch(step.direction) {
                case 'forward': {
                    horizontal += step.distance;
                    depth += aim * step.distance;
                    break;
                }
                case 'down': {
                    aim += step.distance;
                    break;
                }
                case 'up': {
                    aim -= step.distance;
                    break;
                }
            }
        });

        return [horizontal, depth];
    }

    basicSolver(data : string[]) : number{
        let vals = this.getLocationAfterFollowingCourseBasic(this.morphRawDataToCourseSteps(data));
        return vals[0] * vals[1];
    }

    augmentedSolver(data : string[]) : number{
        let vals = this.getLocationAfterFollowingCourseAugmented(this.morphRawDataToCourseSteps(data));
        return vals[0] * vals[1];
    }

    solve() : void { 
        console.log(`Basic: ${this.basicSolver(this.data)}`);
        console.log(`Augmented: ${this.augmentedSolver(this.data)}`);
    }
}
