function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i){
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }
        close(i);
    }
    console.log("X JavaScript")
}
x();