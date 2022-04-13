---
sidebar_position: 1
---

# Testing dev version

## Prepare VENV

Assume test version is 0.2.1dev1

```bash
mkdir ~/boneio_test
python3 -m venv ~/boneio_test/venv
source ~/boneio_test/venv/bin/activate
pip3 install boneio==0.2.1dev1
```

Now prepare your config according to release notes.
