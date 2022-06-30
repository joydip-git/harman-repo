const f1 = () => console.log('f1')
const f2 = () => console.log('f2')

//event-based asynchronity
setTimeout(
    () => {
        console.log('async fn')
    },
    1000
)

f1()
f2()
console.log('all over')