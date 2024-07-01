const asyncHandler = (requestHandler) => {//1..request handler ekk naam hai

    return (req, res, next) => {//2..retun kar raha hai Promise ke format mein

        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))//2..catch mein jo age wala hai wo solve karenga
        //requestHandler mein paramter pass kardoh
    }
}


export { asyncHandler }//1..




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//                 har ek function le raha hu use wrapper hi laga raha hu
//  try {
//         await fn(req, res, next)//jo function hai usee excecute karo
//     } catch (error) {
//         res.status(err.code || 500).json({//json response and frontend walo ko response bhi dena hota hai true hai false
//             success: false,
//             message: err.message
//         })
//     }
// }