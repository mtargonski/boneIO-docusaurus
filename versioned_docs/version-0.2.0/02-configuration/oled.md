---
sidebar_position: 3
---

# OLED

![OLED](/img/oled.jpg)

OLED display uses I2C communication.

```yaml title="Example config"
oled:
  enabled: yes
  screensaver_timeout: 30
```

## Configuration variables:

- **enabled** (_Optional_, boolean, default: False) - Enable or disable built-in display.
- **screensaver_timeout** (Optional, integer, default: 60) - Screensaver timeout. How many **seconds** to wait for timeout. 0 means that screensaver is disabled.
