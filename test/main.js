// sendAjax({
//     url: "http://localhost:4000",
//     path: "/sign-in",
//     method: "POST",
//     body: JSON.stringify({ data: ["a", "b", "c"] }),
//     succssCb: function (user) {
//         const userId = user.id;

//         sendAjax({
//             url: "http://localhost:4000?userId=" + userId,
//             path: "/get-friends",
//             method: "POST",
//             succssCb: function (friends) { },
//         });
//     },
// });

// -----------Promise ----------

console.log(1, '1');
const flag = true;

const promise = new Promise((resolve, reject) => {
    console.log(2, '2')
    // console.log(resolve);
    // console.log(reject);
    setTimeout(() => {
        if (flag) {
            resolve()
        } else {
            reject();
        }

        console.log(promise, 'promise');
    }, 2000);
});

// step - 1

const promise2 = promise.then(() => {
    console.log("resolve 1");
},
() => { 
    console.log("reject 1");
});

// step - 2


