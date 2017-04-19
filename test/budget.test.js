import assert from 'assert';
import Budget from '../src/budget';

describe('Budget', () => {
    const name = 'new budget';
    const date = new Date();
    
    let budget;
    
    beforeEach(() => {
        budget = new Budget(name, date);
    });
    
    afterEach(() => {
        budget = null;
    });
    
    it('should have name', () => {
        assert.equal(budget.getName(), name);
    });
    
    it('should change name', () => {
        const newName = 'new budget name';
        budget.setName(newName);
        assert.equal(budget.getName(), newName);
    });
    
    it('should have date created', () => {
        assert.equal(budget.getDate().getTime(), date.getTime());
    });
    
    it('should delete properly', () => {
        assert.equal(budget.isDeleted(), false);
        budget.deleteBudget();
        assert.equal(budget.isDeleted(), true);
    });
    
    it('should export', () => {
        const mockBudget = {
            name: budget.getName(),
            dateCreated: budget.getDate().getTime(),
            lastModified: budget.getLastModified().getTime(),
            deleted: budget.isDeleted()
        };
        
        assert.equal(budget.toString(), JSON.stringify(mockBudget));
    });
    
    it('should import', () => {
       const newName = 'new name';
       const newDate = new Date();
       const newLastModified = new Date();
       const newDeleted = true;
       
       const mockBudget = {
           name: newName,
           dateCreated: newDate.getTime(),
           lastModified: newLastModified.getTime(),
           deleted: newDeleted
       };
       
       budget.importBudget(mockBudget);
       
       assert.equal(budget.toString(), JSON.stringify(mockBudget));
    });
});
