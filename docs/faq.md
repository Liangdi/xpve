# 常见问题

## 群晖 abb 备份工具在 PVE 下无法安装

### 错误信息
出现错误: 其中版本信息根据实际情况确定
```bash
E: Unable to locate package linux-headers-6.5.11-8-pve
E: Couldn't find any package by glob 'linux-headers-6.5.11-8-pve'
```

### 解决方案
```bash
# 获得当前系统版本
uname -r
# 获得 6.5.11-8-pve
# 安装 equivs
apt install equivs
# 生成 equivs 配置
equivs-control linux-headers-`uname -r`
# 修改 equivs 配置
Package: linux-headers-6.5.11-8-pve
Depends: pve-headers-6.5.11-8-pve
# 可选
Description: Package to make synology backup agent happy
# 生成 deb 包
equivs-build linux-headers-`uname -r`
# 可选，验证 deb 包
dpkg -i linux-headers-`uname -r`_1.0_all.deb
# 安装 deb 包
apt install ./linux-headers-`uname -r`_1.0_all.deb
# 运行安装程序
./install.run
```


参考: <a href="https://www.reddit.com/r/synology/comments/1fd9tj1/abb_supports_linux_kernals_up_to_68_finally/" target="_blank">https://www.reddit.com/r/synology/comments/1fd9tj1/abb_supports_linux_kernals_up_to_68_finally/</a>
