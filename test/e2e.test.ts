import Fotmob from '../src/fotmob';

describe("suggest", () => {
    it('should load suggest data', async () => {
        const fot = new Fotmob();
        const data = await fot.search("arsenal");
        expect(data).toBeDefined();
        expect(data).toBeInstanceOf(Object);
        expect(data).toHaveProperty('matchSuggest');
        expect(data).toHaveProperty('teamSuggest');
        expect(data.matchSuggest.filter((x: any) => x.text.toLowerCase() === 'arsenal').length).toBeGreaterThan(0);
        expect(data.teamSuggest.filter((x: any) => x.text.toLowerCase() === 'arsenal').length).toBeGreaterThan(0);
    }, 10000);

});