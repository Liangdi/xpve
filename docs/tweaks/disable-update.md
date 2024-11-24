# 关闭自动更新

生产系统自动更新容易遇到不可预知的问题，正常需要关闭自动更新，按需手动更新

## 关闭方法

```bash
systemctl disable --now pve-daily-update.timer
```

## 开启方法

```bash
systemctl enable --now pve-daily-update.timer
```