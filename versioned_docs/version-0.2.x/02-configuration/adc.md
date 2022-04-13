---
sidebar_position: 10
---

# ADC sensors

![ADC](/img/adc.png)

## Example config

```yaml title="Example config"
adc:
  - id: adc1
    pin: P9_39
```

## Configuration variables:

- **id** (_Optional_, string, default: value of `{pin}`) - ID to use to name this device in MQTT and Home Assistant.
- **pin** (**Required**, string, allowed_values: `['P9_33', 'P9_35', 'P9_36', 'P9_37', 'P9_38', 'P9_39', 'P9_40']`) - ADC GPIO id of Beaglebone board.
- **update_interval** (_Optional_, integer, default: 60) - update interval in seconds
