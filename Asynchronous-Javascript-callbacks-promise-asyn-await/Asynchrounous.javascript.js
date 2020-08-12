const second = () => {
    setTimeout(() => {
        console.log('Async hey there!');
    }, 2000);
};

const first = () => {
    console.log('Hey there');
    second();
    console.log('the end');
};

first();