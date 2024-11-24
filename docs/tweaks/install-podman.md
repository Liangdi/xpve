# PVE 安装最新版本 Podman 的方法

PVE 8.x 基于 debian 12, 默认的 podman 更新比较慢，需要使用第三方仓库来更新到最新的 podman 版本

## 仓库配置
- 添加仓库
```
echo 'deb http://download.opensuse.org/repositories/home:/alvistack/Debian_12/ /' | tee /etc/apt/sources.list.d/home:alvistack.list

```
- 配置 gpg key
```
curl -fsSL https://download.opensuse.org/repositories/home:alvistack/Debian_12/Release.key | gpg --dearmor |  tee /etc/apt/trusted.gpg.d/home_alvistack.gpg > /dev/null

```

## 安装 podman 
```
apt update && apt install -y podman netavark
```

## 验证安装
```
podman version
```