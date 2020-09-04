
> Open this page at [https://songjoonsuk.github.io/led_matrix/](https://songjoonsuk.github.io/led_matrix/)


## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/songjoonsuk/led_matrix** and import

## Edit this project ![Build status badge](https://github.com/songjoonsuk/led_matrix/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/songjoonsuk/led_matrix** and click import


## Usage

#### ``LED at``

Use the '``LED at``' block to render LEDs at a index location.

특정 위치에 LED의 불을 켜기 위해서는 '``LED at``' 블록을 사용하세요. 

```blocks
for(let i=0; i<25; i++) {
    led_matrix.plotN ( i )
    basic.pause(500)
}
```

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
