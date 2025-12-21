---
title: "{{ replace .Name "-" " " | title .Site.Title }}"
date: '{{ .Date }}'
draft: {{ .Draft }}
---