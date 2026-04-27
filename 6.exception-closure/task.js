function parseCount(num) {
    const result = Number.parseFloat(num);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение")
    }
    return result;
}


function validateCount(num) {
    try {
        const result = parseCount(num);
        return result;
    } catch (error) {
        return error;
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        const P = this.a + this.b + this.c;
        return P;

    }
    get area() {
        const p = this.perimeter / 2;
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +S.toFixed(3);
    }
}
    function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c);
        } catch (error) {
            console.log(error);

            return {
                get perimeter() {
                    return "Ошибка! Треугольник не существует";
                },
                get area() {
                    return "Ошибка! Треугольник не существует";
                }
            };


        }
    }