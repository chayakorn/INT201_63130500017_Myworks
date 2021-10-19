const bmiCalbypounds_inches = (weight, height) => {
    return (weight * 0.453592) / Math.pow((height * 0.0254), 2);
}
console.log(bmiCalbypounds_inches(36.5, 39));