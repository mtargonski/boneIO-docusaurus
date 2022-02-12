---
sidebar_position: 3
---

# Powering boneIO

## Power Consumption

The power consumption depends on the output board that you choose. It could vary from 7W to 12W - depends on the quantity and type of relays that you choose.

In idle mode (all reyals off) boneIO will take about 2W.

![Idle](/img/idle.jpg)

With Relay Board 32x5A (hf46f relays) on full load (all relays on) boneIO will take about 7W.

![32x5A](/img/hongfa.jpg)

With Relay Board 24x16A (zetler relays) on full load (all relays on) boneIO will take about 10W.

![24x16A](/img/zetler.jpg)

## Main Power Supply

To power the boneIO you need 24V power supply which will give at least 15W of power.

Prefered models of power supply are:

- Mean Well hdr-30-24 - perfect for one or two boneIO modules
- Mean Well hdr-60-24 - you can run 3 or even 4 modules on this power supply

![Mean Well](/img/hdr.jpg)

## Internal Buck Converter

boneIO uses LM2596 Buck Converter to power BeagleBone Black (5V) from 24V Main Power Supply. To power BBB with LM2596 you can use voltage from about 6V to 35V but be careful - relays have direct connection to main power supply so they will not work correct if powered with inproper voltage.
If you wan't to work with for example 12V power supply you have to change relays to the 12V version - everything else will work just fine.

![Mean Well](/img/lm2596.jpg)

## External PSU

External PSU is used for powering the inputs from outside the main power supply - for example with 48V. This function is not working properly yet in v0.3.
