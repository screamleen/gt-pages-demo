var HomeModule = (function () {
    function rgbToHex(rgb) {
        const rgbValues = rgb.match(/\d+/g); // 获取rgb中的数值
        return "#" + rgbValues.slice(0, 3).map((num) => {
            const hex = parseInt(num).toString(16);
            return hex.length === 1 ? "0" + hex : hex; // 如果是单字符，在前面补0
        }).join("");
    }

    function getHexColorFromElement(element, cssProperty) {
        const style = window.getComputedStyle(element);
        const color = style.getPropertyValue(cssProperty);

        // 检查是否为 rgb 或 rgba 格式
        if(color.startsWith("rgb")) {
            return rgbToHex(color);
        } else if(color.startsWith("#")) {
            return color; // 如果已经是 hex，直接返回
        } else {
            return null; // 不是有效的颜色格式
        }
    }

    function changeColor() {
        var greetElement = document.getElementById("greet")
        var currentColor = getHexColorFromElement(greetElement, 'color');
        if(currentColor === '#f44336') {
            greetElement.style.color = '#8BC34A';
        } else {
            greetElement.style.color = '#f44336';
        }

    }

    return {
        changeColor: changeColor
    };
})();
