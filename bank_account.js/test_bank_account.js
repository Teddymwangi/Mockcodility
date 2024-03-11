const chai = require('chai');
const expect = chai.expect;
const solution = require('.').solution;

describe('Bank Account', () => {
    it('should return the correct balance for test case 1', () => {
        expect(solution([100, 100, 100, -10], ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"])).to.equal(230);
    });

    it('should return the correct balance for test case 2', () => {
        expect(solution([180, -50, -25, -25], ["2020-01-01", "2020-01-01", "2020-01-01", "2020-01-31"])).to.equal(25);
    });

    it('should return the correct balance for test case 3', () => {
        expect(solution([1, -1, 0, -105, 1], ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"])).to.equal(-164);
    });

    it('should return the correct balance for test case 4', () => {
        expect(solution([100, 100, -10, -20, -30], ["2020-01-01", "2020-02-01", "2020-02-11", "2020-02-05", "2020-02-08"])).to.equal(80);
    });

    it('should return the correct balance for test case 5', () => {
        expect(solution([-60, 60, -40, -20], ["2020-10-01", "2020-02-02", "2020-10-10", "2020-10-30"])).to.equal(-115);
    });
});