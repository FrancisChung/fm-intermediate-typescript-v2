// namespace
import * as $ from 'jquery'

$.ajax({
    url: "/api/getweather",
    data: {
        zipcode: 97201,
    },
    success: function (result) {
        $("weather-temp")[0].innerHTML = "<strong>" + result + "</strong> degrees"
    }
})

$('h1.title').forEach((node) => {
    node.tagName
})

function $(selector: string): NodeListOf<Element> {
    return document.querySelectorAll(selector)
}

namespace $ {
    export function ajax(arg: {
        url: string,
        data: any,
        success : (response: any) => void }) : Promise<any> {return Promise.resolve()}
}