    let day = prompt("Enter day of the week")

    switch (+day) {
        case 1:
            console.log("Rate is 209")
            break;
        case 2:
            console.log("Rate is 210")
            break;
        case 3:
            console.log("Rate is 290")
            break;
        case 4:
            console.log("Rate is 245")
            break;

        case 5:
        case 6:
        case 7:
            console.log("Rate is 270")
            break;
        default: {
            console.log("Invalid value")
        }

    }