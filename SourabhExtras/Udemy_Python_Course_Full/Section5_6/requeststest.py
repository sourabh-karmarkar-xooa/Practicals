import requests

params = {"q": "pizza"}

r = requests.get("https://www.bing.com/search", params=params)
print("Status :", r.status_code)

print(r.url)

print(r.text)

f = open("./page.html", "w")
f.write(r.text)
