function dataChecker(string, rank) {
    if (string == "codenation" && rank == 1) {
        return "Both correct";
    } else if (string == "codenation") {
        return "string correct, rank wrong";
    } else {
        return "string wrong";
    }
};

console.log(dataChecker("codenation", 2));