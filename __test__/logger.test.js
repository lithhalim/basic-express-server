'use strict'

const logger=require("../src/middlewares/logger")

describe('logger middelware', () => {
    let consoleSpy;
    let req={};
    let res={};
    let next=jest.fn();

    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,'log').mockImplementation(
            ()=>{
                console.error('this error from the mockImplementation')
            }
        );
    })
    test("is is running",()=>{
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    test("it is calling next",()=>{});

    afterEach(()=>{
        consoleSpy.mockRestore();
    })

    
});
