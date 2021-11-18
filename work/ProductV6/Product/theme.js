function dark() {
    bg.style.backgroundColor = '#D3D3D3';
    dark.style.backgroundColor = '#currentColor';
    localStorage.setItem("theme", "dark");
}




function light() {
    bg.style.backgroundColor = '#444444'
    light.style.backgroundColor = '#000000'
    localStorage.setItem("theme", "")
}
export { dark, light };