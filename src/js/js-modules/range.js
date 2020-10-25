//  ** https://refreshless.com/nouislider/ **

import noUiSlider from "nouislider"
export default function initRange() {
    const slider = document.querySelector(".listing__filter-price-range")
    const sliderMin = document.querySelector("[name=range-min]")
    const sliderMax = document.querySelector("[name=range-max]")
    const inputs = [sliderMin, sliderMax]
    if (slider) {
        noUiSlider.create(slider, {
            start: [4000, 8000],
            connect: true,
            range: {
                min: 0,
                max: 100000,
            },
        })

        slider.noUiSlider.on("update", function (values, handle) {
            inputs[handle].value = Math.floor(values[handle])
        })
        inputs.forEach(function (input, handle) {
            input.addEventListener("change", function () {
                slider.noUiSlider.setHandle(handle, this.value)
            })
        })
    }
}
