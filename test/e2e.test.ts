import Fotmob from '../src/fotmob';
const fot = new Fotmob();
describe('WorldNews', () => {
    it('should return WorldNews', async () => {
        await expect(fot.getWorldNews()).resolves.not.toThrow();
    })
})