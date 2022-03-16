---
sidebar_position: 3
---

# OLED

![OLED](/img/oled.jpg)

OLED display uses I2C communication.

## Example config

```yaml title="Example config"
oled:
  enabled: yes
  screensaver_timeout: 30 ms
```

## Configuration variables:

- **enabled** (_Optional_, boolean, default: False) - Enable or disable built-in display.
- **screensaver_timeout** (Optional, timeperiod, default: 60 ms) - Screensaver timeout. How long to wait for timeout. 0 means that screensaver is disabled.
