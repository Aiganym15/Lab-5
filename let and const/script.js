function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = Number(readLine());
    let area;
    let perimeter;
    if (r > 0 && r <= 100) {
        area = PI * r * r;
        perimeter = 2 * PI * r;
        console.log(area);
        console.log(perimeter);
    }
}