/* eslint-disable no-undef */
describe('Test List', () => {
    let list;

    let listA;
    it("Init list '1, 2, 3, 4, 5'", () => {
        list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);

        assert.equal(list.toString(), '1, 2, 3, 4, 5');
    });

    it("Get at 3 from list '1, 2, 3, 4, 5' === 4", () => {
        assert.equal(list.getByIndex(3), '4');
    });

    it("Delete at 3 from list '1, 2, 3, 4, 5' === '1, 2, 3, 5'", () => {
        assert.equal(list.deleteAt(3).toString(), '1, 2, 3, 5');
    });

    it("Push into '7, 6, 12, 9' === '1, 2, 3, 5, 7, 6, 12, 9'", () => {
        list.push(7);
        list.push(6);
        list.push(12);
        list.push(9);
        assert.equal(list.toString(), '1, 2, 3, 5, 7, 6, 12, 9');
    });

    it("Merge Sort '1, 2, 3, 5, 7, 6, 12, 9' === '1, 2, 3, 5, 6, 7, 9, 12'", () => {
        assert.equal(list.mergeSort().toString(), '1, 2, 3, 5, 6, 7, 9, 12');
    });

    it("Reverse '1, 2, 3, 5, 6, 7, 9, 12' === '12, 9, 7, 6, 5, 3, 2, 1'", () => {
        assert.equal(list.reverse().toString(), '12, 9, 7, 6, 5, 3, 2, 1');
    });

    it("Reverse '12, 9, 7, 6, 5, 3, 2, 1' === '1, 2, 3, 5, 6, 7, 9, 12'", () => {
        assert.equal(list.reverse().toString(), '1, 2, 3, 5, 6, 7, 9, 12');
    });

    it("Create extra list '5, 6, 8, 9'", () => {
        listA = new List();
        listA.push(5);
        listA.push(6);
        listA.push(8);
        listA.push(9);
        assert.equal(listA.toString(), '5, 6, 8, 9');
    });

    it("Merge Sorted '1, 2, 3, 5, 6, 7, 9, 12' AND '5, 6, 8, 9' === 1, 2, 3, 5, 5, 6, 6, 7, 8, 9, 9, 12", () => {
        const listB = list.mergeWithList(listA);
        assert.equal(listB.toString(), '1, 2, 3, 5, 5, 6, 6, 7, 8, 9, 9, 12');
    });
});