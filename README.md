# ๐ ์ง ํ๋ก๊ทธ๋๋ฐ ๋ ๋ฒ์งธ ์ฑ! ๐
> ๋ฐ๋๋ผ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๊ตฌํํ ํ์ด๋จธ๐คฉ

<br>
<hr>

## ๐ ๊ธฐ๋ฅ ๋ชฉ๋ก ๐

<br>
<hr>

## โ๏ธ ์ปค๋ฐ ๋ชฉ๋ก โ๏ธ

<br>
<hr>

## ๐  Contributors ๐ 

<table>
  <tr height="140px">
    <td align="center">
      <a href="https://github.com/InSeong-So"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/18283006?v=4"/></a>
      <br />
      <a href="https://github.com/InSeong-So">InSeong-So</a>
    </td>
    <td align="center">
      <a href="https://github.com/programmer-heeney"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/66028045?v=4"/></a>
      <br />
      <a href="https://github.com/programmer-heeney">heeney</a>
    </td>
  </tr>
</table>

<hr>

## CI/CD ํ์คํธ

```sh
aws ๊ฐ์
ec2 ami ์ ํ(ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server), t2-micro, 22/80/9999, ํค ์๋ก ์์ฑ(jenkins-ec2)

window ์์๋ ํด๋ ๊ถํ์ ์ ๊ฑฐํด์ค๋ค

cd ๋๋ ํ ๋ฆฌ
ssh -i "jenkins-ec2.pem" AWS_IP

$ sudo apt update -y

$ sudo apt upgrade -y

$ sudo apt install -y openjdk-11-jdk

$ sudo apt install -y docker.io

$ sudo apt install -y nginx

$ wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add

$ echo deb http://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list

$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys FCEF32E745F2C3D5

$ sudo apt update -y

$ sudo apt install -y jenkins

$ sudo vi /etc/default/jenkins
HTTP_PORT=9999

$ sudo systemctl restart jenkins

http://ํผ๋ธ๋ฆญIP:9999
[์ด๊ธฐ๋น๋ฐ๋ฒํธ] sudo cat /var/lib/jenkins/secrets/initialAdminPassword

$ cd /etc/nginx

$ sudo rm nginx.conf

$ sudo vi nginx.conf

$ sudo systemctl reload nginx

$ sudo usermod -aG docker jenkins

$ sudo su -s /bin/bash jenkins

$ mkdir /var/lib/jenkins/.ssh

$ ssh-keygen -t rsa -b 4096 -C "wh-key" -f /var/lib/jenkins/.ssh/jenkins-github-wh

$ cat /var/lib/jenkins/.ssh/jenkins-github-wh.pub

์  ํจ์ค ๊ด๋ฆฌ - Manage Credentials - add credential - SSH Username with private key
Scope๋ฅผ Global์ Jenkins Node๋ก ์ค์ ํ ๋ค, Username ์ ์๊น ๋ง๋ค์ด์ค RSA Key์ ์ด๋ฆ๊ณผ ๋์ผํ๊ฒ ์ค์ 

$ cat /var/lib/jenkins/.ssh/jenkins-github-wh

๋์๋ณด๋-์๋ก์ดItem-Freestyle Project
```