# PVE 8 更换 apt 国内源的方法[清华源]

## 清华源信息
官方网站 [https://mirrors.tuna.tsinghua.edu.cn/help/proxmox/](https://mirrors.tuna.tsinghua.edu.cn/help/proxmox/)

## 更换流程
- 备份原文件
```shell
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```
- 替换源文件
```shell
# debian 12 源
cat > /etc/apt/sources.list << EOF
deb http://mirrors.ustc.edu.cn/debian/ bookworm main non-free-firmware
deb-src http://mirrors.ustc.edu.cn/debian/ bookworm main non-free-firmware

deb https://mirrors.ustc.edu.cn/debian-security bookworm-security main contrib

deb http://mirrors.ustc.edu.cn/debian/ bookworm-updates main non-free-firmware
deb-src http://mirrors.ustc.edu.cn/debian/ bookworm-updates main non-free-firmware

EOF
```
```shell
# pve 软件原
cat > /etc/apt/sources.list.d/pve-no-subscription.list << EOF
deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian/pve bookworm pve-no-subscription
EOF
```